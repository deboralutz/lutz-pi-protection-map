export type DiagnosticStateId =
  | "initial-presence"
  | "public-unprotected"
  | "vulnerable-expansion"
  | "structured-protection"
  | "consolidated-asset";

export type DiagnosticSignal =
  | "identity"
  | "publicExposure"
  | "commercialUse"
  | "formalProtection"
  | "strategyClarity"
  | "growth"
  | "risk"
  | "platformDependency";

export type DiagnosticSignals = Partial<Record<DiagnosticSignal, number>>;

export type DiagnosticOption = {
  value: string;
  label: string;
  description: string;
  signals: DiagnosticSignals;
};

export type DiagnosticQuestion = {
  id: string;
  eyebrow: string;
  title: string;
  helper: string;
  options: DiagnosticOption[];
};

export type DiagnosticAnswers = Record<string, string>;

export type DiagnosticScores = Record<DiagnosticSignal, number>;

export type DiagnosticResult = {
  stateId: DiagnosticStateId;
  stateLabel: string;
  summary: string;
  attentionPoints: string[];
  recommendedNextStep: string;
  institutionalNotice: string;
  scores: DiagnosticScores;
};

