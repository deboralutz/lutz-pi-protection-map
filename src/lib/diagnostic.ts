import type {
  DiagnosticAnswers,
  DiagnosticQuestion,
  DiagnosticResult,
  DiagnosticScores,
  DiagnosticSignal,
  DiagnosticStateId,
} from "@/types/diagnostic";

const institutionalNotice =
  "Esta leitura tem finalidade orientativa. A definição de viabilidade depende de análise técnica, busca específica e avaliação do contexto da marca.";

const stateCopy: Record<
  DiagnosticStateId,
  {
    label: string;
    summary: string;
    attentionPoints: string[];
    recommendedNextStep: string;
  }
> = {
  "initial-presence": {
    label: "Presença inicial",
    summary:
      "A marca está em fase de formação. Ainda há espaço para organizar nome, identidade, categoria de atuação e estratégia de proteção antes de ampliar a exposição pública.",
    attentionPoints: [
      "O nome, a identidade visual e a categoria de atuação ainda podem precisar de maior definição.",
      "A busca no INPI deve entrar no planejamento antes de investimento mais consistente.",
    ],
    recommendedNextStep:
      "Organizar o nome principal, o campo de atuação e uma primeira busca técnica antes de ampliar a presença pública.",
  },
  "public-unprotected": {
    label: "Presença pública sem proteção formal",
    summary:
      "A marca já aparece publicamente, mas ainda precisa de delimitação formal suficiente para sustentar sua continuidade com maior segurança.",
    attentionPoints: [
      "Uso em redes, domínio ou materiais não substitui análise de anterioridade nem pedido no INPI.",
      "A circulação pública pode aumentar a importância de verificar marcas anteriores e categorias adequadas.",
    ],
    recommendedNextStep:
      "Realizar uma busca técnica de anterioridade e avaliar a classe adequada para um eventual pedido de registro.",
  },
  "vulnerable-expansion": {
    label: "Expansão vulnerável",
    summary:
      "A marca já possui uso, investimento, circulação ou reconhecimento, enquanto sua proteção formal permanece incompleta. Este estado exige atenção estratégica.",
    attentionPoints: [
      "A expansão aumenta a exposição do nome antes da delimitação formal estar suficientemente estruturada.",
      "Planos de tráfego, lançamento, site ou identidade visual devem ser avaliados junto com busca e estratégia de pedido.",
    ],
    recommendedNextStep:
      "Priorizar uma análise técnica da marca, incluindo anterioridade, classe, risco de colidência e viabilidade de pedido no INPI.",
  },
  "structured-protection": {
    label: "Proteção estruturada",
    summary:
      "A marca possui relação mais clara entre presença pública, proteção formal e continuidade estratégica. Ainda pode haver pontos específicos de acompanhamento.",
    attentionPoints: [
      "Pedido em andamento, classe e uso público precisam ser acompanhados de forma coerente.",
      "A proteção deve continuar alinhada aos produtos, serviços e canais de expansão da marca.",
    ],
    recommendedNextStep:
      "Acompanhar o processo, revisar a estratégia de classes e manter documentação consistente sobre o uso da marca.",
  },
  "consolidated-asset": {
    label: "Ativo consolidado",
    summary:
      "A marca opera como ativo protegido, com maior estabilidade para expansão, documentação, licenciamento, produtos, serviços ou crescimento institucional.",
    attentionPoints: [
      "A proteção concedida deve ser acompanhada quanto a prazos, uso consistente e expansão para novas frentes.",
      "Novos produtos, serviços ou territórios de atuação podem exigir revisão estratégica.",
    ],
    recommendedNextStep:
      "Manter governança da marca, documentação de uso e acompanhamento técnico para expansão ou novos ativos relacionados.",
  },
};

const scoreKeys: DiagnosticSignal[] = [
  "identity",
  "publicExposure",
  "commercialUse",
  "formalProtection",
  "strategyClarity",
  "growth",
  "risk",
  "platformDependency",
];

export function evaluateDiagnostic(
  answers: DiagnosticAnswers,
  questions: DiagnosticQuestion[],
): DiagnosticResult {
  const scores = createEmptyScores();

  for (const question of questions) {
    const answer = answers[question.id];
    const selectedOption = question.options.find((option) => option.value === answer);

    if (!selectedOption) {
      continue;
    }

    for (const [signal, value] of Object.entries(selectedOption.signals)) {
      scores[signal as DiagnosticSignal] += value ?? 0;
    }
  }

  const stateId = determineState(answers, scores);
  const copy = stateCopy[stateId];

  return {
    stateId,
    stateLabel: copy.label,
    summary: copy.summary,
    attentionPoints: buildAttentionPoints(copy.attentionPoints, answers, scores),
    recommendedNextStep: copy.recommendedNextStep,
    institutionalNotice,
    scores,
  };
}

function createEmptyScores(): DiagnosticScores {
  return scoreKeys.reduce((scores, key) => {
    scores[key] = 0;
    return scores;
  }, {} as DiagnosticScores);
}

function determineState(
  answers: DiagnosticAnswers,
  scores: DiagnosticScores,
): DiagnosticStateId {
  const trademarkStatus = answers.trademarkStatus;
  const hasRegisteredTrademark = trademarkStatus === "registered";
  const hasFiledApplication = trademarkStatus === "filed";
  const hasPublicPresence = scores.publicExposure >= 2 || scores.commercialUse > 0;
  const hasGrowthPressure = scores.growth >= 3 || scores.commercialUse >= 2;
  const hasRelevantRisk = scores.risk >= 3 || scores.platformDependency >= 2;
  const hasStructuredFormalLayer =
    scores.formalProtection >= 5 && scores.strategyClarity >= 3;

  if (hasRegisteredTrademark && scores.strategyClarity >= 4 && hasPublicPresence) {
    return "consolidated-asset";
  }

  if (hasRegisteredTrademark || (hasFiledApplication && hasStructuredFormalLayer)) {
    return "structured-protection";
  }

  if (
    hasPublicPresence &&
    scores.formalProtection < 3 &&
    (hasGrowthPressure || hasRelevantRisk)
  ) {
    return "vulnerable-expansion";
  }

  if (hasPublicPresence && scores.formalProtection < 3) {
    return "public-unprotected";
  }

  return "initial-presence";
}

function buildAttentionPoints(
  basePoints: string[],
  answers: DiagnosticAnswers,
  scores: DiagnosticScores,
): string[] {
  const points = new Set(basePoints);

  if (answers.inpiSearch === "none" || answers.inpiSearch === "informal") {
    points.add(
      "A busca de anterioridade ainda precisa ser aprofundada para reduzir incertezas sobre marcas anteriores.",
    );
  }

  if (answers.marketCategory === "unclear" || answers.marketCategory === "partial") {
    points.add(
      "A classe ou categoria de proteção deve ser confirmada antes de definir a estratégia formal.",
    );
  }

  if (answers.similarityRisk === "similar" || answers.similarityRisk === "unknown") {
    points.add(
      "O risco de semelhança com marcas do mesmo setor pede uma leitura técnica de colidência.",
    );
  }

  if (scores.platformDependency >= 2) {
    points.add(
      "A dependência de um canal principal pode aumentar a fragilidade estratégica da presença pública.",
    );
  }

  if (answers.trademarkStatus === "none" && scores.publicExposure >= 2) {
    points.add(
      "A marca já circula publicamente sem pedido formal identificado nesta leitura.",
    );
  }

  return Array.from(points).slice(0, 5);
}

