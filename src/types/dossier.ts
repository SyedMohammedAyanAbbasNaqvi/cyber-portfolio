export type SystemState =
  | "ONLINE"
  | "LIMITED ACCESS"
  | "UNDER DEVELOPMENT"
  | "OFFLINE"
  | "ACTIVE"
  | "VERIFIED"
  | "DOCUMENTED"
  | "COMPLETE"
  | "COMPLETED"
  | "EXPERIMENTAL"
  | "TRAINING"
  | "IN PROGRESS"
  | "ACCESS PENDING";



export type CapabilityState =
  | "DEPLOYED"
  | "PRACTICED"
  | "CERTIFIED"
  | "WORKING KNOWLEDGE"
  | "LEARNING"
  | "IN PROGRESS";

export interface ProfileIdentity {
  name: string;
  title: string;
  positioning: string;
  pillars: string[];
  location: string;
  node: string;
  status: SystemState;
  operativesCount: number;
  clearanceLevel: string;
  narrativeSummary: string[];
}

export interface ProfileScanMetric {
  id: string;
  label: string;
  value: string;
  status: "VERIFIED" | "ACTIVE" | "DOCUMENTED" | "COMPLETE";
  detail: string;
}

export interface TechnicalEvolutionStage {
  id: string;
  step: string;
  title: string;
  period: string;
  category: "BUILD" | "SECURITY" | "AI" | "OPERATIONS";
  description: string;
  narrative?: string[];
  turningPoint?: boolean;
  highlights: string[];
  technologies: string[];
}

export interface CapabilityItem {
  id: string;
  name: string;
  categoryTag: string;
  state: CapabilityState;
  description: string;
  evidenceLabel?: string;
  evidenceAnchor?: string;
  tools: string[];
}

export interface CapabilityDomain {
  id: string;
  num: string;
  name: string;
  category: "BUILD" | "DEFEND" | "ATTACK" | "AUTOMATE";
  subtitle: string;
  summary: string;
  accentColor: string;
  quickSummary: string[];
  items: CapabilityItem[];
}

export interface OperationFeature {
  id: string;
  category: string;
  name: string;
  state: CapabilityState;
  description: string;
}

export interface OperationArchitectureNode {
  id: string;
  label: string;
  type: "input" | "router" | "engine" | "tool" | "output";
  subtext: string;
}

export interface OperationData {
  id: string;
  anchorId: string;
  shortcutKey: "J" | "S";
  num: string;
  codename: string;
  name: string;
  classification: string;
  status: SystemState;
  url: string | null;
  githubUrl: string | null;
  coreTagline: string;
  summary: string;
  description: string;
  accentColor: string;
  technologies: string[];
  features: OperationFeature[];
  architectureNodes: OperationArchitectureNode[];
}

export interface SystemStatus {
  name: string;
  type: string;
  status: SystemState;
  description: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Capability {
  id: string;
  category: "BUILD" | "ATTACK" | "DEFEND" | "AUTOMATE";
  title: string;
  description: string;
  technologies: string[];
}

export type FieldProjectCategory = "RED TEAM" | "BLUE TEAM";

export interface ProjectCaseFile {
  id: string;
  number: string;
  codename: string;
  title: string;
  category: FieldProjectCategory;
  classification: string;
  status: SystemState;
  summary: string;
  problem: string;
  solution: string;
  technicalApproach: string[];
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  accentColor: string;
  evidenceLabel?: string;
  featured?: boolean;
}


export type CredentialStatus = "VERIFIED" | "TRAINING" | "IN PROGRESS";

export interface Credential {
  id: string;
  number: string;
  name: string;
  issuer: string;
  status: CredentialStatus;
  issueDate: string | null;
  credentialId: string | null;
  documentIdentifier?: string | null;
  verificationUrl: string | null;
  skills: string[];
  description: string;
  initials: string;
  verified: boolean;
  evidenceAnchor?: string;
  evidenceLabel?: string;
}

export interface ContactConfig {
  email: string | null;
  linkedin: string | null;
  github: string | null;
  resume?: string | null;
  availability: string;
  location: string;
  responseWindow: string;
}

export interface DossierData {
  identity: ProfileIdentity;
  profileScan: ProfileScanMetric[];
  evolution: TechnicalEvolutionStage[];
  capabilityDomains: CapabilityDomain[];
  flagshipOperations: OperationData[];
  credentials: Credential[];
  contact: ContactConfig;
  systems: SystemStatus[];
  capabilities: Capability[];
  caseFiles: ProjectCaseFile[];
}





