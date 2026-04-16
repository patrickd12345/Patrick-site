export type ProofItem = {
  label: string;
  value: string;
};

export type Venture = {
  id: string;
  name: string;
  oneLiner: string;
  technicalFraming: string;
  businessFraming: string;
  maturity: string;
  projectHref: string;
  caseStudyHref: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  summary: string;
  problem: string;
  whyItMatters: string;
  productScope: string;
  architectureDecisions: string[];
  constraints: string[];
  implementationChoices: string[];
  credibilitySignals: string[];
  maturityLevel: string;
};
