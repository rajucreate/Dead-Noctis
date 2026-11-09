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
      subtitle: 'Real world skills',
    },
    {
      id:       'solve',
      icon:     '◉',
      title:    'SOLVE',
      subtitle: 'Hands on challenges',
    },
    {
      id:       'connect',
      icon:     '◎',
      title:    'CONNECT',
      subtitle: 'With like minded hackers',
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
  label:   'RULES',
  heading: 'PLAY FAIR HACK HARD',
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
  categories: [
    { id: 'all', label: 'ALL INTEL' },
    { id: 'general', label: 'GENERAL' },
    { id: 'teams', label: 'ELIGIBILITY & TEAMS' },
    { id: 'challenges', label: 'CHALLENGES & TOOLS' },
    { id: 'scoring', label: 'SCORING & REWARDS' },
  ],
  items: [
    {
      id: 'what-is-ctf',
      category: 'general',
      categoryLabel: 'GENERAL // 01',
      question: 'What is Dead Noctis CTF?',
      answer:
        'Dead Noctis CTF is a beginner-friendly Capture The Flag competition organized by Google Developer Groups (GDG) on Campus KL University in collaboration with White Hat Hackers (WHH). Operatives solve technical puzzles across web security, cryptography, reverse engineering, and digital forensics to uncover hidden flags.',
      highlight: 'Level 1: Beginner-Friendly Capture The Flag',
    },
    {
      id: 'who-can-participate',
      category: 'teams',
      categoryLabel: 'OPERATIVE ACCESS // 02',
      question: 'Who can participate in this event?',
      answer:
        'Any university student or technology enthusiast with a passion for cybersecurity and problem-solving is welcome to participate. Level 1 is engineered specifically for students taking their first steps in cybersecurity competitions.',
      highlight: 'Open to all university students',
    },
    {
      id: 'is-it-free',
      category: 'general',
      categoryLabel: 'ENTRY PROTOCOL // 03',
      question: 'Is there a registration or participation fee?',
      answer:
        'Zero entry fee. Dead Noctis CTF Level 1 is 100% free of cost for all registered university operatives and cybersecurity participants.',
      highlight: '100% Free of Cost',
    },
    {
      id: 'team-size',
      category: 'teams',
      categoryLabel: 'SQUAD CONFIG // 04',
      question: 'Can I participate solo or do I need a squad?',
      answer:
        'Both options are fully supported! You can deploy as an individual operative (Solo) or assemble a tactical squad of up to 4 operatives. All squad members collaborate under a single scoreboard handle.',
      highlight: 'Solo or Squads up to 4 Operatives',
    },
    {
      id: 'prior-experience',
      category: 'challenges',
      categoryLabel: 'SKILL LEVEL // 05',
      question: 'Do I need prior cybersecurity or hacking experience?',
      answer:
        'No prior CTF experience is required. Level 1 is designed as an educational launchpad. Challenges begin with guided foundational puzzles, and mentors will be available throughout the event to assist with problem-solving strategies.',
      highlight: 'No Prior Experience Required',
    },
    {
      id: 'hardware-tools',
      category: 'challenges',
      categoryLabel: 'ARSENAL & SCOPE // 06',
      question: 'What hardware and software tools are needed?',
      answer:
        'All you need is a laptop with internet connectivity and a modern web browser. Helpful free tools include Linux or WSL, Python 3, Wireshark, Burp Suite Community Edition, and online cryptographic utilities like CyberChef.',
      highlight: 'Laptop + Web Browser + Free Tools',
    },
    {
      id: 'flag-scoring',
      category: 'scoring',
      categoryLabel: 'SCOREBOARD // 07',
      question: 'How does flag submission and dynamic scoring work?',
      answer:
        'Each solved challenge reveals a unique flag formatted as CTF{...}. Submitting the flag into the challenge portal instantly awards points to your handle. Ties on the live leaderboard are dynamically broken by solve timestamps.',
      highlight: 'Standard format: CTF{...}',
    },
    {
      id: 'prizes-certificates',
      category: 'scoring',
      categoryLabel: 'ACCREDITATION // 08',
      question: 'Will certificates and awards be provided?',
      answer:
        'Yes! Official certificates of achievement and participation will be issued jointly by Google Developer Groups KL University and White Hat Hackers, alongside special honors for top scoreboard operatives.',
      highlight: 'Official GDG & WHH Certificates',
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
