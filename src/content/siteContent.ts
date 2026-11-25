/**
 * src/content/siteContent.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH for all site copy.
 * Every page and section reads from here. Do not duplicate strings elsewhere.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ── Brand ──────────────────────────────────────────────────────────────────
export const brand = {
  organizer: 'Google Developer Groups',
  eventTitle: 'THE DEAD NOCTIS',
  eventSubtitle: 'CTF - LEVEL 1',
  tagline: 'ENTER THE DIMENSION WITH WHH',
  collaborator: 'White Hat Hackers (WHH)',
  university: 'KL University',
} as const;

// ── Navigation ─────────────────────────────────────────────────────────────
export const navigation = [
  { id: 'home',     label: 'HOME',     path: '/' },
  { id: 'about',    label: 'ABOUT',    path: '/about' },
  { id: 'events',   label: 'EVENTS',   path: '/events' },
  { id: 'rules',    label: 'RULES',    path: '/rules' },
  { id: 'faq',      label: 'FAQ',      path: '/faq' },
  { id: 'register', label: 'REGISTER', path: '/register', isCta: true },
] as const;

// ── Home ───────────────────────────────────────────────────────────────────
export const home = {
  primaryCta:   'REGISTER NOW',
  secondaryCta: 'LEARN MORE',
} as const;

// ── Ticker & Metrics Bar (Stitch) ──────────────────────────────────────────
export const ticker = {
  onlineCountdown: {
    targetIso: '2027-01-17T09:00:00+05:30',
    targetDateFormatted: 'JAN 17, 2027 • 09:00 AM IST',
    roundType: 'ONLINE ROUND',
    label: 'ONLINE ROUND INITIATION',
    timezone: 'UTC+05:30',
    subtitle: 'Jeopardy Virtual Qualifiers // Worldwide Access',
  },
  offlineCountdown: {
    roundType: 'OFFLINE ROUND',
    status: 'STARTS SOON',
    label: 'OFFLINE ROUND // STARTS SOON',
    subtext: 'KL University Physical Arena Bastion',
    flagSymbol: '🚩',
  },
  countdown: {
    days: 55,
    hours: 12,
    mins: 54,
    secs: 26,
    timezone: 'UTC+05:30',
    label: 'ONLINE ROUND INITIATION',
  },
  metrics: [
    {
      label: 'BOUNTY VAULT',
      value: '₹1,50,000+',
      note: 'Cash & Hardware Awards [Subject to Final Disclosure]',
    },
    {
      label: 'ENGAGEMENT FORMAT',
      value: '24H + 36H',
      note: 'Jeopardy Quals + Onsite Siege',
    },
    {
      label: 'ENLISTED CADRES',
      value: '500+ SQUADS',
      note: '0-Cost Merit Protocol',
    },
  ],
} as const;

// ── About ──────────────────────────────────────────────────────────────────
export const about = {
  label:   'ABOUT',
  code:    'SECTOR 01 // ARCHITECTURAL DOSSIER',
  heading: '01 // THE ANOMALY — A NEW REALM OF OFFENSE & DEFENSE',
  body:    'A deep-shader cyber conflict simulated within synthetic dimensional landscapes, co-engineered by Google Developer Groups and White Hat Hackers.',
  spireCoordinate: 'COORDINATE // SECTOR_OBSIDIAN',
  manifestoTitle: 'THE ORIGIN MANIFESTO',
  manifesto: 'Standard CTFs rely on repetitive environments. Dead Noctis projects contenders into an anomalous multi-plane infrastructure where memory corruptions fracture reality and cryptographic ciphers guard dimensional bastions.',
  spireImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw-gnoSSzRTQS9c_le-_OJd4-e7uPeOyiI5ns93L2anEyqW208HjdKOQkaV7Zn67UeWsQx0PjAdn0S5vyRxLDIDJGH0La2nY35BxLAKX3wrcCxiHRI7MGc5TQ7X77heKRJxw735qiFXwrXt_4HPdy0a3bFPtPPCYv9Rz8xbH1WtBsEeTpzvg9FUOFUhJcKoKOqA7_Yakz-AKoOH3H8lF_lX6blIcquMeKcZa9CSQ',
  vectors: [
    {
      id: 'explore',
      num: 'VECTOR // 01',
      title: 'EXPLORE',
      icon: 'explore',
      description: 'Uncover concealed zero-day network surfaces, map isolated dimensional networks, and reconstruct fragmented state planes buried in anomalous routing topologies.',
      phase: 'PHASE: RECONNAISSANCE',
      subtext: 'Darknet Discovery',
      accent: 'primary',
    },
    {
      id: 'exploit',
      num: 'VECTOR // 02',
      title: 'EXPLOIT',
      icon: 'pest_control',
      description: 'Reverse engineer obfuscated voxel binaries, induce hardware fault injections, defeat custom hypervisors, and solve zero-knowledge cryptographic barriers.',
      phase: 'PHASE: PENETRATION',
      subtext: 'Memory Corruption',
      accent: 'secondary',
    },
    {
      id: 'conquer',
      num: 'VECTOR // 03',
      title: 'CONQUER',
      icon: 'flag',
      description: 'Ascend past virtual qualifiers into the 36-hour physical bastion arena at KL University. Fortify your fortress, intercept live enemy packets, and claim total dominance.',
      phase: 'PHASE: ONSITE DOMINATION',
      subtext: 'National Supremacy',
      accent: 'tertiary',
    },
  ],
  highlights: [
    {
      id:       'learn',
      icon:     '◈',
      title:    'LEARN',
      subtitle: 'Explore cybersecurity fundamentals, understand real-world vulnerabilities, and build practical skills to strengthen your security knowledge.',
    },
    {
      id:       'solve',
      icon:     '◉',
      title:    'SOLVE',
      subtitle: 'Take on hands-on CTF challenges, crack hidden clues, analyze security problems, and turn your knowledge into real solutions.',
    },
    {
      id:       'connect',
      icon:     '◎',
      title:    'CONNECT',
      subtitle: 'Collaborate with fellow enthusiasts, exchange ideas, share discoveries, and connect with a community passionate about cybersecurity.',
    },
  ],
} as const;

// ── Combat Domains (Stitch) ────────────────────────────────────────────────
export const combatDomains = {
  label: 'CHALLENGE VECTORS // MATRIX CLASSIFICATION',
  heading: '02 // COMBAT DOMAINS — CHOOSE YOUR PATH',
  aggregatePotential: '12,500 FLAG POINTS',
  domains: [
    {
      id: 'web',
      icon: 'language',
      title: 'Web Exploitation',
      points: '100 – 500 PTS',
      color: 'primary',
      description: 'Infiltrate serverless runtime environments, trigger zero-trust SSRF, hijack GraphQL subscriptions, and exploit unconstrained WebAssembly micro-containers.',
      tags: ['Serverless SSRF', 'WASM RCE', 'GraphQL AST'],
    },
    {
      id: 'crypto',
      icon: 'key',
      title: 'Cryptography',
      points: '150 – 500 PTS',
      color: 'secondary',
      description: 'Break post-quantum lattice reductions, exploit faulty nonces in Edwards-curve signatures, and construct forgery proofs in zk-SNARK circuits.',
      tags: ['Lattice Reductions', 'ZK-Rollups', 'ECC Faults'],
    },
    {
      id: 'forensics',
      icon: 'biotech',
      title: 'Digital Forensics',
      points: '100 – 450 PTS',
      color: 'tertiary',
      description: 'Reconstruct shredded swap space dumps, carve encrypted ext4 partitions, trace covert ICMP exfiltration, and hunt stealth rootkits in live memory images.',
      tags: ['Volatility 3', 'PCAP Extraction', 'eBPF Stealth'],
    },
    {
      id: 'reverse',
      icon: 'code_blocks',
      title: 'Reverse Engineering',
      points: '200 – 500 PTS',
      color: 'primary',
      description: 'Disassemble custom instruction sets from simulated voxel CPUs, defeat metamorphic packers, bypass hardware telemetry guards, and trace Ghidra workflows.',
      tags: ['Custom Voxel VM', 'Anti-Debug', 'Ghidra Scripts'],
    },
    {
      id: 'osint',
      icon: 'satellite_alt',
      title: 'OSINT & Recon',
      points: '100 – 400 PTS',
      color: 'secondary',
      description: 'Track clandestine infrastructure across Tor relay nodes, extract geospatial metadata from satellite telemetries, and pivot through dark web escrow logs.',
      tags: ['Satellite Imagery', 'Darknet Tracing', 'GEOINT Pivot'],
    },
    {
      id: 'pwn',
      icon: 'security',
      title: 'Binary Exploitation',
      points: '250 – 500 PTS',
      color: 'tertiary',
      description: 'Craft multi-stage ROP payloads, exploit Linux slab allocator heap corruption, escape locked eBPF sandboxes, and compromise live hypervisor ring-0 targets.',
      tags: ['Kernel Heap', 'ROP / JOP Chains', 'eBPF Sandbox'],
    },
    {
      id: 'ai-misc',
      icon: 'neurology',
      title: 'Adversarial AI & Misc Anomalies',
      points: '100 – 500 PTS',
      color: 'primary',
      description: 'Inject poisoned weight vectors into local neural inference runners, bypass guardrail LLM system directives with recursive semantic jailbreaks, and solve arcane audio-visual stenography challenges.',
      tags: ['Adversarial ML', 'Indirect Prompt Injection', 'Voxel Audio Stego'],
      span2: true,
    },
  ],
} as const;

// ── Timeline / Deployment Runway (Stitch) ───────────────────────────────────
export const deploymentRunway = {
  label: 'OPERATIONAL ROADMAP // CAMPAIGN SEQUENCING',
  heading: '03 // DEPLOYMENT RUNWAY — THE PATHWAY THROUGH THE ANOMALY',
  subtitle: 'A phased trial testing pure problem solving online, escalating to full cyber siege on air-gapped battlefield hardware.',
  arenaBannerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAItUogrS_yHfb-_1UTTlo17veKIIgN3jfzUQMxTsqd8AoKyXMdhFwiISjTWW6ZFAizdKYwr8AUKJH1FZX_-dtYiYchlsPeVS0hutoAbTDzJG2PqKQKhKrmGeAVhytuhwUkeZbUwu2G-nGi7dCghyb5vjPXhWRNFds7IiJixfl7BkL7K7pJD1xklrg5QQy3jeYFD1tVUqjLxmWTAP7nY873xPax6ywzzdhxOcLOsA',
  phases: [
    {
      id: 'phase-01',
      code: 'PHASE 01',
      title: 'Recon & Cadre Enlistment',
      date: 'JAN 15 – FEB 28, 2026',
      venue: 'ONLINE // GLOBAL CADRE GATE',
      description: 'Squad recruitment commences nationally. Teams assemble 2-4 operators, configure local cryptographic toolchains, and complete clearance checks.',
      color: 'primary',
    },
    {
      id: 'phase-02',
      code: 'PHASE 02',
      title: 'Dimensional Qualifier Gate',
      date: 'MARCH 07 – 08, 2026',
      venue: '24-HOUR VIRTUAL SPRINT',
      description: '24-hour non-stop Jeopardy qualifier trial. 500+ squads battle through high-difficulty vectors. The top 50 highest-scoring cadres claim golden tickets.',
      color: 'secondary',
    },
    {
      id: 'phase-03',
      code: 'PHASE 03 // CLIMAX',
      title: 'The 36-Hour National Siege',
      date: 'MARCH 27 – 29, 2026',
      venue: 'ONSITE // KL UNIVERSITY BASTION',
      description: "Top 50 squads converge at KL University's air-gapped physical war-room. Live red-vs-blue attack and defense, dynamic CTF scoreboard, and zero sleep.",
      color: 'primary',
      isClimax: true,
    },
    {
      id: 'phase-04',
      code: 'PHASE 04',
      title: 'Convocation & Bounty Payout',
      date: 'MARCH 29, 2026 • 18:00',
      venue: 'MAIN AUDITORIUM CONVOCATION',
      description: 'Exploit chain verification by WHH architects, direct cash bounty transfers, distribution of custom Obsidian hardware trophies, and GDG fellowships.',
      color: 'tertiary',
    },
  ],
} as const;

// ── Bounty Vault (Stitch) ──────────────────────────────────────────────────
export const bountyVault = {
  label: 'FINANCIAL DISBURSEMENT // MERIT VALUATION',
  heading: '04 // BOUNTY VAULT — NATIONAL RECOGNITION',
  escrowNote: '₹1,50,000 ESCROW ASSURED BY KL UNIVERSITY & GDG [OFFICIAL POOL PLACEHOLDER]',
  tiers: [
    {
      id: 'runner-up',
      rank: 'RANK // 02',
      title: 'RUNNER-UP SQUAD',
      amount: '₹45,000',
      color: 'secondary',
      icon: 'military_tech',
      description: 'Awarded to the second-highest scoring cadre across all cyber domains.',
      perks: [
        '₹45,000 Direct Bank Transfer',
        'Obsidian Silver Hardened Badges',
        'GDG Fast-Track Referral Interview',
      ],
      order: 'order-2 md:order-1',
    },
    {
      id: 'champion',
      rank: 'RANK // 01 • APEX',
      badge: 'NATIONAL GRAND CHAMPION',
      title: 'GRAND CHAMPION CADRE',
      amount: '₹75,000',
      color: 'primary',
      icon: 'workspace_premium',
      isApex: true,
      description: 'The supreme prize package claimed by the definitive conqueror of the Dead Noctis realm.',
      perks: [
        '₹75,000 Direct Cash Escrow Bounty',
        'Dead Noctis Custom Obsidian Trophy & Ring',
        'White Hat Hackers (WHH) Security Fellowship',
        'Direct Security Researcher Placement Pipeline',
      ],
      order: 'order-1 md:order-2 -mt-4',
    },
    {
      id: 'bronze',
      rank: 'RANK // 03',
      title: 'BRONZE CADRE',
      amount: '₹30,000',
      color: 'tertiary',
      icon: 'shield',
      description: 'Honoring elite tactical endurance and consistent exploit submissions.',
      perks: [
        '₹30,000 Direct Cash Bounty',
        'Voxel-Hardened Swag & Hardware Packs',
        'National Merit Cyber Citation',
      ],
      order: 'order-3',
    },
  ],
  bonusPools: [
    {
      label: 'FIRST BLOOD BONUS',
      title: 'Fastest 0-Day Exploit',
      pool: '₹10,000 POOL',
      color: 'primary',
    },
    {
      label: 'BEST WRITE-UP DOSSIER',
      title: 'Vulnerability Research',
      pool: '₹10,000 POOL',
      color: 'secondary',
    },
    {
      label: 'ALL TOP 50 FINALISTS',
      title: 'Onsite Hardware Perks',
      pool: 'MERIT ACCESS',
      color: 'tertiary',
    },
  ],
} as const;

// ── Organizers Alliance (Stitch) ───────────────────────────────────────────
export const organizersAlliance = {
  label: 'STRATEGIC CONSORTIUM // BASTION ALLIANCE',
  heading: '06 // ORGANIZERS & INFRASTRUCTURE ALLIANCE',
  subtitle: 'Engineered and hosted under joint operational command between elite student bodies, cybersecurity chapters, and academic institutions.',
  partners: [
    {
      id: 'gdg',
      role: 'TECHNICAL & CLOUD PARTNER',
      name: 'Google Developer Groups (GDG)',
      description: 'Empowering developer communities across India. Providing compute infrastructure, cloud sandboxes, and post-competition merit pathways.',
      tag: 'GLOBAL DEVELOPER NETWORK',
      logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1hQE8FyF1jdsIRrXrvmMDWZYaspXIEkbswSh9PtItolwOtWAmUg9kLC5mqcXKMgprYTEmntlzuQhPQe__UW2yed0mL7xcB0PB5_-oFn75o6a0odOE0-h_zn0YvuVbVE7h8dlyLFHnBjVCNn-1LalonUyIq66tZLOVJ959eb2udPYuFI0rNwG86QBrt_cPzbSNd8MkGVrjYSsBpsPdGwKMq-TIH0mmxzZYEHFdW3X37BBuyzhRZng',
      localFallback: '/src/assets/images/logos/gdg.png',
      accentColor: 'primary',
    },
    {
      id: 'whh',
      role: 'CHALLENGE ARCHITECTS',
      name: 'White Hat Hackers (WHH)',
      description: 'Premier cyber defense and offense syndicate responsible for authoring zero-day challenge vectors, hypervisors, and verification protocols.',
      tag: 'OPERATIONAL CTF CORE',
      logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLp6yrTLotRtkJZEpmWP_rioIiOYDhy-rkoTciotOYmP9nuVCdagE6kgafZ9meVufAhCDz40JZ5Yz6IcqJHmo4vniKOMGMfyxidSccds_nuUVUA1kv0wriui-EaeJ_Jjs8u7YxCa9JDq6tLH-ul7EPfWPCauOoIVp8W6PSOCMLpqKvaAdHJfmVO7mvmnMpw0QV_8CV2nSbB9_2St3QTF6xNbb789V63xuItSRNt6DLqbHe43PNfDg',
      localFallback: '/src/assets/images/logos/whh.png',
      accentColor: 'secondary',
    },
    {
      id: 'klu',
      role: 'ARENA BASTION & HOST',
      name: 'KL Deemed to be University',
      description: 'Hosting the premier air-gapped physical arena, providing laboratory computing infrastructure, campus security, and cash bounty escrow.',
      tag: 'CAMPUS VENUE PARTNER',
      logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJV7k3suwf4lbRgTSfgNkm34AX-3jS-FDtM3-QP5_bLPZYkupkk-iKDyZmBqHmO-hBdpBsmWKJggLg4t2MIPGqZXn1JmLKKhZHu5LT76ku5w1Soyw9Q1Wrs7gXvfkIN5_5hRdyoLBFeH_buykAaTzSeSHEINPQZFAfOrfaZH2NkVfWbXz99zWjDBcZiWvsTmlgCtQbvnSXgooL3XerHqix0n1WSYs_mBf79DuuDKNUB354-Zef3IQ',
      localFallback: '/src/assets/images/logos/kl-university.png',
      accentColor: 'tertiary',
    },
  ],
} as const;

// ── Registration Terminal (Stitch) ─────────────────────────────────────────
export const registrationTerminal = {
  badge: 'GATEWAY OPEN // PHASE 01 ENLISTMENT',
  heading: 'YOUR GATEWAY TO THE UNKNOWN AWAITS',
  subtitle: 'Assemble your cadre. Calibrate your exploit engines. Step into the dimensional anomaly before slots are sealed.',
  protocol: 'PROTOCOL: CLEARANCE_INIT',
  rulesAgreement: 'I acknowledge the Rules of Engagement: No infrastructure denial-of-service, zero flag sharing, and air-gapped compliance for physical qualifiers.',
  ctaLabel: 'TRANSMIT ENLISTMENT PACKET >',
  successAck: 'CADRE RECOGNIZED // VERIFICATION HANDSHAKE SENT TO COMMS DISPATCH.',
  telemetry: [
    'ENCRYPTED VIA SHA-256',
    'INSTANT DISCORD DISPATCH',
    'ZERO REGISTRATION CHARGES',
  ],
} as const;

// ── Events (Legacy Bridge) ─────────────────────────────────────────────────
export const events = {
  label:   'EVENTS',
  heading: 'CTF - LEVEL 1',
  body:    'A beginner friendly CTF to kickstart your hacking journey.',
  infoCards: [
    {
      id:       'date',
      icon:     '◷',
      title:    'COMING SOON',
      subtitle: 'Event Date',
    },
    {
      id:       'venue',
      icon:     '◈',
      title:    'KL UNIVERSITY',
      subtitle: 'Venue',
    },
    {
      id:       'scope',
      icon:     '◉',
      title:    'NATIONAL LEVEL',
      subtitle: 'Open to all',
    },
  ],
} as const;

// ── Rules ──────────────────────────────────────────────────────────────────
export const rules = {
  label:       'RULES & REGULATIONS',
  heading:     'RULES & REGULATIONS',
  subheading:  'Know the rules. Respect the challenge. Prove your skills.',
  description: 'All participants must follow the competition guidelines to ensure a fair and secure CTF experience. Adherence to these protocols ensures operational integrity and equal opportunity for every operative.',
  statusTag:   'FIREWALL STATUS: ENFORCED',
  reviewNote:  'Proposed competition directives — pending final organizer review.',
  categories: [
    {
      id: 'participation',
      num: 1,
      code: 'SECTION // 01',
      title: 'Participation & Eligibility',
      codename: 'OPERATIVE ACCESS',
      tag: 'ELIGIBILITY',
      rules: [
        {
          id: 'p-1',
          title: 'Eligibility Scope',
          description: 'Open to all enrolled university/college students and verified cybersecurity enthusiasts.',
          reviewNote: 'Confirm whether non-student participants can compete or participate in a separate track.',
        },
        {
          id: 'p-2',
          title: 'Participation Format',
          description: 'Individual operative participation by default. Team or squad configurations, if enabled for special tracks, require advance registration.',
          reviewNote: 'Confirm final team size limits (e.g. 1–4 members) for Level 1.',
        },
        {
          id: 'p-3',
          title: 'Registration Requirements',
          description: 'All operatives must register through the official portal using valid institutional or personal credentials before the kickoff deadline.',
        },
        {
          id: 'p-4',
          title: 'Participant Account Responsibilities',
          description: 'Operatives are strictly responsible for all actions conducted under their credentials. Account sharing and credential pooling are prohibited.',
        },
        {
          id: 'p-5',
          title: 'Accuracy of Information',
          description: 'All registration data must be accurate and verifiable. Falsified identities or credentials will void prize and certificate eligibility.',
        },
      ],
    },
    {
      id: 'guidelines',
      num: 2,
      code: 'SECTION // 02',
      title: 'Competition Guidelines',
      codename: 'OPERATIONAL PROTOCOLS',
      tag: 'GUIDELINES',
      rules: [
        {
          id: 'g-1',
          title: 'Official Competition Schedule',
          description: 'All challenges, services, and flag submission windows strictly follow the announced competition schedule. Late submissions will not be credited.',
        },
        {
          id: 'g-2',
          title: 'Designated Platform Submissions',
          description: 'Solutions and flags must be submitted solely through the designated Dead Noctis CTF scoring engine.',
        },
        {
          id: 'g-3',
          title: 'Challenge Instructions & Submission Formats',
          description: 'Flags follow the standard format DNCTF{...} unless explicitly specified otherwise in the challenge brief. Case sensitivity applies.',
        },
        {
          id: 'g-4',
          title: "Non-Interference with Participants' Progress",
          description: 'Do not tamper with, reset maliciously, or corrupt challenge instances or files intended for shared operative access.',
        },
        {
          id: 'g-5',
          title: 'Scoring & Flag-Validation Mechanisms',
          description: 'Flags are validated instantly by the engine. Dynamic scoring scales point values based on solve count, and first-blood bonuses apply where active.',
        },
      ],
    },
    {
      id: 'fair-play',
      num: 3,
      code: 'SECTION // 03',
      title: 'Fair Play & Ethics',
      codename: 'INTEGRITY DIRECTIVES',
      tag: 'FAIR PLAY',
      rules: [
        {
          id: 'f-1',
          title: 'No Plagiarism or Unauthorized Flag Sharing',
          description: 'Sharing, leaking, trading, or purchasing flags, solutions, or write-ups during the active competition window is strictly forbidden.',
        },
        {
          id: 'f-2',
          title: 'No Impersonation',
          description: 'Impersonating other participants, team handles, GDG/WHH staff, or event administrators will result in immediate disqualification.',
        },
        {
          id: 'f-3',
          title: 'No Exploiting Platform Vulnerabilities',
          description: 'Exploiting flaws in the CTF scoring platform, web daemon, or scoring engine is prohibited. Vulnerabilities must be responsibly reported to staff.',
        },
        {
          id: 'f-4',
          title: 'Authorized Challenge Scope Only',
          description: 'Attacks must remain strictly bounded to explicitly assigned challenge environments and IP ranges. External infrastructure is strictly off-limits.',
        },
        {
          id: 'f-5',
          title: 'Scoreboard & Telemetry Integrity',
          description: 'Any attempts to manipulate scoreboard metrics, artificially inflate solve timings, or collude across accounts will trigger immediate sanctions.',
        },
      ],
    },
    {
      id: 'technical-restrictions',
      num: 4,
      code: 'SECTION // 04',
      title: 'Technical Restrictions',
      codename: 'PERIMETER DEFENSE',
      tag: 'RESTRICTIONS',
      rules: [
        {
          id: 't-1',
          title: 'No DDoS or Disruptive Testing',
          description: 'Denial-of-Service attacks, high-rate ping sweeps, and disruptive volumetric tests against competition infrastructure or campus networks are prohibited.',
        },
        {
          id: 't-2',
          title: 'No Unauthorized Server Access',
          description: 'Do not attempt host-escape, container breakout, or lateral movement into hypervisors, backend databases, or orchestrator control planes.',
        },
        {
          id: 't-3',
          title: 'Preserve Competition Service Availability',
          description: 'Refrain from brute-force password attacks, automated crawlers, or high-concurrency fuzzing unless explicitly indicated as the intended challenge path.',
        },
        {
          id: 't-4',
          title: 'Strict Subnet Boundaries',
          description: 'All testing must remain strictly within the target subnet and port range specified in each challenge briefing.',
        },
        {
          id: 't-5',
          title: 'Organizer Technical Directives',
          description: 'Follow all real-time technical directives, bandwidth caps, and port restriction advisories broadcasted by organizers during the event.',
        },
      ],
    },
    {
      id: 'disqualification',
      num: 5,
      code: 'SECTION // 05',
      title: 'Disqualification Policy',
      codename: 'ENFORCEMENT ACTIONS',
      tag: 'DISQUALIFICATION',
      rules: [
        {
          id: 'd-1',
          title: 'Graduated Sanctions & Warnings',
          description: 'Violations of competition rules may result in formal warnings, point deductions, temporary challenge lockouts, or full disqualification.',
        },
        {
          id: 'd-2',
          title: 'Immediate Disqualification Grounds',
          description: 'Cheating, flag collusion, unauthorized infrastructure tampering, and intentional service disruption result in immediate disqualification.',
        },
        {
          id: 'd-3',
          title: 'Violation Investigation Rights',
          description: 'Organizers reserve the right to audit network telemetry, submission logs, and IP history in any suspected violation.',
        },
        {
          id: 'd-4',
          title: 'Forfeiture of Rewards & Recognition',
          description: 'Disqualified operatives forfeit all rights to rankings, prizes, certificates, and future Dead Noctis CTF events.',
        },
        {
          id: 'd-5',
          title: 'Binding Enforcement Decisions',
          description: 'All decisions regarding rule violations and penalty enforcement are made by the organizing committee and are non-negotiable.',
        },
      ],
    },
    {
      id: 'organizer-authority',
      num: 6,
      code: 'SECTION // 06',
      title: 'Organizer Authority',
      codename: 'ARBITER CONSENSUS',
      tag: 'AUTHORITY',
      rules: [
        {
          id: 'o-1',
          title: 'Rule Clarifications & Modifications',
          description: 'Organizers reserve the authority to clarify, update, or amend competition rules at any stage to maintain fairness and operational stability.',
        },
        {
          id: 'o-2',
          title: 'Mandatory Announcement Adherence',
          description: 'Participants are required to follow all official notices, challenge errata, and operational directives posted on designated channels.',
        },
        {
          id: 'o-3',
          title: 'Challenge Retractions & Adjustments',
          description: 'In the event of unforeseen infrastructure failure or unintended solution leaks, organizers may adjust point values, patch instances, or retire challenges.',
        },
        {
          id: 'o-4',
          title: 'Finality of Arbiter Determinations',
          description: 'All final rulings regarding competition integrity, scoring disputes, and leaderboard validation rest solely with the organizing team.',
        },
      ],
    },
  ],
  // Retain legacy items for backward compatibility
  items: [
    { num: 1, body: 'Individual participation only.' },
    { num: 2, body: 'No brute forcing or DoS attacks.' },
    { num: 3, body: 'No sharing of flags.' },
    { num: 4, body: 'Use only provided infrastructure.' },
    { num: 5, body: "Organizers' decision is final." },
  ],
} as const;

// ── FAQ ────────────────────────────────────────────────────────────────────
export const faq = {
  label:   'FAQ',
  heading: '05 // KNOWLEDGE BASE — FAQ',
  tagline: 'DECRYPTION ARCHIVE // SYSTEM INTEL',
  subtitle: 'Essential operational details regarding eligibility, competition format, challenge vectors, and scoring mechanics.',
  contact: {
    heading: 'STILL HAVE QUESTIONS?',
    description: "Can't find what you're looking for? Reach out to our organizing team.",
    buttonLabel: 'CONTACT ORGANIZERS',
    /** Configurable destination link. Empty string opens polite in-app notice without broken redirection. */
    destinationUrl: '',
  },
  items: [
    {
      id: 'what-is-dead-noctis',
      number: '01',
      question: 'What is Dead Noctis CTF Season 01?',
      answer:
        'Dead Noctis CTF Season 01 is a beginner-friendly Capture The Flag competition organized by Google Developer Groups (GDG) on Campus, KL University in collaboration with White Hat Hackers (WHH). The event provides an immersive, hands-on cybersecurity experience where operatives solve security challenges to locate hidden flags, learn offensive and defensive concepts, and test their skills.',
      highlight: 'Level 1: Beginner-Friendly Capture The Flag',
    },
    {
      id: 'who-can-participate',
      number: '02',
      question: 'Who can participate, and is prior experience required?',
      answer:
        'The competition is open to all enrolled college and university students, as well as cybersecurity enthusiasts and self-taught learners. No prior professional CTF experience is required—challenges are structured to be accessible to beginners (Level 1) while offering engaging technical puzzles for experienced participants. [Specific eligibility criteria and institutional verification requirements are subject to final organizer confirmation.]',
      highlight: 'Open to All Enrolled Students & Enthusiasts',
    },
    {
      id: 'how-to-register',
      number: '03',
      question: 'How can I register for the competition?',
      answer:
        'Registration will be conducted online through the official Dead Noctis event registration portal. Operatives will need to submit basic academic and contact information to secure clearance. [The official registration portal link and opening date will be announced across official GDG and WHH communication channels.]',
      highlight: 'Online Registration via Official Portal [Opening Soon]',
    },
    {
      id: 'challenge-types',
      number: '04',
      question: 'What types of cybersecurity challenges will be included?',
      answer:
        'The competition will feature foundational and intermediate challenge domains, including Web Exploitation, Cryptography, Digital Forensics, Reverse Engineering, OSINT (Open Source Intelligence), Binary Exploitation (PWN), and Adversarial AI / Miscellaneous security anomalies. [Final challenge distribution and difficulty tiers are subject to confirmation before kickoff.]',
      highlight: 'Web, Crypto, Forensics, Rev, OSINT, PWN & AI',
    },
    {
      id: 'format-and-scoring',
      number: '05',
      question: 'Is the competition individual or team-based, and how does scoring work?',
      answer:
        'Participants may compete individually or in teams. Each challenge rewards points upon successfully submitting the correct flag into the scoring engine. Solves are reflected on a live real-time leaderboard, with rankings determined by cumulative points and submission timestamps. [Final squad size limits and dynamic scoring multipliers will be specified in the official player handbook.]',
      highlight: 'Solo & Team Participation with Real-Time Leaderboard',
    },
    {
      id: 'date-venue-prizes',
      number: '06',
      question: 'When and where will the competition take place, and are there any prizes?',
      answer:
        'Dead Noctis CTF Season 01 features virtual online qualifiers followed by an onsite finale hosted at the KL University campus. Top-performing operatives and squads will receive cash rewards, official certificates, and exclusive event merchandise. [Confirmed competition dates, complete timeline, and final prize pool disbursements will be published upon official announcement.]',
      highlight: 'Virtual Qualifiers + Onsite Finale at KL University',
    },
  ],
} as const;

// ── Register ───────────────────────────────────────────────────────────────
export const register = {
  label:           'REGISTER',
  heading:         'BE PART OF THE CHALLENGE',
  body:            'Registrations will be announced soon. Stay connected for updates.',
  buttonLabel:     'REGISTER SOON',
  /** Set to true and fill registrationUrl when registration opens. */
  registrationOpen: false,
  registrationUrl:  '',
} as const;

// ── Loader ─────────────────────────────────────────────────────────────────
export const loader = {
  message: 'ENTERING THE DIMENSION...',
} as const;

// ── 404 ────────────────────────────────────────────────────────────────────
export const notFound = {
  label:      '404',
  heading:    'LOST IN THE DIMENSION',
  body:       "The page you are looking for doesn't exist (or it's in another dimension).",
  buttonLabel: 'GO BACK HOME',
} as const;

// ── Footer (Stitch) ────────────────────────────────────────────────────────
export const footer = {
  title: 'DEAD NOCTIS',
  tagline: 'ENTER THE DIMENSION',
  description: 'A premier deep-shader collegiate cybersecurity offensive defense tournament engineered for anomalous operators and high-order vulnerability research.',
  secStatus: 'SEC_STATUS: OPERATIONAL',
  coordinates: 'LAT.16.4419 // LONG.80.6226',
  directory: [
    { label: 'Home Core', href: '#home' },
    { label: 'Mission Architecture', href: '#about' },
    { label: 'Challenge Vectors', href: '#challenges' },
    { label: 'Operational Timeline', href: '#timeline' },
    { label: 'Bounty Spectrum', href: '#prizes' },
    { label: 'Rules of Engagement', href: '#rules' },
    { label: 'Decryption FAQ', href: '#faq' },
  ],
  channels: [
    { label: 'Discord [HQ_COMMS]', href: '#' },
    { label: 'GitHub [PAYLOADS]', href: '#' },
    { label: 'X [DISPATCHES]', href: '#' },
  ],
  consortium: 'Co-organized and powered by Google Developer Groups (GDG) and White Hat Hackers (WHH) alongside KL University.',
  copyright: '© 2026 DEAD NOCTIS CTF. ALL RIGHTS RESERVED.',
  disclaimer: 'SECURITY DISCLOSURE',
  rulesLabel: 'RULES OF ENGAGEMENT',
  campusTag: 'KLU // CYBERSPACE LABS',
} as const;
