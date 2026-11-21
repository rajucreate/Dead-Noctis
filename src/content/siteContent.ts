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

// ── About ──────────────────────────────────────────────────────────────────
export const about = {
  label:   'ABOUT',
  heading: 'A NEW DIMENSION AWAITS',
  body:    'The Dead Noctis CTF is a beginner friendly capture the flag event by Google Developer Groups, KL University in collaboration with White Hat Hackers.',
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

// ── Events ─────────────────────────────────────────────────────────────────
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
  heading: 'FREQUENTLY ASKED QUESTIONS',
  subtitle: 'Essential operational details regarding eligibility, squad configuration, competition mechanics, and toolsets.',
  contact: {
    heading: 'STILL HAVE QUESTIONS?',
    description: "Can't find what you're looking for? Reach out to our organizing team and we'll help you get the information you need.",
    buttonLabel: 'CONTACT ORGANIZERS',
    /** Configurable destination link. Empty string opens polite in-app notice without broken redirection. */
    destinationUrl: '',
  },
  categories: [
    { id: 'all',          label: 'ALL INTEL',                     shortLabel: 'ALL' },
    { id: 'general',      label: 'GENERAL INFORMATION',           shortLabel: 'GENERAL' },
    { id: 'registration', label: 'REGISTRATION & PARTICIPATION',  shortLabel: 'REGISTRATION' },
    { id: 'format',       label: 'COMPETITION FORMAT',            shortLabel: 'FORMAT' },
    { id: 'technical',    label: 'TECHNICAL REQUIREMENTS',        shortLabel: 'TECHNICAL' },
    { id: 'rules',        label: 'RULES & FAIR PLAY',             shortLabel: 'RULES' },
    { id: 'recognition',  label: 'RESULTS & RECOGNITION',         shortLabel: 'RECOGNITION' },
  ],
  items: [
    // ── 1. General Information ─────────────────────────────────────────────
    {
      id: 'what-is-ctf',
      category: 'general',
      categoryLabel: 'GENERAL // 01',
      question: 'What is Dead Noctis CTF Season 01?',
      answer:
        'Dead Noctis CTF is a beginner-friendly Capture The Flag competition organized by Google Developer Groups (GDG) on Campus KL University in collaboration with White Hat Hackers (WHH). Operatives solve technical cybersecurity challenges across web security, cryptography, reverse engineering, digital forensics, and binary exploitation to uncover hidden flags.',
      highlight: 'Level 1: Beginner-Friendly Capture The Flag',
    },
    {
      id: 'who-can-participate',
      category: 'general',
      categoryLabel: 'GENERAL // 02',
      question: 'Who is eligible to participate in this event?',
      answer:
        'Any currently enrolled university or college student with a passion for cybersecurity, problem-solving, and computer science is welcome to participate. Level 1 is engineered specifically for students taking their first steps in cybersecurity competitions as well as experienced hobbyists.',
      highlight: 'Open to All Enrolled University Students',
    },
    {
      id: 'is-it-free',
      category: 'general',
      categoryLabel: 'GENERAL // 03',
      question: 'Is there any registration or participation fee?',
      answer:
        'Zero entry fee. Dead Noctis CTF Level 1 is 100% free of cost for all registered university operatives and cybersecurity participants.',
      highlight: '100% Free of Cost',
    },

    // ── 2. Registration & Participation ────────────────────────────────────
    {
      id: 'how-to-register',
      category: 'registration',
      categoryLabel: 'REGISTRATION // 01',
      question: 'How and when can I register for the event?',
      answer:
        'Registration will open online through the official Dead Noctis event portal. Official registration deadlines, confirmation timelines, and access links will be announced shortly across all GDG and WHH broadcast channels.',
      highlight: 'Online Registration via Official Portal [Opening Soon]',
      reviewNote: 'Registration dates and portal URL will be published upon organizer finalization.',
    },
    {
      id: 'team-size',
      category: 'registration',
      categoryLabel: 'REGISTRATION // 02',
      question: 'Can I participate solo or do I need a squad?',
      answer:
        'Individual (Solo) participation is supported by default. Squad-based participation guidelines and final team capacity limits [e.g. up to 4 operatives per team] are currently under organizer review and will be confirmed in the official player handbook.',
      highlight: 'Solo Supported; Squad Limits [Pending Review]',
      reviewNote: 'Confirm final squad size limit (e.g. 1-4 members) for Level 1.',
    },
    {
      id: 'required-registration-info',
      category: 'registration',
      categoryLabel: 'REGISTRATION // 03',
      question: 'What details are required to complete registration?',
      answer:
        'Operatives will need a valid student or personal email address, full legal name, college/university affiliation, and team handle (if competing as a squad). Accurate information is required to ensure certificate issuance and prize eligibility.',
      highlight: 'Valid Email & University Affiliation Required',
    },

    // ── 3. Competition Format ──────────────────────────────────────────────
    {
      id: 'challenge-categories',
      category: 'format',
      categoryLabel: 'FORMAT // 01',
      question: 'What challenge categories will be featured?',
      answer:
        'Challenges will cover core cybersecurity domains: Web Exploitation, Cryptography, Reverse Engineering, Digital Forensics, Binary Exploitation (Pwn), and OSINT / Miscellaneous. Challenges range from guided beginner levels to intermediate puzzles.',
      highlight: 'Web, Crypto, Rev, Forensics, Pwn, OSINT',
    },
    {
      id: 'event-schedule-duration',
      category: 'format',
      categoryLabel: 'FORMAT // 02',
      question: 'What is the competition schedule and duration?',
      answer:
        'The competition will run as a time-bounded sprint. The official start date, launch hour, and active solve window [e.g. 24–48 hours] will be published in the event schedule section before kickoff. Late submissions will not be accepted.',
      highlight: 'Exact Duration & Kickoff [Pending Official Schedule]',
      reviewNote: 'Specific date and start time to be confirmed by organizing committee.',
    },
    {
      id: 'flag-format-standard',
      category: 'format',
      categoryLabel: 'FORMAT // 03',
      question: 'What is the standard flag format for submissions?',
      answer:
        'Standard flags follow the format DNCTF{...} unless an individual challenge explicitly designates a custom submission string. All flags are case-sensitive and must be submitted into the designated engine input without trailing spaces.',
      highlight: 'Standard format: DNCTF{...}',
    },

    // ── 4. Technical Requirements ──────────────────────────────────────────
    {
      id: 'hardware-tools',
      category: 'technical',
      categoryLabel: 'TECHNICAL // 01',
      question: 'What hardware and software tools are needed?',
      answer:
        'All you need is a laptop or desktop with reliable internet connectivity and a modern web browser. A Unix-like environment (Linux, macOS, or WSL2 on Windows) is strongly recommended for running security tools and scripts.',
      highlight: 'Laptop + Web Browser (Linux / WSL2 Recommended)',
    },
    {
      id: 'recommended-software',
      category: 'technical',
      categoryLabel: 'TECHNICAL // 02',
      question: 'Which software utilities should I install beforehand?',
      answer:
        'Helpful free utilities include Python 3, Wireshark, Burp Suite Community Edition, Ghidra or IDA Free, netcat, and online tools like CyberChef. Most beginner challenges can be solved with lightweight open-source software.',
      highlight: 'Free Tools: Python 3, Wireshark, Burp Suite, CyberChef',
    },
    {
      id: 'platform-access',
      category: 'technical',
      categoryLabel: 'TECHNICAL // 03',
      question: 'How do operatives access challenges and instances?',
      answer:
        'Challenge instructions, target connection endpoints, downloadable attachments, and dynamic container instances will be accessible directly through the web-based Dead Noctis CTF scoring platform.',
      highlight: 'Web-Based Scoring & Container Instances',
    },

    // ── 5. Rules & Fair Play ───────────────────────────────────────────────
    {
      id: 'flag-sharing-rules',
      category: 'rules',
      categoryLabel: 'RULES // 01',
      question: 'Can I share flags, solutions, or write-ups during the event?',
      answer:
        'Strictly prohibited. Sharing flags, leaking exploit scripts, trading hints, or publishing write-ups before the competition concludes constitutes cheating and results in immediate disqualification and removal from the scoreboard.',
      highlight: 'Zero-Tolerance Policy on Flag Sharing',
    },
    {
      id: 'infrastructure-attacks',
      category: 'rules',
      categoryLabel: 'RULES // 02',
      question: 'Are attacks against competition infrastructure permitted?',
      answer:
        'No. Probing, attacking, or exploiting vulnerabilities in the CTF scoring platform, web servers, databases, or campus networks is strictly forbidden. Attacks must remain strictly within assigned challenge target containers.',
      highlight: 'Only Target Explicit Challenge Scope',
    },
    {
      id: 'dos-brute-force',
      category: 'rules',
      categoryLabel: 'RULES // 03',
      question: 'Are brute-force and Denial-of-Service (DoS) attacks allowed?',
      answer:
        'Denial-of-Service (DoS/DDoS) attacks, automated rapid ping sweeps, and volumetric network flooding are strictly prohibited. Automated rate-limiting is actively enforced on all challenge endpoints.',
      highlight: 'No DoS, DDoS, or Volumetric Brute-Forcing',
    },

    // ── 6. Results & Recognition ───────────────────────────────────────────
    {
      id: 'scoring-mechanics',
      category: 'recognition',
      categoryLabel: 'RECOGNITION // 01',
      question: 'How does the scoring and live leaderboard work?',
      answer:
        'Points are awarded upon successful flag submission. Dynamic scoring scales challenge point values according to the total number of solves. Ties on the live leaderboard are broken dynamically by the earlier timestamp of the final solve.',
      highlight: 'Dynamic Scoring with Timestamp Tie-Breaking',
    },
    {
      id: 'certificates-policy',
      category: 'recognition',
      categoryLabel: 'RECOGNITION // 02',
      question: 'Will participants receive official certificates?',
      answer:
        'Yes. All registered participants who actively solve and submit at least one valid challenge flag will receive an official digital Certificate of Participation issued jointly by Google Developer Groups KL University and White Hat Hackers.',
      highlight: 'Official Digital GDG & WHH Certificates',
    },
    {
      id: 'prizes-and-awards',
      category: 'recognition',
      categoryLabel: 'RECOGNITION // 03',
      question: 'What awards and prizes are offered for top scoreboard finishers?',
      answer:
        'Top-ranking operatives and squads will receive achievement awards, winner certificates, and exclusive event merchandise. The detailed prize distribution and reward tiers are [Pending Final Organizer Announcement].',
      highlight: 'Achievement Honors & Event Swag [Tiers Pending Announcement]',
      reviewNote: 'Prize pool and sponsor reward tiers subject to organizer confirmation.',
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
