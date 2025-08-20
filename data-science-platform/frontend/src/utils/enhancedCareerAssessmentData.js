// Enhanced Career Assessment Questions with Creative UI and Beginner-Friendly Language
export const assessmentQuestions = [
  {
    id: 1,
    category: "Your Interests",
    icon: "🎯",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    question: "What sounds most exciting to you?",
    description: "Think about what kind of work would make you jump out of bed in the morning!",
    type: "single",
    options: [
      { 
        id: "a", 
        text: "Teaching computers to predict the future", 
        subtext: "Like Netflix recommendations or weather forecasts",
        emoji: "🤖", 
        color: "#6366f1",
        roles: ["data-scientist", "ml-engineer", "ai-researcher"] 
      },
      { 
        id: "b", 
        text: "Building the digital highways for data", 
        subtext: "Creating systems that handle millions of data points",
        emoji: "🏗️", 
        color: "#f59e0b",
        roles: ["data-engineer", "data-architect"] 
      },
      { 
        id: "c", 
        text: "Being a detective with numbers", 
        subtext: "Finding hidden patterns and solving business mysteries",
        emoji: "🔍", 
        color: "#06b6d4",
        roles: ["data-analyst", "bi-developer"] 
      },
      { 
        id: "d", 
        text: "Making computers understand human language", 
        subtext: "Like Siri, Alexa, or ChatGPT",
        emoji: "💬", 
        color: "#f97316",
        roles: ["nlp-engineer"] 
      },
      { 
        id: "e", 
        text: "Teaching computers to see", 
        subtext: "Recognizing faces, objects, or medical conditions in images",
        emoji: "👁️", 
        color: "#8b5cf6",
        roles: ["computer-vision"] 
      },
      { 
        id: "f", 
        text: "Using math to solve real problems", 
        subtext: "Like predicting disease outbreaks or election results",
        emoji: "📊", 
        color: "#ef4444",
        roles: ["statistician"] 
      },
      { 
        id: "g", 
        text: "Playing with money using data", 
        subtext: "Making smart investment decisions and managing financial risk",
        emoji: "💰", 
        color: "#14b8a6",
        roles: ["quant-analyst"] 
      },
      { 
        id: "h", 
        text: "Creating beautiful stories with data", 
        subtext: "Making charts and graphics that wow people",
        emoji: "🎨", 
        color: "#d946ef",
        roles: ["data-visualization"] 
      }
    ]
  },
  {
    id: 2,
    category: "Tech Comfort Level",
    icon: "💻",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    question: "How comfortable are you with coding and technology?",
    description: "Don't worry - there's a perfect role for every skill level!",
    type: "single",
    options: [
      { 
        id: "a", 
        text: "I'm a coding ninja!", 
        subtext: "I can build apps, websites, and complex systems",
        emoji: "🚀", 
        color: "#6366f1",
        roles: ["ml-engineer", "data-engineer", "ai-researcher", "nlp-engineer", "computer-vision"] 
      },
      { 
        id: "b", 
        text: "I'm pretty tech-savvy", 
        subtext: "I can write scripts, use databases, and learn new tools quickly",
        emoji: "💪", 
        color: "#10b981",
        roles: ["data-scientist", "data-architect"] 
      },
      { 
        id: "c", 
        text: "I'm still learning", 
        subtext: "I know some basics but I'm eager to grow my skills",
        emoji: "🌱", 
        color: "#f59e0b",
        roles: ["data-analyst", "statistician"] 
      },
      { 
        id: "d", 
        text: "I'm new but excited!", 
        subtext: "Technology is intimidating but I'm ready to dive in",
        emoji: "🤔", 
        color: "#06b6d4",
        roles: ["bi-developer", "data-visualization", "quant-analyst"] 
      }
    ]
  },
  {
    id: 3,
    category: "Math & Numbers",
    icon: "🧮",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    question: "How do you feel about math and statistics?",
    description: "Be honest - we'll find the right fit for your comfort level!",
    type: "single",
    options: [
      { 
        id: "a", 
        text: "Math is my superpower!", 
        subtext: "I love calculus, probability, and complex equations",
        emoji: "🧠", 
        color: "#8b5cf6",
        roles: ["statistician", "quant-analyst", "ai-researcher"] 
      },
      { 
        id: "b", 
        text: "I'm comfortable with numbers", 
        subtext: "Statistics and basic math don't scare me",
        emoji: "📈", 
        color: "#10b981",
        roles: ["data-scientist", "ml-engineer"] 
      },
      { 
        id: "c", 
        text: "Math is okay in small doses", 
        subtext: "I can handle basic statistics but prefer practical applications",
        emoji: "📊", 
        color: "#f59e0b",
        roles: ["data-analyst", "nlp-engineer", "computer-vision"] 
      },
      { 
        id: "d", 
        text: "I prefer visual and practical approaches", 
        subtext: "I'd rather see patterns than calculate them",
        emoji: "🎨", 
        color: "#ec4899",
        roles: ["data-engineer", "bi-developer", "data-visualization", "data-architect"] 
      }
    ]
  },
  {
    id: 4,
    category: "Dream Workplace",
    icon: "🏢",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    question: "What's your ideal work environment?",
    description: "Where do you see yourself thriving?",
    type: "single",
    options: [
      { 
        id: "a", 
        text: "Research lab or university", 
        subtext: "Academic freedom, publishing papers, advancing knowledge",
        emoji: "🔬", 
        color: "#8b5cf6",
        roles: ["ai-researcher", "statistician"] 
      },
      { 
        id: "b", 
        text: "Fast-paced tech startup", 
        subtext: "Building the next big thing, wearing many hats",
        emoji: "🚀", 
        color: "#f59e0b",
        roles: ["ml-engineer", "data-engineer", "nlp-engineer", "computer-vision"] 
      },
      { 
        id: "c", 
        text: "Established corporation", 
        subtext: "Clear processes, good benefits, stable environment",
        emoji: "🏢", 
        color: "#06b6d4",
        roles: ["data-analyst", "bi-developer", "data-architect"] 
      },
      { 
        id: "d", 
        text: "Financial services", 
        subtext: "High-stakes decisions, competitive environment",
        emoji: "💼", 
        color: "#14b8a6",
        roles: ["quant-analyst"] 
      },
      { 
        id: "e", 
        text: "Creative agency or media company", 
        subtext: "Artistic freedom, storytelling, visual impact",
        emoji: "🎭", 
        color: "#d946ef",
        roles: ["data-visualization"] 
      },
      { 
        id: "f", 
        text: "Consulting firm", 
        subtext: "Variety of projects, client interaction, problem-solving",
        emoji: "🤝", 
        color: "#10b981",
        roles: ["data-scientist"] 
      }
    ]
  },
  {
    id: 5,
    category: "Problem-Solving Style",
    icon: "🧩",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    question: "What type of challenges excite you most?",
    description: "Pick up to 3 that make you think 'I want to solve that!'",
    type: "multiple",
    maxSelections: 3,
    options: [
      { 
        id: "a", 
        text: "Predicting future trends", 
        subtext: "Sales forecasts, weather, stock prices",
        emoji: "🔮", 
        color: "#6366f1",
        roles: ["data-scientist", "ml-engineer", "quant-analyst"] 
      },
      { 
        id: "b", 
        text: "Finding hidden patterns", 
        subtext: "Customer behavior, market trends",
        emoji: "🕵️", 
        color: "#06b6d4",
        roles: ["data-analyst", "statistician"] 
      },
      { 
        id: "c", 
        text: "Building robust systems", 
        subtext: "Infrastructure that handles millions of users",
        emoji: "🏗️", 
        color: "#f59e0b",
        roles: ["data-engineer", "data-architect"] 
      },
      { 
        id: "d", 
        text: "Natural language processing", 
        subtext: "Chatbots, translation, text analysis",
        emoji: "🤖", 
        color: "#f97316",
        roles: ["nlp-engineer"] 
      },
      { 
        id: "e", 
        text: "Computer vision tasks", 
        subtext: "Image recognition, medical imaging",
        emoji: "👁️", 
        color: "#8b5cf6",
        roles: ["computer-vision"] 
      },
      { 
        id: "f", 
        text: "Data storytelling", 
        subtext: "Interactive dashboards and reports",
        emoji: "📊", 
        color: "#10b981",
        roles: ["bi-developer", "data-visualization"] 
      }
    ]
  },
  {
    id: 6,
    category: "Tools & Technologies",
    icon: "🛠️",
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    question: "Which tools sound most interesting to learn?",
    description: "Don't worry if you haven't used them - pick what sounds cool!",
    type: "multiple",
    maxSelections: 4,
    options: [
      { 
        id: "a", 
        text: "Python & Jupyter", 
        subtext: "Popular programming for data analysis",
        emoji: "🐍", 
        color: "#6366f1",
        roles: ["data-scientist", "statistician"] 
      },
      { 
        id: "b", 
        text: "SQL & Databases", 
        subtext: "Storing and querying large datasets",
        emoji: "🗄️", 
        color: "#06b6d4",
        roles: ["data-analyst", "bi-developer", "data-architect"] 
      },
      { 
        id: "c", 
        text: "Big Data Tools", 
        subtext: "Spark, Kafka for massive datasets",
        emoji: "⚡", 
        color: "#f59e0b",
        roles: ["data-engineer"] 
      },
      { 
        id: "d", 
        text: "AI Frameworks", 
        subtext: "TensorFlow, PyTorch for machine learning",
        emoji: "🤖", 
        color: "#ec4899",
        roles: ["ml-engineer", "ai-researcher"] 
      },
      { 
        id: "e", 
        text: "Visualization Tools", 
        subtext: "Tableau, D3.js for creating charts",
        emoji: "📊", 
        color: "#10b981",
        roles: ["data-visualization", "bi-developer"] 
      },
      { 
        id: "f", 
        text: "Cloud Platforms", 
        subtext: "AWS, Google Cloud for scalable computing",
        emoji: "☁️", 
        color: "#3b82f6",
        roles: ["data-engineer", "ml-engineer", "data-architect"] 
      }
    ]
  },
  {
    id: 7,
    category: "Career Goals",
    icon: "🎯",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    question: "What are your main career aspirations?",
    description: "Think about where you want to be in 3-5 years",
    type: "multiple",
    maxSelections: 3,
    options: [
      { 
        id: "a", 
        text: "Become an AI expert", 
        subtext: "Leading machine learning projects",
        emoji: "🧠", 
        color: "#8b5cf6",
        roles: ["ai-researcher", "ml-engineer"] 
      },
      { 
        id: "b", 
        text: "Drive business decisions", 
        subtext: "Using data to guide strategy",
        emoji: "📈", 
        color: "#10b981",
        roles: ["data-scientist", "data-analyst"] 
      },
      { 
        id: "c", 
        text: "Build data infrastructure", 
        subtext: "Creating scalable data systems",
        emoji: "🏗️", 
        color: "#f59e0b",
        roles: ["data-engineer", "data-architect"] 
      },
      { 
        id: "d", 
        text: "Work with language AI", 
        subtext: "Natural language processing systems",
        emoji: "💬", 
        color: "#f97316",
        roles: ["nlp-engineer"] 
      },
      { 
        id: "e", 
        text: "Computer vision specialist", 
        subtext: "Image and video analysis systems",
        emoji: "👁️", 
        color: "#6366f1",
        roles: ["computer-vision"] 
      },
      { 
        id: "f", 
        text: "Create visual stories", 
        subtext: "Making data beautiful and accessible",
        emoji: "🎨", 
        color: "#d946ef",
        roles: ["data-visualization"] 
      }
    ]
  },
  {
    id: 8,
    category: "Learning Style",
    icon: "📚",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    question: "How do you prefer to learn new things?",
    description: "Everyone learns differently - what works best for you?",
    type: "single",
    options: [
      { 
        id: "a", 
        text: "Reading research papers", 
        subtext: "Academic articles and theoretical concepts",
        emoji: "📖", 
        color: "#8b5cf6",
        roles: ["ai-researcher", "statistician"] 
      },
      { 
        id: "b", 
        text: "Hands-on coding projects", 
        subtext: "Learning by building and experimenting",
        emoji: "💻", 
        color: "#10b981",
        roles: ["ml-engineer", "data-engineer", "nlp-engineer", "computer-vision"] 
      },
      { 
        id: "c", 
        text: "Real business cases", 
        subtext: "Practical problems with real data",
        emoji: "💼", 
        color: "#06b6d4",
        roles: ["data-scientist", "data-analyst"] 
      },
      { 
        id: "d", 
        text: "Visual design work", 
        subtext: "Creating and designing interfaces",
        emoji: "🎨", 
        color: "#d946ef",
        roles: ["data-visualization", "bi-developer"] 
      },
      { 
        id: "e", 
        text: "Financial modeling", 
        subtext: "Market analysis and risk assessment",
        emoji: "📈", 
        color: "#14b8a6",
        roles: ["quant-analyst"] 
      }
    ]
  },
  {
    id: 9,
    category: "Industry Interest",
    icon: "🌍",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    question: "Which industries excite you most?",
    description: "Where do you want to make an impact? Pick up to 3!",
    type: "multiple",
    maxSelections: 3,
    options: [
      { 
        id: "a", 
        text: "Technology & Software", 
        subtext: "Apps, platforms, and digital products",
        emoji: "💻", 
        color: "#6366f1",
        roles: ["ml-engineer", "data-engineer", "nlp-engineer", "computer-vision"] 
      },
      { 
        id: "b", 
        text: "Healthcare & Medicine", 
        subtext: "Improving patient outcomes with data",
        emoji: "🏥", 
        color: "#ef4444",
        roles: ["data-scientist", "statistician", "ai-researcher"] 
      },
      { 
        id: "c", 
        text: "Finance & Banking", 
        subtext: "Investment strategies and risk analysis",
        emoji: "🏦", 
        color: "#14b8a6",
        roles: ["quant-analyst", "data-analyst"] 
      },
      { 
        id: "d", 
        text: "E-commerce & Retail", 
        subtext: "Customer insights and sales optimization",
        emoji: "🛒", 
        color: "#f59e0b",
        roles: ["data-scientist", "data-analyst", "bi-developer"] 
      },
      { 
        id: "e", 
        text: "Entertainment & Media", 
        subtext: "Content recommendation and analysis",
        emoji: "🎬", 
        color: "#d946ef",
        roles: ["data-visualization", "nlp-engineer", "computer-vision"] 
      },
      { 
        id: "f", 
        text: "Research & Academia", 
        subtext: "Advancing scientific knowledge",
        emoji: "🔬", 
        color: "#8b5cf6",
        roles: ["ai-researcher", "statistician"] 
      }
    ]
  },
  {
    id: 10,
    category: "Work Style",
    icon: "⚖️",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    question: "What's your ideal work-life balance?",
    description: "Different roles have different demands - what works for you?",
    type: "single",
    options: [
      { 
        id: "a", 
        text: "High intensity, high reward", 
        subtext: "Long hours but exciting cutting-edge work",
        emoji: "🔥", 
        color: "#ef4444",
        roles: ["ai-researcher", "ml-engineer", "data-engineer"] 
      },
      { 
        id: "b", 
        text: "Challenging but balanced", 
        subtext: "Engaging projects with reasonable hours",
        emoji: "⚖️", 
        color: "#10b981",
        roles: ["data-scientist", "nlp-engineer", "computer-vision"] 
      },
      { 
        id: "c", 
        text: "Steady and predictable", 
        subtext: "Consistent schedule with clear expectations",
        emoji: "🕘", 
        color: "#06b6d4",
        roles: ["data-analyst", "bi-developer", "statistician"] 
      },
      { 
        id: "d", 
        text: "Flexible and creative", 
        subtext: "Varied projects with creative freedom",
        emoji: "🌈", 
        color: "#d946ef",
        roles: ["data-visualization", "data-architect", "quant-analyst"] 
      }
    ]
  },
  {
    id: 11,
    category: "Team Dynamics",
    icon: "👥",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    question: "How do you prefer to work with others?",
    description: "Every role involves different types of collaboration",
    type: "single",
    options: [
      { 
        id: "a", 
        text: "Independent deep work", 
        subtext: "Solo focus on complex problems",
        emoji: "🧘", 
        color: "#8b5cf6",
        roles: ["ai-researcher", "statistician", "quant-analyst"] 
      },
      { 
        id: "b", 
        text: "Technical team collaboration", 
        subtext: "Working closely with engineers",
        emoji: "👨‍💻", 
        color: "#6366f1",
        roles: ["ml-engineer", "data-engineer", "nlp-engineer", "computer-vision"] 
      },
      { 
        id: "c", 
        text: "Business stakeholder interaction", 
        subtext: "Translating between tech and business",
        emoji: "🤝", 
        color: "#10b981",
        roles: ["data-scientist", "data-analyst", "bi-developer"] 
      },
      { 
        id: "d", 
        text: "User-focused design", 
        subtext: "Creating for end users and clients",
        emoji: "🎨", 
        color: "#d946ef",
        roles: ["data-visualization", "data-architect"] 
      }
    ]
  },
  {
    id: 12,
    category: "Data Comfort",
    icon: "📊",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    question: "How comfortable are you with large datasets?",
    description: "Different roles work with different scales of data",
    type: "single",
    options: [
      { 
        id: "a", 
        text: "Love massive datasets", 
        subtext: "Millions of records don't scare me",
        emoji: "🗃️", 
        color: "#f59e0b",
        roles: ["data-engineer", "data-architect", "ml-engineer"] 
      },
      { 
        id: "b", 
        text: "Comfortable with medium data", 
        subtext: "Thousands to hundreds of thousands of records",
        emoji: "📈", 
        color: "#10b981",
        roles: ["data-scientist", "data-analyst"] 
      },
      { 
        id: "c", 
        text: "Prefer smaller, focused datasets", 
        subtext: "Quality over quantity approach",
        emoji: "🔍", 
        color: "#06b6d4",
        roles: ["statistician", "ai-researcher"] 
      },
      { 
        id: "d", 
        text: "Visual data representation", 
        subtext: "I prefer to see data as charts and graphs",
        emoji: "📊", 
        color: "#d946ef",
        roles: ["data-visualization", "bi-developer"] 
      }
    ]
  }
];

// Role definitions with detailed information
export const roleDefinitions = {
  "data-scientist": {
    title: "Data Scientist",
    slug: "data-scientist",
    icon: "🧠",
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    category: "Machine Learning",
    description: "Build predictive models and extract insights from complex datasets to drive business decisions.",
    keySkills: ["Python", "Statistics", "Machine Learning", "Data Analysis", "Business Intelligence"],
    averageSalary: "$95,000 - $165,000",
    jobGrowth: "22% (Much faster than average)",
    education: "Bachelor's in Statistics, Computer Science, or related field",
    experience: "2-5 years of experience preferred"
  },
  "data-analyst": {
    title: "Data Analyst",
    slug: "data-analyst",
    icon: "📈",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)",
    category: "Business Intelligence",
    description: "Transform raw data into actionable insights through visualization and statistical analysis.",
    keySkills: ["SQL", "Excel", "Tableau", "Statistics", "Business Intelligence"],
    averageSalary: "$60,000 - $90,000",
    jobGrowth: "25% (Much faster than average)",
    education: "Bachelor's in Business, Statistics, or related field",
    experience: "Entry level to 3 years"
  },
  "ml-engineer": {
    title: "ML Engineer",
    slug: "ml-engineer",
    icon: "🤖",
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
    category: "Artificial Intelligence",
    description: "Design, build, and deploy machine learning models at scale in production environments.",
    keySkills: ["Python", "MLOps", "Cloud Platforms", "Model Deployment", "Software Engineering"],
    averageSalary: "$110,000 - $180,000",
    jobGrowth: "22% (Much faster than average)",
    education: "Bachelor's in Computer Science or Engineering",
    experience: "3-7 years of experience preferred"
  },
  "data-engineer": {
    title: "Data Engineer",
    slug: "data-engineer",
    icon: "⚙️",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
    category: "Big Data",
    description: "Design and maintain data infrastructure and pipelines for efficient data processing.",
    keySkills: ["SQL", "Python", "Apache Spark", "ETL", "Cloud Platforms"],
    averageSalary: "$90,000 - $150,000",
    jobGrowth: "35% (Much faster than average)",
    education: "Bachelor's in Computer Science or Engineering",
    experience: "2-5 years of experience preferred"
  },
  "bi-developer": {
    title: "BI Developer",
    slug: "bi-developer",
    icon: "📊",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    category: "Analytics",
    description: "Create business intelligence solutions and dashboards to help organizations make data-driven decisions.",
    keySkills: ["SQL", "Power BI", "Tableau", "Data Modeling", "Business Intelligence"],
    averageSalary: "$70,000 - $110,000",
    jobGrowth: "11% (Faster than average)",
    education: "Bachelor's in Business, IT, or related field",
    experience: "2-4 years of experience preferred"
  },
  "ai-researcher": {
    title: "AI Researcher",
    slug: "ai-researcher",
    icon: "🔍",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    category: "Deep Learning",
    description: "Push the boundaries of artificial intelligence through cutting-edge research and experimentation.",
    keySkills: ["Deep Learning", "Research Methods", "Python", "Mathematics", "Publications"],
    averageSalary: "$120,000 - $200,000",
    jobGrowth: "22% (Much faster than average)",
    education: "PhD in Computer Science, AI, or related field",
    experience: "5+ years of research experience"
  },
  "data-architect": {
    title: "Data Architect",
    slug: "data-architect",
    icon: "🏗️",
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    category: "Database",
    description: "Design and implement complex data systems and architectures for large-scale applications.",
    keySkills: ["System Design", "Database Architecture", "Cloud Platforms", "Data Modeling", "Leadership"],
    averageSalary: "$120,000 - $180,000",
    jobGrowth: "8% (As fast as average)",
    education: "Bachelor's in Computer Science or Engineering",
    experience: "7+ years of experience required"
  },
  "statistician": {
    title: "Statistician",
    slug: "statistician",
    icon: "🧮",
    color: "#ef4444",
    gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    category: "Mathematics",
    description: "Apply statistical theories and methods to solve real-world problems across various industries.",
    keySkills: ["Statistics", "R", "SAS", "Research Design", "Mathematical Modeling"],
    averageSalary: "$75,000 - $120,000",
    jobGrowth: "33% (Much faster than average)",
    education: "Master's in Statistics or Mathematics",
    experience: "2-5 years of experience preferred"
  },
  "data-visualization": {
    title: "Data Visualization Specialist",
    slug: "data-visualization",
    icon: "🎨",
    color: "#d946ef",
    gradient: "linear-gradient(135deg, #d946ef 0%, #a21caf 100%)",
    category: "Design",
    description: "Create compelling visual representations of complex data to communicate insights effectively.",
    keySkills: ["D3.js", "Tableau", "Design Principles", "JavaScript", "Storytelling"],
    averageSalary: "$65,000 - $105,000",
    jobGrowth: "13% (Faster than average)",
    education: "Bachelor's in Design, Computer Science, or related field",
    experience: "2-4 years of experience preferred"
  },
  "quant-analyst": {
    title: "Quantitative Analyst",
    slug: "quant-analyst",
    icon: "💰",
    color: "#14b8a6",
    gradient: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
    category: "Finance",
    description: "Develop complex mathematical models to analyze financial markets and assess risk.",
    keySkills: ["Financial Modeling", "MATLAB", "Python", "Risk Management", "Statistics"],
    averageSalary: "$100,000 - $200,000",
    jobGrowth: "25% (Much faster than average)",
    education: "Master's in Finance, Mathematics, or related field",
    experience: "3-7 years of experience preferred"
  },
  "nlp-engineer": {
    title: "NLP Engineer",
    slug: "nlp-engineer",
    icon: "🗣️",
    color: "#f97316",
    gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    category: "Linguistics",
    description: "Develop systems that can understand, interpret, and generate human language.",
    keySkills: ["NLP", "Transformers", "Python", "Deep Learning", "Linguistics"],
    averageSalary: "$110,000 - $170,000",
    jobGrowth: "22% (Much faster than average)",
    education: "Bachelor's in Computer Science or Linguistics",
    experience: "3-6 years of experience preferred"
  },
  "computer-vision": {
    title: "Computer Vision Engineer",
    slug: "computer-vision",
    icon: "👁️",
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
    category: "Image Processing",
    description: "Build systems that can interpret and understand visual information from the world.",
    keySkills: ["Computer Vision", "CNNs", "OpenCV", "Python", "Deep Learning"],
    averageSalary: "$105,000 - $165,000",
    jobGrowth: "22% (Much faster than average)",
    education: "Bachelor's in Computer Science or Engineering",
    experience: "3-6 years of experience preferred"
  }
};

// Scoring algorithm to calculate role compatibility
export const calculateRoleScores = (answers) => {
  const roleScores = {};
  
  // Initialize all roles with score 0
  Object.keys(roleDefinitions).forEach(role => {
    roleScores[role] = 0;
  });

  // Calculate scores based on answers
  answers.forEach(answer => {
    const question = assessmentQuestions.find(q => q.id === answer.questionId);
    if (!question) return;

    if (question.type === 'single') {
      const option = question.options.find(opt => opt.id === answer.selectedOptions[0]);
      if (option && option.roles) {
        option.roles.forEach(role => {
          roleScores[role] = (roleScores[role] || 0) + 10;
        });
      }
    } else if (question.type === 'multiple') {
      answer.selectedOptions.forEach(optionId => {
        const option = question.options.find(opt => opt.id === optionId);
        if (option && option.roles) {
          option.roles.forEach(role => {
            roleScores[role] = (roleScores[role] || 0) + 5;
          });
        }
      });
    }
  });

  // Convert to array and sort by score
  const sortedRoles = Object.entries(roleScores)
    .map(([role, score]) => ({
      role,
      score,
      percentage: Math.min(100, Math.round((score / 50) * 100)),
      ...roleDefinitions[role]
    }))
    .sort((a, b) => b.score - a.score);

  return sortedRoles;
};

export default {
  assessmentQuestions,
  roleDefinitions,
  calculateRoleScores
};
