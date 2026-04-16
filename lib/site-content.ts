import type {
  CaseStudy,
  ProofItem,
  Venture,
} from "@/lib/types";

type NavItem = {
  href: string;
  label: string;
};

type WorkPrinciple = {
  title: string;
  description: string;
};

type ResumeItem = {
  role: string;
  org: string;
  period: string;
  summary: string;
  focusAreas: string[];
};

type SkillGroup = {
  title: string;
  items: string[];
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export const proofItems: ProofItem[] = [
  { label: "Role", value: "Founder, Bookiji Inc" },
  { label: "Products", value: "Bookiji, Kinetix, MyAssist" },
  { label: "Architecture", value: "Shared multi-schema Supabase spine" },
  { label: "Execution", value: "Deterministic lifecycle and migration rigor" },
  { label: "AI", value: "AI-integrated product and ops workflows" },
];

export const ventures: Venture[] = [
  {
    id: "myassist",
    name: "MyAssist",
    oneLiner:
      "AI-powered personal operating system over Gmail, Calendar, and Todoist.",
    technicalFraming:
      "Provider-canonical architecture with live reads and direct provider writes, no mirror tables.",
    businessFraming:
      "Strategic near-term launch product focused on real daily utility and reliable execution.",
    maturity: "Active build with production-oriented architecture boundaries.",
    projectHref: "/projects#myassist",
    caseStudyHref: "/case-studies#myassist",
  },
  {
    id: "kinetix",
    name: "Kinetix",
    oneLiner:
      "Performance platform for biomechanics-aware run analysis and coaching.",
    technicalFraming:
      "Cross-platform watchOS/iOS/web system with rule-based + ML-supported scoring paths.",
    businessFraming:
      "Demonstrates product iteration discipline from specialized personal utility toward broader use.",
    maturity: "Multi-platform architecture with strong analytics and coaching primitives.",
    projectHref: "/projects#kinetix",
    caseStudyHref: "/case-studies#kinetix",
  },
  {
    id: "bookiji",
    name: "Bookiji",
    oneLiner:
      "Long-horizon universal booking platform built on deterministic scheduling fundamentals.",
    technicalFraming:
      "Schema-segregated SaaS spine, deterministic booking lifecycle, idempotent webhook handling.",
    businessFraming:
      "Flagship venture with staged rollout from scheduling foundation to marketplace expansion.",
    maturity: "Production scheduling core with governance-heavy architecture discipline.",
    projectHref: "/projects#bookiji",
    caseStudyHref: "/case-studies#bookiji",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "myassist",
    title: "MyAssist: Live Operational Window, Not a Sync Engine",
    summary:
      "Designed as a provider-canonical control layer that reasons across systems without data mirroring.",
    problem:
      "Most personal productivity tooling drifts from source systems and becomes fragile when data ownership is unclear.",
    whyItMatters:
      "Operational assistants fail when their model of reality is stale. Daily execution depends on trustworthy context.",
    productScope:
      "Unified assistant over Gmail, Google Calendar, and Todoist with OAuth integrations, contextual reasoning, and explicit action confirmation.",
    architectureDecisions: [
      "Provider systems remain canonical for mail, calendar, and tasks.",
      "App stores only connection state, preferences, app memory, and lightweight metadata.",
      "Live on-demand reads power daily context; writes go directly to provider APIs.",
      "Assistant mode supports local model path with deterministic fallback behavior.",
    ],
    constraints: [
      "Needed to preserve UX reliability without introducing a heavy sync infrastructure.",
      "Had to keep architecture ready for hosted runtime without rewriting boundaries.",
      "Required strict separation from historical orchestration artifacts (dormant n8n flows).",
    ],
    implementationChoices: [
      "Normalized daily context contract (`live`, `mock`, `cache`) with explicit source signaling.",
      "Cross-system action services with idempotent metadata for safe repeated requests.",
      "Schema segregation into `myassist.*` on shared Supabase for platform consistency.",
    ],
    credibilitySignals: [
      "Provider-canonical model documented and enforced.",
      "Hosted-mode verification and schema-segregation readiness artifacts.",
      "Fallback strategy designed for continuity when local model runtime is unavailable.",
    ],
    maturityLevel: "Strategic near-term launch path with production-ready boundaries.",
  },
  {
    id: "kinetix",
    title: "Kinetix: Biomechanics-Driven Coaching Across Watch, Phone, and Web",
    summary:
      "Built as a cross-platform running system where data integrity and interpretable performance scoring matter more than novelty.",
    problem:
      "Most running tools optimize for passive tracking, not actionable coaching tied to form quality and execution context.",
    whyItMatters:
      "Useful performance tooling must connect metrics, model outputs, and user feedback loops in real time.",
    productScope:
      "watchOS tracking runtime, iOS management and voice coaching hub, and web/PWA analysis path.",
    architectureDecisions: [
      "Platform-specific AI paths: on-device constraints on watch, cloud coaching on iPhone, local model fallback on web.",
      "KPS invariants defined as non-negotiable contract for score interpretation.",
      "Watch/iPhone connectivity treated as a first-class reliability concern.",
    ],
    constraints: [
      "Real-time sensor handling under battery and background execution limits.",
      "Strict watch installation and bundle-ID coupling requirements.",
      "Need for stable behavior with or without optional AI runtime availability.",
    ],
    implementationChoices: [
      "Hybrid intelligence stack blending rule-based biomechanics and adaptive model paths.",
      "Preset and battery profile system to balance precision with battery longevity.",
      "Crash recovery and persistence behavior designed into workout runtime.",
    ],
    credibilitySignals: [
      "Cross-platform architecture with explicit feature partitioning by device capability.",
      "Documented invariant contracts for KPS behavior.",
      "Operational troubleshooting playbooks for connectivity and installation stability.",
    ],
    maturityLevel: "Advanced product prototype with strong systems-level depth.",
  },
  {
    id: "bookiji",
    title: "Bookiji: Deterministic Scheduling Spine for a Larger Marketplace Vision",
    summary:
      "Built the scheduling core as a governance-first system before expanding toward universal booking.",
    problem:
      "Booking products break trust when state transitions, payments, and availability rules are inconsistent under real-world load.",
    whyItMatters:
      "Scheduling is a high-consequence workflow where ambiguity causes revenue loss and operational friction.",
    productScope:
      "Provider-first scheduling SaaS with onboarding, availability management, booking lifecycle, and payments infrastructure.",
    architectureDecisions: [
      "Schema-qualified multi-product database spine (`platform`, `bookiji`, `kinetix`, `chess`).",
      "Deterministic booking logic separated from advisory AI behavior.",
      "Migration sequencing and verification treated as release-critical discipline.",
      "Observability and SLO-oriented operations integrated into delivery process.",
    ],
    constraints: [
      "Needed compatibility migration path from `public` to schema-isolated model.",
      "Required deterministic behavior under auth, RLS, and concurrency pressure.",
      "Had to support phased roadmap without destabilizing scheduling core.",
    ],
    implementationChoices: [
      "Adopted `BOOKIJI_TABLES`-style schema constants to eliminate unqualified table access.",
      "Enforced migration order with explicit pre-drop verification checklist.",
      "Introduced idempotency and fallback patterns in calendar and webhook-adjacent flows.",
    ],
    credibilitySignals: [
      "Documented spine migrations with strict ordering and verification discipline.",
      "Deterministic state machine and governance rules codified in architecture docs.",
      "Production-oriented observability/SLO process artifacts.",
    ],
    maturityLevel: "Production scheduling foundation with roadmap-ready architecture.",
  },
];

export const workPrinciples: WorkPrinciple[] = [
  {
    title: "Determinism Before Intelligence",
    description:
      "AI can assist decisions, but lifecycle rules, state transitions, and reliability paths stay explicit and testable.",
  },
  {
    title: "Architecture Must Survive Operations",
    description:
      "I optimize for systems that hold up under migrations, rollouts, and real production constraints.",
  },
  {
    title: "Product and Platform in One Loop",
    description:
      "I design the interface and the infrastructure together so delivery speed does not degrade system quality.",
  },
  {
    title: "Depth Without Over-Engineering",
    description:
      "I avoid unnecessary layers, but I am deliberate about boundaries that matter long term.",
  },
];

export const resumeSummary =
  "Senior technical architect and founder-level builder focused on deterministic product systems, platform architecture, and AI-amplified execution.";

export const resumeExperience: ResumeItem[] = [
  {
    role: "Founder and Technical Operator",
    org: "Bookiji Inc",
    period: "Current",
    summary:
      "Leading product architecture and delivery across Bookiji, Kinetix, and MyAssist with a shared infrastructure strategy.",
    focusAreas: [
      "Platform architecture and schema governance",
      "Reliability and observability foundations",
      "Product execution from architecture to shipped behavior",
    ],
  },
  {
    role: "Senior Technical Builder",
    org: "Independent Product Development",
    period: "Recent years",
    summary:
      "Built and evolved cross-stack systems spanning frontend, backend, operations, and AI integration.",
    focusAreas: [
      "Next.js and TypeScript production applications",
      "Supabase data models with RLS and migration discipline",
      "Operational automation and integration-driven workflows",
    ],
  },
];

export const resumeSkills: SkillGroup[] = [
  {
    title: "Architecture and Systems",
    items: [
      "Deterministic workflow design",
      "Schema segregation and migration governance",
      "Reliability hardening and rollout sequencing",
      "Platform-level shared infrastructure strategy",
    ],
  },
  {
    title: "Product and Engineering",
    items: [
      "Next.js App Router and TypeScript",
      "Supabase (Postgres, RLS, operational SQL discipline)",
      "Stripe integration patterns",
      "Vercel deployment workflows",
    ],
  },
  {
    title: "AI and Integrations",
    items: [
      "Provider-integrated assistant architectures",
      "OpenAI and local model fallback paths",
      "Structured orchestration and action safety patterns",
      "LLM-enabled product features with deterministic guardrails",
    ],
  },
];
