import type { DiagnosticQuestion } from "@/types/diagnostic";

export const diagnosticQuestions = [
  {
    id: "brandName",
    eyebrow: "Identidade da marca",
    title: "Você já definiu o nome da marca?",
    helper: "O nome é o primeiro sinal distintivo que será lido no diagnóstico.",
    options: [
      {
        value: "defined",
        label: "Sim, o nome já está definido.",
        description: "A marca possui um nome principal em uso ou pronto para uso.",
        signals: { identity: 2, strategyClarity: 1 },
      },
      {
        value: "testing",
        label: "Tenho uma opção principal, mas ainda estou validando.",
        description: "A identidade nominal existe, mas ainda pode mudar.",
        signals: { identity: 1 },
      },
      {
        value: "undefined",
        label: "Ainda não defini o nome.",
        description: "A marca ainda está em etapa inicial de formação.",
        signals: {},
      },
    ],
  },
  {
    id: "publicUse",
    eyebrow: "Presença pública",
    title: "A marca já aparece publicamente em algum canal?",
    helper: "Uso público inclui redes sociais, site, materiais, propostas, apresentações ou portfólio.",
    options: [
      {
        value: "active",
        label: "Sim, a marca já aparece publicamente.",
        description: "Há exposição reconhecível do nome ou da identidade da marca.",
        signals: { publicExposure: 2, risk: 1 },
      },
      {
        value: "limited",
        label: "Aparece de forma pontual ou ainda discreta.",
        description: "A presença existe, mas a circulação ainda é limitada.",
        signals: { publicExposure: 1 },
      },
      {
        value: "none",
        label: "Ainda não aparece publicamente.",
        description: "A marca não foi apresentada ao público.",
        signals: {},
      },
    ],
  },
  {
    id: "socialPresence",
    eyebrow: "Presença pública",
    title: "A marca já é usada no Instagram ou em outras redes sociais?",
    helper: "Redes sociais indicam circulação, mas não substituem proteção formal.",
    options: [
      {
        value: "primary",
        label: "Sim, as redes são o canal principal.",
        description: "A marca depende bastante da presença em plataforma social.",
        signals: { publicExposure: 2, platformDependency: 1, risk: 1 },
      },
      {
        value: "supporting",
        label: "Sim, mas as redes são apenas um apoio.",
        description: "A presença social existe dentro de um conjunto maior de canais.",
        signals: { publicExposure: 1 },
      },
      {
        value: "none",
        label: "Ainda não uso redes com essa marca.",
        description: "A marca não possui presença social ativa.",
        signals: {},
      },
    ],
  },
  {
    id: "domainOwnership",
    eyebrow: "Presença pública",
    title: "Você já possui domínio próprio relacionado à marca?",
    helper: "Domínio ajuda na presença digital, mas não equivale a registro de marca.",
    options: [
      {
        value: "owned",
        label: "Sim, o domínio já está reservado ou em uso.",
        description: "Existe um canal digital próprio associado ao nome.",
        signals: { publicExposure: 1, strategyClarity: 1 },
      },
      {
        value: "planned",
        label: "Ainda não, mas pretendo reservar.",
        description: "A presença digital própria está no planejamento.",
        signals: { strategyClarity: 1 },
      },
      {
        value: "none",
        label: "Não tenho domínio relacionado à marca.",
        description: "A marca depende de outros canais ou ainda não possui presença digital própria.",
        signals: {},
      },
    ],
  },
  {
    id: "commercialActivity",
    eyebrow: "Atividade de mercado",
    title: "Você já divulga ou vende produtos, serviços, conteúdos ou atendimentos com esse nome?",
    helper: "Atividade comercial aumenta a necessidade de leitura sobre categoria, anterioridade e proteção.",
    options: [
      {
        value: "recurring",
        label: "Sim, isso já acontece de forma recorrente.",
        description: "A marca já sustenta oferta, venda, conteúdo ou atendimento.",
        signals: { publicExposure: 2, commercialUse: 2, growth: 2, risk: 1 },
      },
      {
        value: "occasional",
        label: "Sim, mas ainda de forma inicial.",
        description: "Já existe uso ligado a uma oferta, mesmo em menor escala.",
        signals: { publicExposure: 1, commercialUse: 1, growth: 1 },
      },
      {
        value: "none",
        label: "Ainda não há divulgação ou venda com esse nome.",
        description: "A marca ainda não sustenta atividade pública de mercado.",
        signals: {},
      },
    ],
  },
  {
    id: "visualIdentity",
    eyebrow: "Identidade da marca",
    title: "A marca já possui identidade visual?",
    helper: "Identidade visual indica investimento e consolidação simbólica, mesmo antes do registro.",
    options: [
      {
        value: "complete",
        label: "Sim, já existe uma identidade visual definida.",
        description: "Há sinais visuais consistentes associados à marca.",
        signals: { identity: 2, growth: 1, strategyClarity: 1 },
      },
      {
        value: "basic",
        label: "Existe algo básico ou provisório.",
        description: "A marca possui elementos visuais, mas ainda sem sistema completo.",
        signals: { identity: 1 },
      },
      {
        value: "none",
        label: "Ainda não possui identidade visual.",
        description: "A dimensão visual ainda será desenvolvida.",
        signals: {},
      },
    ],
  },
  {
    id: "inpiSearch",
    eyebrow: "Proteção formal",
    title: "Você já fez busca de anterioridade no INPI?",
    helper: "A busca ajuda a observar marcas anteriores, nomes semelhantes e possíveis obstáculos.",
    options: [
      {
        value: "technical",
        label: "Sim, já fiz uma busca técnica.",
        description: "A marca já passou por uma verificação mais cuidadosa.",
        signals: { formalProtection: 2, strategyClarity: 2 },
      },
      {
        value: "informal",
        label: "Fiz apenas uma busca simples ou informal.",
        description: "Há uma primeira verificação, mas ela ainda pode ser insuficiente.",
        signals: { formalProtection: 1, strategyClarity: 1 },
      },
      {
        value: "none",
        label: "Ainda não fiz busca no INPI.",
        description: "A marca ainda não foi confrontada com bases formais de anterioridade.",
        signals: { risk: 1 },
      },
    ],
  },
  {
    id: "trademarkStatus",
    eyebrow: "Proteção formal",
    title: "Qual é o status do pedido de marca?",
    helper: "O status formal é decisivo para diferenciar presença, pedido em andamento e ativo protegido.",
    options: [
      {
        value: "registered",
        label: "A marca já possui registro concedido.",
        description: "Existe uma proteção formal concedida para a marca.",
        signals: { formalProtection: 5, strategyClarity: 2 },
      },
      {
        value: "filed",
        label: "Existe pedido de registro em andamento.",
        description: "A marca já iniciou o caminho formal junto ao INPI.",
        signals: { formalProtection: 3, strategyClarity: 1 },
      },
      {
        value: "evaluating",
        label: "Ainda estou avaliando se devo pedir o registro.",
        description: "A proteção formal está em estudo, sem pedido apresentado.",
        signals: { formalProtection: 1 },
      },
      {
        value: "none",
        label: "Ainda não existe pedido de registro.",
        description: "A marca não possui delimitação formal em andamento.",
        signals: { risk: 1 },
      },
    ],
  },
  {
    id: "marketCategory",
    eyebrow: "Categoria e estratégia",
    title: "Você sabe em qual categoria ou classe a marca deveria ser protegida?",
    helper: "A classe organiza o campo de atuação e ajuda a delimitar a proteção da marca.",
    options: [
      {
        value: "clear",
        label: "Sim, tenho clareza sobre a categoria principal.",
        description: "O campo de atuação da marca está bem localizado.",
        signals: { strategyClarity: 2, formalProtection: 1 },
      },
      {
        value: "partial",
        label: "Tenho uma ideia, mas ainda preciso confirmar.",
        description: "A categoria é provável, mas ainda pede análise técnica.",
        signals: { strategyClarity: 1 },
      },
      {
        value: "unclear",
        label: "Ainda não sei em qual categoria a marca se encaixa.",
        description: "A delimitação do campo de proteção ainda está aberta.",
        signals: { risk: 1 },
      },
    ],
  },
  {
    id: "similarityRisk",
    eyebrow: "Risco de colidência",
    title: "Existe outra marca com nome parecido no mesmo setor?",
    helper: "Semelhança no mesmo campo de atuação pode exigir análise específica de colidência.",
    options: [
      {
        value: "similar",
        label: "Sim, já encontrei algo parecido.",
        description: "Há um ponto concreto de atenção para análise técnica.",
        signals: { risk: 3 },
      },
      {
        value: "unknown",
        label: "Não sei dizer.",
        description: "A ausência de verificação ainda deixa a leitura incompleta.",
        signals: { risk: 2 },
      },
      {
        value: "none",
        label: "Não identifiquei marcas parecidas.",
        description: "Até o momento não há semelhança percebida por você.",
        signals: { strategyClarity: 1 },
      },
    ],
  },
  {
    id: "platformDependence",
    eyebrow: "Dependência de canais",
    title: "A presença da marca depende principalmente de uma plataforma, como Instagram ou domínio próprio?",
    helper: "Dependência de canal pode deixar a marca mais exposta quando a proteção formal é frágil.",
    options: [
      {
        value: "high",
        label: "Sim, a marca depende muito de um canal principal.",
        description: "A presença está concentrada em uma plataforma ou ponto de acesso.",
        signals: { platformDependency: 2, risk: 1 },
      },
      {
        value: "balanced",
        label: "Há presença em mais de um canal.",
        description: "A marca circula por canais diferentes, com alguma distribuição.",
        signals: { platformDependency: 1, strategyClarity: 1 },
      },
      {
        value: "low",
        label: "A presença ainda é pequena ou pouco dependente de canais.",
        description: "A marca não está concentrada em uma plataforma dominante.",
        signals: {},
      },
    ],
  },
  {
    id: "expansionPlans",
    eyebrow: "Expansão",
    title: "Você pretende investir em identidade visual, tráfego, site, produto digital ou lançamento?",
    helper: "Planos de expansão pedem mais clareza sobre nome, classe, anterioridade e pedido.",
    options: [
      {
        value: "shortTerm",
        label: "Sim, há investimento previsto no curto prazo.",
        description: "A marca caminha para maior exposição e circulação.",
        signals: { growth: 3, risk: 1 },
      },
      {
        value: "gradual",
        label: "Sim, mas de forma gradual.",
        description: "Existe intenção de crescimento, com ritmo moderado.",
        signals: { growth: 1 },
      },
      {
        value: "none",
        label: "Ainda não há plano de expansão definido.",
        description: "A marca pode ser organizada antes de ampliar exposição.",
        signals: {},
      },
    ],
  },
] satisfies DiagnosticQuestion[];

