// ============================================================
//  EDIT YOUR CONTENT HERE — everything flows from this file
// ============================================================

export const OWNER = {
  name: "Alex Dev",
  initials: "AD",
  title: "Backend Engineer & Web3 Builder",
  tagline: ["Software Engineer.", "Rust Developer.", "Web3 Builder.", "SQL Optimizer.", "Backend Engineer."],
  bio: `Building scalable backend and AI-powered web applications using
        JavaScript, Python, and Rust. Exploring Solana-based Web3 systems
        and intelligent automation for the decentralised future.`,
  longBio: `I'm a mid-level Backend Engineer with 4+ years of experience crafting
    high-performance distributed systems. I specialise in Python, TypeScript, JavaScript,
    and Rust — with a growing focus on Solana smart contracts and Web3 infrastructure.
    I'm passionate about SQL optimisation, clean API design, and systems that scale
    without drama. Currently open to full-time roles (remote or onsite) and
    exciting freelance opportunities.`,
  availability: "Available for Freelance",
  email: "alex@example.com",
  location: "Rawalpindi, Pakistan · Remote-ready",
  avatar: null, // replace with your image URL e.g. "/pfp.jpg"
  social: {
    github:   "https://github.com/alexdev",
    linkedin: "https://linkedin.com/in/alexdev",
    twitter:  "https://twitter.com/alexdev",
  },
  cv: "/AlexDev_CV_2026.pdf", // place your PDF in /public
};

export const SKILLS = [
  {
    icon: "🐍",
    title: "Python",
    desc: "Scalable APIs, async services, data pipelines and microservices.",
    tags: ["FastAPI", "Django", "asyncio", "Celery"],
    color: "#3B82F6",
  },
  {
    icon: "⚡",
    title: "TypeScript / JS",
    desc: "Node.js backends, real-time systems with WebSockets, serverless.",
    tags: ["Node.js", "NestJS", "Express", "Bun"],
    color: "#F5C842",
  },
  {
    icon: "🦀",
    title: "Rust",
    desc: "Memory-safe, zero-overhead performance-critical services and CLIs.",
    tags: ["Tokio", "Axum", "Actix", "WASM"],
    color: "#FF5733",
  },
  {
    icon: "⬡",
    title: "Solana / Web3",
    desc: "On-chain programs, DeFi integrations, token programs.",
    tags: ["Anchor", "Web3.js", "SPL Tokens", "DeFi"],
    color: "#9945FF",
  },
  {
    icon: "🗄️",
    title: "SQL & Databases",
    desc: "Complex query optimisation, index strategy, execution plan analysis.",
    tags: ["PostgreSQL", "Query Plans", "Redis", "MySQL"],
    color: "#10B981",
  },
  {
    icon: "🏗️",
    title: "DevOps & Infra",
    desc: "Containerised deployments, CI/CD, observability stacks.",
    tags: ["Docker", "GitHub Actions", "AWS", "Terraform"],
    color: "#06B6D4",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "QueryForge",
    desc: "A CLI-based SQL query analysis and optimisation toolkit. Parses execution plans, suggests optimal indexes, and benchmarks query performance. Reduced query times by up to 70% in production.",
    image: null, // "/projects/queryforge.png"
    imageBg: "#1a2744",
    tags: ["PYTHON", "RUST", "POSTGRESQL", "CLI"],
    links: { demo: "#", code: "#" },
    featured: true,
  },
  {
    id: 2,
    title: "SolanaVault",
    desc: "Non-custodial escrow smart contract on Solana mainnet. Supports time-locked transfers, multi-sig auth, and SPL token escrows. $200k+ TVL deployed.",
    image: null,
    imageBg: "#1a1035",
    tags: ["RUST", "ANCHOR", "SOLANA", "TYPESCRIPT"],
    links: { demo: "#", code: "#" },
    featured: true,
  },
  {
    id: 3,
    title: "PulseAPI",
    desc: "High-throughput async REST API gateway serving 50k+ requests/day with Redis caching, JWT auth, rate limiting, and auto-generated OpenAPI docs.",
    image: null,
    imageBg: "#0f2618",
    tags: ["PYTHON", "FASTAPI", "REDIS", "DOCKER"],
    links: { code: "#" },
    featured: true,
  },
  {
    id: 4,
    title: "RustPipeline",
    desc: "Real-time ETL data pipeline processing 1M+ records/sec with zero GC pauses. Streams to PostgreSQL, S3, and Kafka with configurable transforms.",
    image: null,
    imageBg: "#2a1a0f",
    tags: ["RUST", "TOKIO", "KAFKA", "AWS S3"],
    links: { demo: "#", code: "#" },
    featured: true,
  },
  {
    id: 5,
    title: "TaskyCLI",
    desc: "A lightweight command-line task manager written in Rust. Supports adding, listing, removing, and marking tasks with cross-platform file persistence.",
    image: null,
    imageBg: "#1a1a2e",
    tags: ["RUST", "CLI", "CROSS-PLATFORM"],
    links: { code: "#" },
    featured: false,
  },
  {
    id: 6,
    title: "Web3 Auth SDK",
    desc: "A TypeScript SDK for Solana wallet-based authentication. Drop-in replacement for traditional JWT auth using on-chain signatures.",
    image: null,
    imageBg: "#0f1a2e",
    tags: ["TYPESCRIPT", "SOLANA", "WEB3.JS", "SDK"],
    links: { demo: "#", code: "#" },
    featured: false,
  },
];

export const POSTS = [
  {
    id: 1,
    slug: "rust-vs-python-pipelines",
    title: "Why Rust Is Eating Python's Lunch in Data Pipelines",
    excerpt: "A deep comparison of performance, memory usage, and developer experience when building ETL pipelines in Rust vs Python — with real benchmarks.",
    date: "Mar 12, 2026",
    readTime: "8 min",
    tag: "Rust",
    tagColor: "#FF5733",
    cover: null,
  },
  {
    id: 2,
    slug: "anchor-vs-raw-rust",
    title: "Solana Smart Contracts: Anchor vs Raw Rust — Which Should You Use?",
    excerpt: "Breaking down the trade-offs between the Anchor framework and native Solana program development for production contracts.",
    date: "Feb 28, 2026",
    readTime: "12 min",
    tag: "Web3",
    tagColor: "#9945FF",
    cover: null,
  },
  {
    id: 3,
    slug: "postgres-explain-analyze",
    title: "PostgreSQL EXPLAIN ANALYZE: A Deep Dive for Engineers Who Ship",
    excerpt: "Everything you need to read query plans, fix slow queries, and design indexes that actually get used — with real-world examples.",
    date: "Jan 18, 2026",
    readTime: "10 min",
    tag: "SQL",
    tagColor: "#10B981",
    cover: null,
  },
  {
    id: 4,
    slug: "async-python-apis",
    title: "Building Async Python APIs That Don't Fall Apart Under Load",
    excerpt: "FastAPI + asyncio patterns that scale. Covers connection pools, background tasks, and avoiding the pitfalls that bite at 10k req/min.",
    date: "Dec 5, 2025",
    readTime: "7 min",
    tag: "Python",
    tagColor: "#3B82F6",
    cover: null,
  },
  {
    id: 5,
    slug: "typescript-api-design",
    title: "TypeScript-First API Design: Stop Fighting Your Type System",
    excerpt: "Practical patterns for building fully type-safe Node.js APIs that your IDE loves and your future self will thank you for.",
    date: "Nov 20, 2025",
    readTime: "9 min",
    tag: "TypeScript",
    tagColor: "#F5C842",
    cover: null,
  },
];

export const STATS = [
  { num: "4+",  label: "Years of Experience" },
  { num: "12+", label: "Projects Shipped"    },
  { num: "3",   label: "Web3 Contracts"      },
  { num: "50k+",label: "API Req / Day"       },
];
