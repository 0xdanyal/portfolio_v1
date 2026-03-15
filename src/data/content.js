// ============================================================
//  EDIT YOUR CONTENT HERE — everything flows from this file
// ============================================================

export const OWNER = {
  name: "Danyal",
  initials: "D",
  title: "Software Engineer",
  tagline: ["Danyal.", "Software Engineer.",  "SQL Optimizer.", "Rust Developer.", "Web3 Builder.", "Backend Engineer."],
  bio: `Building scalable backend and AI-powered web applications using
        JavaScript, Python, and Rust. Exploring Solana-based Web3 systems
         for the decentralised future.`,
  longBio: `I'm a mid-level Backend Engineer with 4+ years of experience crafting
    high-performance distributed systems. I specialise in Python, TypeScript, JavaScript,
    and Rust - with a growing focus on Solana smart contracts and Web3 infrastructure.
    I'm passionate about SQL optimisation, clean API design, and systems that scale
    without drama. Currently open to full-time roles (remote or onsite) and
    exciting freelance opportunities.`,
  availability: "Available for Freelance",
  email: "dkdanyal456@gmail.com",
  location: "Islamabad, Pakistan · Remote-ready",
  avatar: "/pfp2.jpeg", // replace with your image URL e.g. "/pfp.jpg"
  social: {
    github:   "https://github.com/0xdanyal",
    linkedin: "https://linkedin.com/in/danyal-dev",
    twitter:  "https://twitter.com/0xonchainer",
  },
  cv: "/public/danyal_FS_CV.pdf",
};

export const SKILLS = [
  {
    icon: "🐍",
    title: "Python",
    desc: "Scalable APIs, async services, data pipelines and MVC.",
    tags: ["FastAPI", "Django", "Flask"],
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
    tags: ["Docker", "GitHub Actions", "AWS"],
    color: "#06B6D4",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "RSMS",
    desc: "RSMS aims to facilitate residents by providing user-friendly system. It offers features such as complaint management, facility booking, and community announcements, enhancing communication and convenience within residential societies. Hence overall, RSMS is a comprehensive solution designed to improve the living experience for residents in residential societies.",
    image: "/projects/RSMS.jpeg",
    imageBg: "#1a2744",
    tags: ["React", "Node.js", "Express","MongoDB"],
    links: {code: "https://github.com/0xdanyal/RSMS-Web" },
    featured: true,
  },
  {
    id: 2,
    title: "GlobeSwap",
    desc: "Created a peer-to-peer marketplace based on escrow logic for OTC trading, including dispute resolution and PDA-based fund management. Created on the top of one of the fastest blockchain(Solana) for max. speed of txns. and tested all programs for the sake of security and cost-saving (min. account’s interaction).",
    image: "/projects/GlobeSwap.png",
    imageBg: "#1a1035",
    tags: ["RUST", "ANCHOR", "SOLANA", "TYPESCRIPT", "React"],
    links: {code: "https://github.com/0xdanyal/GlobeSwap" },
    featured: true,
  },
  {
    id: 3,
    title: "Brainly",
    desc: "A full-stack app aims to act like yout second brain, where you can save your notes, todos, links and any other piece of information in an organised way. It has a powerful search functionality that allows you to quickly find any saved item. Built with React, Node.js, Express and MongoDB.",
    image: "/projects/brainly.jpg",
    imageBg: "#0f2618",
    tags: ["React", "Node.js", "Express", "MongoDB", "TYPESCRIPT"],
    links: { demo: "#", code: "https://github.com/0xdanyal/second-brain" },
    featured: true,
  },
  {
    id: 4,
    title: "E-commerce Store",
    desc: "Developed a full stack and responsive web application for my client’s clothing brand Implemented product listing, category filtering, shopping cart functionality, and JWT-based authentication.",
    image: "/projects/EcommerceApp.png",
    imageBg: "#2a1a0f",
    tags: ["Node.js", "Express", "MongoDB", "React"],
    links: {code: "https://github.com/0xdanyal/ecommerce-store" },
    featured: true,
  },
   {
    id: 6,
    title: "JustBlog",
    desc: "Built a blogging platform with authentication, comments, and article management.Developed secure CRUD APIs, JWT, Pagination and used React Router for smooth navigation.",
    image: "/projects/justBlog.png",
    imageBg: "#0f1a2e",
    tags: ["Node.js", "Express", "MongoDB", "React"],
    links: { code: "https://github.com/0xdanyal/JustBlog" },
    featured: false,
  },
  {
    id: 5,
    title: "TodoCLI",
    desc: "A lightweight command-line task manager written in Rust. Supports adding, listing, removing, and marking tasks with cross-platform file persistence.",
    image: "/projects/todoCLI.jpeg",
    imageBg: "#1a1a2e",
    tags: ["RUST", "CLI", "CROSS-PLATFORM"],
    links: { code: "https://github.com/0xdanyal/todo_cli" },
    featured: false,
  },
];

export const POSTS = [
  {
    id: 1,
    slug: "A detailed guide on solana blockchain architecture and how it achieves high throughput",
    title: "A deep guide on Solana blockchain and architecture",
    excerpt: "An in-depth exploration of Solana's blockchain architecture, covering its unique Proof of History consensus mechanism, parallel transaction processing with Sealevel, and how these innovations enable high throughput and low latency for decentralized applications.",
    date: "Mar 12, 2026",
    readTime: "8 min",
    tag: "Rust",
    tagColor: "#FF5733",
    cover: null,
    content: `
      <h2>Introduction to Solana</h2>
      <p>Solana is a high-performance blockchain platform designed to support decentralized applications (dApps) and cryptocurrencies. Launched in 2020, it has quickly gained popularity for its ability to process thousands of transactions per second with low fees. But what makes Solana different from other blockchains like Ethereum or Bitcoin? The answer lies in its innovative architecture, which combines several cutting-edge technologies to achieve unprecedented scalability.</p>

      <h2>Proof of History (PoH): The Heart of Solana's Clock</h2>
      <p>At the core of Solana's architecture is Proof of History, a novel consensus mechanism invented by Anatoly Yakovenko. Unlike traditional blockchains that rely on timestamps for ordering transactions, PoH creates a verifiable delay function that proves the passage of time between events.</p>
      <p>How does it work? PoH uses a cryptographically secure function called a Verifiable Delay Function (VDF) to generate a sequence of hashes. Each hash in the sequence proves that a certain amount of time has passed since the previous hash. This creates a global source of time that all nodes can agree upon without needing to communicate.</p>
      <p>The key innovation here is that PoH allows validators to process transactions in parallel while maintaining a consistent global order. This is crucial for Solana's high throughput.</p>

      <h2>Sealevel: Parallel Smart Contract Execution</h2>
      <p>Sealevel is Solana's runtime that enables parallel execution of smart contracts. In traditional blockchains, transactions are processed sequentially, which limits scalability. Sealevel, however, can execute thousands of contracts simultaneously by identifying which accounts each transaction reads from and writes to.</p>
      <p>This is achieved through Solana's account model, where all data (including smart contract code) is stored in accounts. The runtime analyzes transaction dependencies and schedules non-conflicting transactions to run in parallel across multiple cores.</p>

      <h2>Turbine: Efficient Block Propagation</h2>
      <p>Turbine is Solana's block propagation protocol that breaks down blocks into smaller packets and uses a multi-layer broadcast system. This ensures that even with high transaction volumes, blocks can be propagated quickly across the network.</p>
      <p>The protocol uses a combination of UDP and a gossip protocol to efficiently distribute data. By breaking blocks into shreds (small packets), Turbine minimizes the impact of network latency and packet loss.</p>

      <h2>Gulf Stream: Transaction Forwarding</h2>
      <p>Gulf Stream is a protocol that allows validators to execute transactions before they are included in a block. This reduces confirmation times and improves user experience.</p>
      <p>When a transaction is submitted, it's forwarded to the leader (the validator responsible for producing the next block). The leader can start executing the transaction immediately, even before it's officially included in the block.</p>

      <h2>Pipeline: Optimized Transaction Processing</h2>
      <p>Solana's pipeline architecture breaks down transaction processing into several stages: fetching, signature verification, execution, and storage. Each stage is optimized and can run in parallel.</p>
      <p>This pipelined approach, combined with GPU acceleration for signature verification, allows Solana to process up to 65,000 transactions per second.</p>

      <h2>Cloudbreak: Horizontal Scaling</h2>
      <p>Cloudbreak is Solana's database that enables horizontal scaling of the state. It uses a technique called state sharding to distribute the blockchain's state across multiple databases.</p>
      <p>This allows the network to scale by adding more validators without increasing the load on individual nodes.</p>

      <h2>Challenges and Future Developments</h2>
      <p>While Solana's architecture has enabled impressive performance, it has faced challenges including network outages and centralization concerns. The team is continuously working on improvements to make the network more robust and decentralized.</p>
      <p>Future developments include the implementation of Firedancer, a new validator client written in C that promises even higher performance.</p>

      <h2>Conclusion</h2>
      <p>Solana's architecture represents a significant leap forward in blockchain technology. By combining Proof of History with parallel processing and optimized protocols, Solana has achieved throughput levels that rival traditional payment systems. As the ecosystem continues to grow, we can expect to see even more innovative applications built on this powerful platform.</p>
    `,
  },
  {
    id: 2,
    slug: "SQL query optimisation techniques for high-traffic web applications",
    title: "SQL Query Optimisation for High-Traffic Apps",
    excerpt: "A deep dive into SQL query optimisation techniques for high-traffic web applications, covering indexing strategies, execution plan analysis, and real-world case studies.",
    date: "Feb 28, 2026",
    readTime: "12 min",
    tag: "SQL",
    tagColor: "#10B981",
    cover: null,
    content: `
      <h2>Introduction</h2>
      <p>In high-traffic web applications, database performance is often the bottleneck. Slow queries can lead to poor user experience, increased server costs, and even downtime. SQL query optimization is crucial for maintaining fast response times and efficient resource usage.</p>

      <h2>Understanding Query Execution</h2>
      <p>Before optimizing queries, it's important to understand how databases execute them. Most relational databases use a query optimizer that creates an execution plan for each query. This plan outlines how the database will access data, join tables, and apply filters.</p>
      <p>Use the EXPLAIN command (or equivalent) to analyze execution plans. Look for full table scans, inefficient joins, and missing indexes.</p>

      <h2>Indexing Strategies</h2>
      <p>Indexes are the most powerful tool for query optimization. They allow the database to quickly locate data without scanning entire tables.</p>
      <h3>Types of Indexes</h3>
      <ul>
        <li><strong>B-Tree Indexes:</strong> Default for most columns, good for equality and range queries</li>
        <li><strong>Hash Indexes:</strong> Fast for equality lookups, but not suitable for range queries</li>
        <li><strong>GIN Indexes:</strong> For full-text search and array operations</li>
        <li><strong>Partial Indexes:</strong> Index only a subset of rows that match a condition</li>
      </ul>

      <h3>Indexing Best Practices</h3>
      <ul>
        <li>Index foreign keys</li>
        <li>Create composite indexes for multi-column WHERE clauses</li>
        <li>Avoid over-indexing, as it increases write overhead</li>
        <li>Use EXPLAIN to verify index usage</li>
      </ul>

      <h2>Writing Efficient Queries</h2>
      <h3>Select Only What You Need</h3>
      <p>Use SELECT * sparingly. Specify only the columns you need to reduce data transfer and processing.</p>

      <h3>Optimize JOINs</h3>
      <p>JOINs can be expensive. Ensure you're joining on indexed columns and consider the order of tables in your query.</p>

      <h3>Use EXISTS Instead of IN for Subqueries</h3>
      <p>EXISTS is often more efficient than IN, especially with large datasets.</p>

      <h3>Pagination</h3>
      <p>For large result sets, use LIMIT and OFFSET wisely. For better performance on large tables, consider cursor-based pagination.</p>

      <h2>Database Design Considerations</h2>
      <h3>Normalization vs Denormalization</h3>
      <p>While normalization reduces redundancy, denormalization can improve read performance in high-traffic scenarios.</p>

      <h3>Partitioning</h3>
      <p>Partition large tables to improve query performance and maintenance operations.</p>

      <h3>Connection Pooling</h3>
      <p>Use connection pooling to reduce the overhead of establishing database connections.</p>

      <h2>Caching Strategies</h2>
      <p>Caching can dramatically improve performance for frequently accessed data.</p>
      <h3>Application-Level Caching</h3>
      <p>Cache query results in Redis or Memcached.</p>
      <h3>Database-Level Caching</h3>
      <p>Use the database's built-in caching mechanisms.</p>
      <h3>Query Result Caching</h3>
      <p>Cache entire query results when appropriate.</p>

      <h2>Monitoring and Profiling</h2>
      <p>Regular monitoring is essential for identifying performance issues.</p>
      <h3>Slow Query Logs</h3>
      <p>Enable slow query logging to identify problematic queries.</p>
      <h3>Performance Monitoring Tools</h3>
      <p>Use tools like pg_stat_statements (for PostgreSQL) to track query performance.</p>

      <h2>Real-World Case Study</h2>
      <p>Consider a social media application with millions of users. A query to fetch a user's feed might look like this:</p>
      <pre><code>SELECT p.* FROM posts p
JOIN follows f ON p.user_id = f.following_id
WHERE f.follower_id = $1
ORDER BY p.created_at DESC
LIMIT 20;</code></pre>
      <p>To optimize this:</p>
      <ul>
        <li>Index on follows(follower_id, following_id)</li>
        <li>Index on posts(user_id, created_at)</li>
        <li>Use pagination with cursor-based approach</li>
        <li>Cache user feeds for short periods</li>
      </ul>

      <h2>Conclusion</h2>
      <p>SQL query optimization is an ongoing process that requires understanding your data, query patterns, and database internals. By following these best practices and regularly monitoring performance, you can ensure your high-traffic applications remain fast and responsive.</p>
    `,
  },
];

export const STATS = [
  { num: "4+",  label: "Years of Experience" },
  { num: "12+", label: "Projects Shipped"    },
  { num: "3",   label: "Web3 Contracts"      },
  { num: "50k+",label: "API Req / Day"       },
];
