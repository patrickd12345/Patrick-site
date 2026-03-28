export type NavItem = {
  href: string;
  label: string;
};

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

export type WorkPrinciple = {
  title: string;
  description: string;
};

export type ResumeItem = {
  role: string;
  org: string;
  period: string;
  summary: string;
  focusAreas: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};
