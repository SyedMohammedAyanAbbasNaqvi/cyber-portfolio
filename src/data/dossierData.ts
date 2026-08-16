import type { DossierData } from "../types/dossier";

export const DOSSIER_DATA: DossierData = {
  identity: {
    name: "AYAN ABBAS",
    title: "RED TEAM × BLUE TEAM SECURITY",
    positioning: "OFFENSE × DEFENSE × DETECTION × AUTOMATION",
    pillars: ["OFFENSE", "DEFENSE", "DETECTION", "AUTOMATION"],
    location: "LUCKNOW, IN",
    node: "LKO-IN",
    status: "ACTIVE",
    operativesCount: 2,
    clearanceLevel: "LEVEL-05 // RECRUITER ACCESS",
    narrativeSummary: [
      "I analyze digital systems, evaluate attack surfaces, and build security-focused tools.",
      "My work focuses on Red Team offensive mechanics, Blue Team defensive operations, application & identity security, and AI-assisted security automation. I operate at the intersection of threat detection, threat hunting, and security operations.",
      "I seek to understand software both when it operates normally and when subjected to adversarial exploitation — building resilient defenses and automated operational capabilities."
    ]
  },
  profileScan: [
    {
      id: "ps-eng",
      label: "OFFENSIVE SEC",
      value: "RED TEAM / VULNERABILITY ANALYSIS",
      status: "ACTIVE",
      detail: "Web Vulnerability Analysis, OWASP Top 10 & Recon"
    },
    {
      id: "ps-sec",
      label: "DEFENSIVE SEC",
      value: "BLUE TEAM / THREAT SURFACE & SOC",
      status: "ACTIVE",
      detail: "SIEM Telemetry, Incident Triage, Threat Hunting & Hardening"
    },
    {
      id: "ps-ai",
      label: "AI SECURITY",
      value: "02 ACTIVE OPERATIVES",
      status: "ACTIVE",
      detail: "JARVIS (Agentic Automation) & SENTINEL (AI SOC)"
    },
    {
      id: "ps-dep",
      label: "DEPLOYMENTS",
      value: "FIELD CASE FILES & UTILITIES",
      status: "DOCUMENTED",
      detail: "Security Tooling, SOC Telemetry & Secondary Deployments"
    },
    {
      id: "ps-syn",
      label: "PROFILE SYNTHESIS",
      value: "AUTHENTICATED & ACCESSIBLE",
      status: "COMPLETE",
      detail: "System Access Granted for Recruiter Investigation"
    }
  ],
  evolution: [
    {
      id: "evo-builder",
      step: "01",
      title: "THE BUILDER",
      period: "FOUNDATION",
      category: "BUILD",
      description: "Full-stack development as the engineering foundation — constructing interfaces, applications, and digital products.",
      narrative: [
        "I started by building systems.",
        "Interfaces.",
        "Applications.",
        "Digital products.",
        "The first goal was simple: make the system work."
      ],
      highlights: ["DOM Mechanics & UI Architecture", "Modern JavaScript & TypeScript", "Full-Stack System Engineering"],
      technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Node.js"]
    },
    {
      id: "evo-question",
      step: "02",
      title: "THE QUESTION",
      period: "TURNING POINT",
      category: "SECURITY",
      turningPoint: true,
      description: "The narrative turning point — shifting focus from system construction to adversarial security inquiry.",
      narrative: [
        "Then the question changed.",
        "Not just: How do I build this?",
        "But: What happens when someone tries to break it?"
      ],
      highlights: ["Shift from Construction to Security Inquiry", "Evaluating Boundary Assumptions", "Questioning Implicit System Trust"],
      technologies: ["System Architecture", "Boundary Inspection", "Attack Surface Analysis"]
    },
    {
      id: "evo-break",
      step: "03",
      title: "THE BREAK",
      period: "SECURITY RESEARCH",
      category: "SECURITY",
      description: "Examining application security, exposed attack surfaces, API boundaries, and network behavior in controlled labs.",
      narrative: [
        "I started looking at systems from the other side.",
        "Where are the assumptions?",
        "Where are the weak boundaries?",
        "What happens when the system receives something it was never designed to handle?"
      ],
      highlights: ["Application Security Research", "API Boundary & Auth Vulnerabilities", "Controlled Security Lab Experimentation"],
      technologies: ["Burp Suite", "OWASP Top 10", "HTTP Telemetry", "API Security", "Network Recon"]
    },
    {
      id: "evo-defender",
      step: "04",
      title: "THE DEFENDER",
      period: "BLUE TEAM / SOC",
      category: "OPERATIONS",
      description: "Transitioning from vulnerability discovery to detection engineering, SIEM log telemetry inspection, and incident analysis.",
      narrative: [
        "But finding a weakness is only half the problem.",
        "The next question was harder:",
        "Would the defender see it?"
      ],
      highlights: ["Transition: ATTACK → DETECT", "SIEM Telemetry & Log Triage", "Incident Analysis & System Hardening"],
      technologies: ["SIEM Telemetry", "Log Analysis", "Threat Triage", "Incident Response", "System Hardening"]
    },
    {
      id: "evo-adversary",
      step: "05",
      title: "THE ADVERSARY",
      period: "RED TEAM LABS",
      category: "SECURITY",
      description: "Researching adversary tactics, authentication failure modes, and attack pathways across dedicated security research labs.",
      narrative: [
        "To understand a defense, I needed to understand the attack.",
        "How authentication fails.",
        "How trust gets abused.",
        "How small weaknesses become attack paths."
      ],
      highlights: [
        "API ATTACK LAB: Auth & BOLA Vulnerability Research",
        "TOKEN ABUSE LAB: JWT Forensics & Session Abuse",
        "SUPPLY CHAIN ATTACK LAB: Dependency Integrity & SBOM",
        "RACE CONDITION LAB: TOCTOU & Concurrency Flaws"
      ],
      technologies: ["Red Team Labs", "JWT Security", "OWASP API Top 10", "SBOM Integrity", "Concurrency Flaws"]
    },
    {
      id: "evo-defenders-view",
      step: "06",
      title: "THE DEFENDER'S VIEW",
      period: "DETECTION ENGINEERING",
      category: "OPERATIONS",
      description: "Analyzing telemetry signals, indicators of compromise, and behavioral evidence left behind across defensive Blue Team projects.",
      narrative: [
        "An attack is only useful to study if you can understand what it leaves behind.",
        "Signals.",
        "Logs.",
        "Behavior.",
        "Indicators.",
        "That is where detection begins."
      ],
      highlights: [
        "AI THREAT DETECTION: Telemetry Anomaly Engine",
        "HONEYPOT INTELLIGENCE: Deception & IOC Capture",
        "eBPF THREAT TRACER: Kernel Syscall Observability",
        "CYBER THREAT SITUATION ROOM: Threat Feed Correlation"
      ],
      technologies: ["Detection Engineering", "eBPF Syscall Tracing", "Honeypots", "ML Threat Detection", "MITRE ATT&CK"]
    },
    {
      id: "evo-system-builder",
      step: "07",
      title: "THE SYSTEM BUILDER",
      period: "AI & SECURITY SYSTEMS",
      category: "AI",
      description: "Culmination of the journey — engineering intelligent systems designed for security automation and threat investigation.",
      narrative: [
        "Eventually, security became less about one tool and more about building systems around the problem.",
        "One system to act.",
        "One system to investigate."
      ],
      highlights: [
        "JARVIS → Agentic Automation & Task Execution Operative",
        "SENTINEL → AI SOC Analyst & Threat Triage Platform",
        "Autonomous System Security Architecture"
      ],
      technologies: ["JARVIS Platform", "SENTINEL SOC", "Autonomous Agent Loops", "Multi-LLM Routing", "Security Automation"]
    }
  ],
  capabilityDomains: [
    {
      id: "dom-attack",
      num: "01",
      name: "RED TEAM / OFFENSIVE SECURITY",
      category: "ATTACK",
      subtitle: "ATTACK SURFACE & VULNERABILITY ANALYSIS",
      summary: "Studying adversary techniques, web vulnerability mechanisms, authentication flaws, and reconnaissance to evaluate software resilience.",
      accentColor: "var(--color-threat)",
      quickSummary: ["OWASP Top 10", "Web Vulnerabilities", "Network Recon", "Attack Surface Mapping", "Burp Suite"],
      items: [
        {
          id: "cap-owasp",
          name: "Web Application Vulnerability Analysis",
          categoryTag: "WEB SECURITY",
          state: "PRACTICED",
          description: "Analyzing OWASP Top 10 security risks including SQL Injection, Cross-Site Scripting (XSS), CSRF, and Broken Access Control.",
          evidenceLabel: "SECURITY EXPLORATION",
          evidenceAnchor: "identity",
          tools: ["OWASP Top 10", "Burp Suite Basics", "Web Vulnerabilities", "HTTP Inspection"]
        },
        {
          id: "cap-recon",
          name: "Network & Endpoint Reconnaissance",
          categoryTag: "RECON",
          state: "WORKING KNOWLEDGE",
          description: "Conducting port scans, network service discovery, protocol header inspection, and domain enumeration.",
          evidenceLabel: "TECHNICAL EVOLUTION",
          evidenceAnchor: "identity",
          tools: ["Port Scanning", "Service Enumeration", "DNS Lookup", "Protocol Header Analysis"]
        },
        {
          id: "cap-surface",
          name: "Attack Surface & Boundary Assessment",
          categoryTag: "ASSESSMENT",
          state: "PRACTICED",
          description: "Mapping exposed application endpoints, API routes, and third-party integrations to minimize attack vectors.",
          evidenceLabel: "IDENTITY CHAPTER",
          evidenceAnchor: "identity",
          tools: ["API Boundary Audit", "Endpoint Mapping", "Privilege Review"]
        },
        {
          id: "cap-offensive-study",
          name: "Offensive Security & Red Team Concepts",
          categoryTag: "OFFENSIVE",
          state: "LEARNING",
          description: "Active study of adversary tactics, exploit mechanics, and payload execution pathways to enhance defensive engineering.",
          evidenceLabel: "TECHNICAL PROGRESSION",
          evidenceAnchor: "identity",
          tools: ["Adversary TTPs", "Payload Analysis", "Boundary Testing"]
        }
      ]
    },
    {
      id: "dom-defend",
      num: "02",
      name: "BLUE TEAM / DEFENSIVE SECURITY",
      category: "DEFEND",
      subtitle: "DEFENSIVE OPERATIONS, THREAT TRIAGE & HUNTING",
      summary: "Analyzing log telemetry, monitoring security events, triaging alerts, threat hunting, and hardening application posture against threats.",
      accentColor: "var(--color-intelligence)",
      quickSummary: ["SOC Workflows", "SIEM Telemetry", "Threat Triage", "Threat Hunting", "System Hardening"],
      items: [
        {
          id: "cap-siem",
          name: "SIEM & Log Telemetry Inspection",
          categoryTag: "ANALYSIS",
          state: "PRACTICED",
          description: "Analyzing HTTP server logs, access trails, auth attempts, and event telemetry for suspicious anomalies.",
          evidenceLabel: "SENTINEL AI SOC",
          evidenceAnchor: "operations",
          tools: ["SIEM Workflows", "Log Telemetry", "Event Correlation", "JSON Logs"]
        },
        {
          id: "cap-triage",
          name: "Threat Triage & Incident Investigation",
          categoryTag: "OPERATIONS",
          state: "PRACTICED",
          description: "Categorizing security events, assessing breach impact potential, and documenting triage findings.",
          evidenceLabel: "SENTINEL THREAT TRIAGE",
          evidenceAnchor: "operations",
          tools: ["Incident Triage", "Alert Categorization", "Risk Scoring", "Audit Logs"]
        },
        {
          id: "cap-hardening",
          name: "Defensive System & API Hardening",
          categoryTag: "HARDENING",
          state: "WORKING KNOWLEDGE",
          description: "Implementing defensive HTTP headers, input sanitization, rate limiting, and access control boundaries.",
          evidenceLabel: "SECURITY ARCHITECTURE",
          evidenceAnchor: "identity",
          tools: ["Security Headers", "Input Validation", "CORS Policy", "Access Control"]
        },
        {
          id: "cap-blue-cert",
          name: "Blue Team Security Operations",
          categoryTag: "DEFENSE",
          state: "LEARNING",
          description: "Continuous study of SOC analyst workflows, threat intelligence feeds, and defensive cybersecurity frameworks.",
          evidenceLabel: "TECHNICAL EVOLUTION",
          evidenceAnchor: "identity",
          tools: ["SOC Frameworks", "Threat Intelligence", "MITRE ATT&CK Basics"]
        }
      ]
    },
    {
      id: "dom-build",
      num: "03",
      name: "APPLICATION & IDENTITY SECURITY",
      category: "BUILD",
      subtitle: "SECURE ARCHITECTURE & IDENTITY BOUNDARIES",
      summary: "Building secure software architectures, type-safe API boundaries, authentication mechanics, and resilient application backends.",
      accentColor: "var(--color-accent)",
      quickSummary: ["React & TS", "Node.js & Express", "Python Scripting", "Auth & Access Control", "Security Headers"],
      items: [
        {
          id: "cap-react",
          name: "React & Modern Client Architecture",
          categoryTag: "FRONTEND",
          state: "DEPLOYED",
          description: "Production-tested component architecture, custom React hooks, declarative state management, and optimized render cycles.",
          evidenceLabel: "PORTFOLIO SYSTEM",
          evidenceAnchor: "access",
          tools: ["React", "JSX/TSX", "Custom Hooks", "Context API", "Vite"]
        },
        {
          id: "cap-ts",
          name: "TypeScript & Type Safety",
          categoryTag: "ARCHITECTURE",
          state: "DEPLOYED",
          description: "Strict TypeScript interfaces, domain type modeling, async API data contracts, and build-time safety guarantees.",
          evidenceLabel: "PORTFOLIO SYSTEM",
          evidenceAnchor: "access",
          tools: ["TypeScript", "Interfaces", "Generics", "Type Guards"]
        },
        {
          id: "cap-node",
          name: "Node.js & Express Backend APIs",
          categoryTag: "BACKEND",
          state: "PRACTICED",
          description: "RESTful server architectures, async route handlers, JSON telemetry serialization, and middleware pipelines.",
          evidenceLabel: "BACKEND APIS",
          evidenceAnchor: "operations",
          tools: ["Node.js", "Express", "REST APIs", "Middleware", "JSON"]
        },
        {
          id: "cap-python",
          name: "Python Scripting & Automation",
          categoryTag: "SCRIPTING",
          state: "PRACTICED",
          description: "Utility scripts, data processing pipelines, network protocol interaction, and AI orchestration backends.",
          evidenceLabel: "SENTINEL SOC PIPELINE",
          evidenceAnchor: "operations",
          tools: ["Python 3", "Asyncio", "Requests", "Data Parsing"]
        },
        {
          id: "cap-web",
          name: "HTML5, CSS3 & Neo-Brutalist Styling",
          categoryTag: "FOUNDATION",
          state: "DEPLOYED",
          description: "Custom CSS variable token systems, responsive CSS grid/flexbox layouts, accessibility standards, and semantic HTML.",
          evidenceLabel: "PORTFOLIO DESIGN SYSTEM",
          evidenceAnchor: "access",
          tools: ["HTML5", "CSS Variables", "CSS Grid", "Flexbox", "Design Tokens"]
        },
        {
          id: "cap-gsap",
          name: "GSAP & Web Motion Choreography",
          categoryTag: "VISUAL",
          state: "PRACTICED",
          description: "ScrollTrigger timelines, staggered entrance reveals, SVG path drawing, and controlled web animations.",
          evidenceLabel: "HERO & JOURNEY ANIMATIONS",
          evidenceAnchor: "identity",
          tools: ["GSAP", "ScrollTrigger", "Timeline", "SVG Animation"]
        }
      ]
    },
    {
      id: "dom-automate",
      num: "04",
      name: "AI SECURITY / AUTOMATION",
      category: "AUTOMATE",
      subtitle: "AI-ASSISTED SOC & OPERATIONAL AUTOMATION",
      summary: "Pioneering autonomous AI agent orchestration, multi-LLM routing, function calling, and automated security pipelines.",
      accentColor: "var(--color-intelligence)",
      quickSummary: ["Multi-LLM Routing", "Agentic Tool Calling", "AI SOC Triage", "RAG Pipelines", "JARVIS & SENTINEL"],
      items: [
        {
          id: "cap-llm",
          name: "Multi-LLM Integration & Prompt Routing",
          categoryTag: "AI ENGINE",
          state: "DEPLOYED",
          description: "Structuring prompts, managing context windows, and orchestrating multi-model LLM API routing for intelligent tasks.",
          evidenceLabel: "OPERATION JARVIS",
          evidenceAnchor: "operations",
          tools: ["Multi-LLM APIs", "Structured Prompts", "Context Routing", "JSON Parsing"]
        },
        {
          id: "cap-agents",
          name: "Agentic Tool Calling & Decision Loops",
          categoryTag: "AGENTS",
          state: "DEPLOYED",
          description: "Designing autonomous agent execution loops with tool calling, multi-step decision logic, and error recovery.",
          evidenceLabel: "OPERATION JARVIS",
          evidenceAnchor: "operations",
          tools: ["Agentic Frameworks", "Function Calling", "Tool Definitions", "Autonomous Loops"]
        },
        {
          id: "cap-ai-soc",
          name: "AI-Powered Security Automation",
          categoryTag: "SECURITY AI",
          state: "IN PROGRESS",
          description: "Integrating LLM intelligence with log telemetry streams to automate alert triage and incident report generation.",
          evidenceLabel: "OPERATION SENTINEL",
          evidenceAnchor: "operations",
          tools: ["SENTINEL AI SOC", "Log Summarization", "Automated Triage", "Report Generation"]
        },
        {
          id: "cap-rag",
          name: "RAG & Document Intelligence",
          categoryTag: "AI TOOLS",
          state: "PRACTICED",
          description: "Retrieval-Augmented Generation workflows for querying documentation, codebase context, and technical data.",
          evidenceLabel: "AI PIPELINES",
          evidenceAnchor: "operations",
          tools: ["RAG Pipelines", "Embeddings", "Context Retrieval", "Document Parsing"]
        }
      ]
    }
  ],

  flagshipOperations: [
    {
      id: "op-jarvis",
      anchorId: "operation-jarvis",
      shortcutKey: "J",
      num: "01",
      codename: "OPERATION: JARVIS",
      name: "JARVIS",
      classification: "MULTI-LLM AGENTIC SYSTEM",
      status: "VERIFIED",
      url: "https://github.com/iamjustaOversizedKiddd",
      githubUrl: "https://github.com/iamjustaOversizedKiddd",
      coreTagline: "MULTI-MODEL ORCHESTRATION & AGENTIC AUTOMATION",
      summary: "Personal AI assistant infrastructure providing multi-model routing, voice interaction, document intelligence (RAG), and task execution.",
      description: "JARVIS acts as an intelligent command bridge. Rather than relying on a single AI model, it routes developer & operational prompts to task-optimized LLMs, manages retrieval-augmented context, and executes automated multi-step tool calls.",
      accentColor: "var(--color-accent)",
      technologies: ["Python", "Multi-LLM APIs", "React/TypeScript", "RAG Pipelines", "Tool Calling", "Voice I/O", "Agent Loops"],
      architectureNodes: [
        { id: "j-user", label: "USER INPUT", type: "input", subtext: "Voice / Text Prompt" },
        { id: "j-router", label: "TASK ROUTER", type: "router", subtext: "Intent & Model Selector" },
        { id: "j-engine", label: "MULTI-LLM ENGINE", type: "engine", subtext: "GPT-4 / Claude / Gemini" },
        { id: "j-tools", label: "AGENT TOOL LOOPS", type: "tool", subtext: "RAG & Automation" },
        { id: "j-output", label: "ACTION OUTPUT", type: "output", subtext: "Synthesized Execution" }
      ],
      features: [
        {
          id: "j-f1",
          category: "INTELLIGENCE",
          name: "Multi-LLM Prompt Routing",
          state: "DEPLOYED",
          description: "Evaluates task complexity and routes developer prompts to optimal LLM endpoints."
        },
        {
          id: "j-f2",
          category: "VOICE",
          name: "Speech & Voice Interface",
          state: "PRACTICED",
          description: "Hands-free voice interaction loop with real-time speech input parsing and text-to-speech feedback."
        },
        {
          id: "j-f3",
          category: "KNOWLEDGE",
          name: "RAG / Document Intelligence",
          state: "PRACTICED",
          description: "Queries local technical documentation, codebases, and references with vector context retrieval."
        },
        {
          id: "j-f4",
          category: "AUTOMATION",
          name: "Autonomous Tool Calling",
          state: "IN PROGRESS",
          description: "Executes structured multi-step task loops for automated workflow assistance."
        }
      ]
    },
    {
      id: "op-sentinel",
      anchorId: "operation-sentinel",
      shortcutKey: "S",
      num: "02",
      codename: "OPERATION: SENTINEL",
      name: "SENTINEL",
      classification: "AI SOC ANALYST PLATFORM",
      status: "VERIFIED",
      url: "https://github.com/iamjustaOversizedKiddd",
      githubUrl: "https://github.com/iamjustaOversizedKiddd",
      coreTagline: "CONNECT SIGNALS, NOT JUST ALERTS.",
      summary: "AI-powered SOC analyst platform designed for security signal correlation, threat triage, and incident investigation automation.",
      description: "SENTINEL transforms raw, high-volume SIEM alert noise into correlated security signals. Using LLM-assisted context synthesis, it correlates multi-source log telemetry to accelerate SOC investigation and threat response.",
      accentColor: "var(--color-intelligence)",
      technologies: ["Python", "SIEM Telemetry", "Log Analysis", "LLM Incident Triage", "Signal Correlation", "Security Workflows"],
      architectureNodes: [
        { id: "s-logs", label: "LOG TELEMETRY", type: "input", subtext: "HTTP / Auth / SIEM Logs" },
        { id: "s-correlator", label: "SIGNAL CORRELATOR", type: "router", subtext: "Event Relationship Engine" },
        { id: "s-triage", label: "AI SOC TRIAGE", type: "engine", subtext: "LLM Context Synthesis" },
        { id: "s-case", label: "INCIDENT CASE", type: "output", subtext: "Actionable Investigation" }
      ],
      features: [
        {
          id: "s-f1",
          category: "SECURITY AI",
          name: "SIEM Signal Correlation",
          state: "PRACTICED",
          description: "Correlates multi-source audit logs to extract meaningful threat signals from alert noise."
        },
        {
          id: "s-f2",
          category: "TRIAGE",
          name: "Automated Incident Triage",
          state: "PRACTICED",
          description: "Uses LLM context synthesis to draft initial incident reports and assign severity risk scores."
        },
        {
          id: "s-f3",
          category: "INVESTIGATION",
          name: "Interactive Workspace Module",
          state: "IN PROGRESS",
          description: "Provides security analysts with visual evidence graphs and timeline correlation tools."
        },
        {
          id: "s-f4",
          category: "WORKFLOW",
          name: "Security Playbook Automation",
          state: "IN PROGRESS",
          description: "Automates repetitive SOC triage tasks to reduce mean time to investigate (MTTI)."
        }
      ]
    }
  ],
  credentials: [
    {
      id: "cred-ictrd-ccsp",
      number: "CLEARANCE RECORD // 001",
      name: "Certified Cyber Security Professional Program",
      issuer: "Indian Council for Technical Research and Development (ICTRD India)",
      status: "VERIFIED",
      issueDate: "18 February 2026",
      credentialId: "AZ30932659",
      documentIdentifier: "DI/C/25011126",
      verificationUrl: null,
      skills: ["Cybersecurity", "Computer Networks", "Operating System Basics", "Data Security", "Social Engineering", "Mobile Device Security"],
      description: "The supplied certificate states that the candidate satisfactorily pursued the program and passed the examination.",
      initials: "CCSP",
      verified: true,
      evidenceAnchor: "#capabilities",
      evidenceLabel: "SECURITY CAPABILITY MATRIX"
    },
    {
      id: "cred-ictrd-aiml",
      number: "CLEARANCE RECORD // 002",
      name: "Artificial Intelligence and Machine Learning Program",
      issuer: "Indian Council for Technical Research and Development (ICTRD India)",
      status: "VERIFIED",
      issueDate: "18 February 2026",
      credentialId: "AZ30932659",
      documentIdentifier: "DI/C/25011118",
      verificationUrl: null,
      skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Algorithms & Statistics", "Probability", "Supervised Learning", "Data Science", "Python Programming"],
      description: "The supplied certificate states that the candidate satisfactorily pursued the program and passed the examination.",
      initials: "AIML",
      verified: true,
      evidenceAnchor: "#operation-sentinel",
      evidenceLabel: "SENTINEL AI SOC PLATFORM"
    }
  ],
  contact: {
    email: "developerisonduty@gmail.com",
    linkedin: "https://www.linkedin.com/in/ayan-abbas-521897271/",
    github: "https://github.com/iamjustaOversizedKiddd",
    availability: "OPEN TO DISCUSSION",
    location: "LKO-IN / LUCKNOW, IN",
    responseWindow: "24-48 HOURS"
  },
  systems: [



    {
      name: "JARVIS",
      type: "AGENTIC AI OPERATIVE",
      status: "UNDER DEVELOPMENT",
      description: "Multi-LLM autonomous assistant infrastructure for complex developer & operational task automation.",
      metrics: [
        { label: "LATENCY", value: "85ms" },
        { label: "AGENTS", value: "MULTI-MODEL" }
      ]
    },
    {
      name: "SENTINEL",
      type: "AI SOC ANALYST",
      status: "UNDER DEVELOPMENT",
      description: "AI-powered threat detection, log analysis, and automated incident investigation platform.",
      metrics: [
        { label: "DETECTION", value: "REAL-TIME" },
        { label: "PIPELINE", value: "ACTIVE" }
      ]
    }
  ],
  capabilities: [
    {
      id: "cap-attack",
      category: "ATTACK",
      title: "Red Team & Offensive Security",
      description: "Web vulnerability assessment, red-team methodologies, security testing, and threat surface evaluation.",
      technologies: ["Burp Suite", "OWASP Top 10", "Network Reconnaissance", "Web Exploit Analysis"]
    },
    {
      id: "cap-defend",
      category: "DEFEND",
      title: "Blue Team & Defensive Security",
      description: "SIEM log analysis, threat hunting, incident investigation, and defensive security posture hardening.",
      technologies: ["SIEM Workflows", "Log Telemetry", "Threat Intelligence", "Security Hardening"]
    },
    {
      id: "cap-build",
      category: "BUILD",
      title: "Application & Identity Security",
      description: "Crafting secure software architectures, type-safe API boundaries, and resilient backend systems.",
      technologies: ["React", "TypeScript", "Node.js", "Vite", "TailwindCSS", "Next.js", "REST/GraphQL"]
    },
    {
      id: "cap-automate",
      category: "AUTOMATE",
      title: "AI Security & Automation",
      description: "Integrating intelligent LLM orchestration, AI SOC triage, agentic tools, and automated operational pipelines.",
      technologies: ["Multi-LLM Systems", "Agent Frameworks", "Tool Calling", "Automated Pipelines"]
    }
  ],
  caseFiles: [
    {
      id: "cf-api-attack-lab",
      number: "CASE // 001",
      codename: "API ATTACK LAB",
      title: "API Attack Lab",
      category: "RED TEAM",
      classification: "OFFENSIVE SECURITY RESEARCH",
      status: "COMPLETED",
      summary: "Application and API offensive security testing environment focusing on authentication, authorization weaknesses, and attack surface discovery.",
      problem: "REST and GraphQL endpoints frequently contain broken object-level authorization (BOLA) and parameter tampering vulnerabilities.",
      solution: "Engineered a dedicated security testing lab to evaluate OWASP API security risks, parameter fuzzing, and boundary authorization rules.",
      technicalApproach: [
        "OWASP API Top 10 vulnerability assessment & BOLA/BFLA security testing.",
        "Automated API endpoint discovery, fuzzing, and payload testing.",
        "Authorization boundary inspection and access control flaw identification."
      ],
      technologies: ["Python", "Burp Suite", "OWASP API Top 10", "REST APIs", "JWT", "Fuzzing"],
      githubUrl: "https://github.com/iamjustaOversizedKiddd",
      liveUrl: null,
      accentColor: "var(--color-threat)",
      evidenceLabel: "RED TEAM LAB #01",
      featured: true
    },
    {
      id: "cf-token-abuse-lab",
      number: "CASE // 002",
      codename: "TOKEN ABUSE LAB",
      title: "Token Abuse Lab",
      category: "RED TEAM",
      classification: "IDENTITY & AUTHENTICATION RESEARCH",
      status: "COMPLETED",
      summary: "Authentication and identity attack research lab focusing on JWT manipulation, token replay, OAuth security, and session forensics.",
      problem: "Stateless authentication mechanisms are prone to key confusion, signature bypasses, replay vectors, and misconfigured token claims.",
      solution: "Developed a security testing suite to analyze JWT header manipulation, signature verification edge cases, and session replay risks.",
      technicalApproach: [
        "JWT signature validation bypass & claim alteration testing.",
        "Session token replay analysis and token expiration enforcement audits.",
        "OAuth 2.0 grant flow state validation and redirect security inspection."
      ],
      technologies: ["Python", "JWT Security", "OAuth 2.0", "Token Forensics", "Cryptography", "Session Security"],
      githubUrl: "https://github.com/iamjustaOversizedKiddd",
      liveUrl: null,
      accentColor: "var(--color-threat)",
      evidenceLabel: "RED TEAM LAB #02"
    },
    {
      id: "cf-supply-chain-attack-lab",
      number: "CASE // 003",
      codename: "SUPPLY CHAIN ATTACK LAB",
      title: "Supply Chain Attack Lab",
      category: "RED TEAM",
      classification: "SOFTWARE SUPPLY CHAIN SECURITY",
      status: "COMPLETED",
      summary: "Software supply-chain security research analyzing dependency vulnerabilities, malicious packages, dependency confusion, and SBOM integrity.",
      problem: "Modern application pipelines depend heavily on open-source registries susceptible to dependency confusion and malicious package injection.",
      solution: "Constructed a supply chain analysis environment to generate Software Bill of Materials (SBOM) and simulate dependency risk vectors safely.",
      technicalApproach: [
        "Dependency confusion risk modeling & registry namespace security auditing.",
        "Malicious package pattern detection and SBOM (CycloneDX / SPDX) analysis.",
        "Automated lockfile parsing and transitive dependency vulnerability scanning."
      ],
      technologies: ["Node.js", "Python", "SBOM (CycloneDX)", "Dependency Audit", "Package Integrity", "CI/CD Security"],
      githubUrl: "https://github.com/iamjustaOversizedKiddd",
      liveUrl: null,
      accentColor: "var(--color-threat)",
      evidenceLabel: "RED TEAM LAB #03"
    },
    {
      id: "cf-race-condition-lab",
      number: "CASE // 004",
      codename: "RACE CONDITION LAB",
      title: "Race Condition Lab",
      category: "RED TEAM",
      classification: "CONCURRENT APPLICATION SECURITY",
      status: "COMPLETED",
      summary: "Concurrent application security research focused on race conditions, TOCTOU vulnerabilities, and high-concurrency mitigation strategies.",
      problem: "High-concurrency application handlers without strict transaction isolation are vulnerable to state manipulation under parallel requests.",
      solution: "Built a parallel request testing harness to detect race windows in API endpoints and evaluate atomic locking mechanisms.",
      technicalApproach: [
        "Asynchronous parallel HTTP request burst generation for concurrency testing.",
        "Time-of-Check to Time-of-Use (TOCTOU) flaw identification in transaction flows.",
        "Mitigation evaluation using row locks, mutex primitives, and atomic state updates."
      ],
      technologies: ["Go", "Python (Asyncio)", "HTTP/2 Parallel Streams", "Database Locking", "Concurrency Analysis", "TOCTOU Testing"],
      githubUrl: "https://github.com/iamjustaOversizedKiddd",
      liveUrl: null,
      accentColor: "var(--color-threat)",
      evidenceLabel: "RED TEAM LAB #04"
    },
    {
      id: "cf-ai-threat-detection",
      number: "CASE // 005",
      codename: "AI THREAT DETECTION",
      title: "AI Threat Detection",
      category: "BLUE TEAM",
      classification: "MACHINE-LEARNING DEFENSIVE DETECTION",
      status: "COMPLETED",
      summary: "AI-assisted defensive detection engine utilizing telemetry analysis, anomaly detection, machine learning, and automated alert classification.",
      problem: "High-volume system logs generate noise that hides subtle attack vectors when relying solely on static threshold rules.",
      solution: "Engineered an anomaly detection pipeline that processes log telemetry, extracts behavioral features, and classifies threat signals.",
      technicalApproach: [
        "Log telemetry normalization and feature vector extraction from system events.",
        "Machine-learning assisted anomaly scoring for unseen authentication & traffic spikes.",
        "Automated alert generation and threat classification for SOC triage workflows."
      ],
      technologies: ["Python", "Scikit-Learn", "Log Telemetry", "Anomaly Detection", "Detection Engineering", "JSON Logs"],
      githubUrl: "https://github.com/iamjustaOversizedKiddd",
      liveUrl: null,
      accentColor: "var(--color-intelligence)",
      evidenceLabel: "BLUE TEAM LAB #05"
    },
    {
      id: "cf-honeypot-intelligence",
      number: "CASE // 006",
      codename: "HONEYPOT INTELLIGENCE",
      title: "Honeypot Intelligence",
      category: "BLUE TEAM",
      classification: "DECEPTION & THREAT INTELLIGENCE",
      status: "COMPLETED",
      summary: "Threat intelligence platform leveraging deception techniques to observe attacker behavior, extract IOCs, and map ATT&CK patterns.",
      problem: "Defenders need early visibility into active scanning, brute-force tactics, and emerging exploitation techniques targeting public nodes.",
      solution: "Deployed deceptive honeypot listeners simulating SSH and web services to capture interaction telemetry and analyze threat patterns.",
      technicalApproach: [
        "Multi-service honeypot deployment for SSH, HTTP, and API endpoint deception.",
        "Automated Indicators of Compromise (IOC) extraction including IPs and payload hashes.",
        "Mapping observed attacker commands and activity vectors to MITRE ATT&CK."
      ],
      technologies: ["Python", "Docker", "Honeypots", "IOC Extraction", "MITRE ATT&CK", "Log Analytics"],
      githubUrl: "https://github.com/iamjustaOversizedKiddd",
      liveUrl: null,
      accentColor: "var(--color-intelligence)",
      evidenceLabel: "BLUE TEAM LAB #06"
    },
    {
      id: "cf-ebpf-threat-tracer",
      number: "CASE // 007",
      codename: "eBPF THREAT TRACER",
      title: "eBPF Threat Tracer",
      category: "BLUE TEAM",
      classification: "LINUX SECURITY OBSERVABILITY",
      status: "COMPLETED",
      summary: "Linux security observability utility using eBPF syscall tracing to monitor runtime process behavior and detect suspicious activity.",
      problem: "User-space monitoring tools can be evaded or manipulated by elevated root processes or sophisticated evasions.",
      solution: "Implemented kernel-level tracepoints using eBPF to capture process executions, socket events, and privilege transitions in real time.",
      technicalApproach: [
        "eBPF probe attachment to Linux kernel tracepoints and system calls.",
        "Real-time process execution tracing, socket connection monitoring, and privilege audits.",
        "User-space telemetry pipeline converting kernel events into structured security alerts."
      ],
      technologies: ["C", "eBPF / BCC", "Linux Kernel Hooks", "Syscall Tracing", "Python", "Security Observability"],
      githubUrl: "https://github.com/iamjustaOversizedKiddd",
      liveUrl: null,
      accentColor: "var(--color-intelligence)",
      evidenceLabel: "BLUE TEAM LAB #07"
    },
    {
      id: "cf-cyber-threat-situation-room",
      number: "CASE // 008",
      codename: "CYBER THREAT SITUATION ROOM",
      title: "Cyber Threat Situation Room",
      category: "BLUE TEAM",
      classification: "THREAT INTELLIGENCE VISUALIZATION",
      status: "COMPLETED",
      summary: "Threat intelligence visualization dashboard correlating threat feeds, CVE vulnerability risk data, and security indicators.",
      problem: "Security analysts face fragmentation when attempting to correlate threat feeds, CVE metrics, and active incident data.",
      solution: "Built a centralized situation room dashboard visualizing threat metrics, vulnerability scores, and correlated IOC telemetry.",
      technicalApproach: [
        "Aggregation & normalization of open threat intelligence feeds and CVE databases.",
        "Exploitation risk scoring and CVSS severity metric visualization.",
        "Interactive threat correlation map and security telemetry timeline controls."
      ],
      technologies: ["React", "TypeScript", "Vite", "D3.js / Charting", "Threat Feeds API", "REST"],
      githubUrl: "https://github.com/iamjustaOversizedKiddd",
      liveUrl: null,
      accentColor: "var(--color-intelligence)",
      evidenceLabel: "BLUE TEAM LAB #08"
    }
  ]
};


