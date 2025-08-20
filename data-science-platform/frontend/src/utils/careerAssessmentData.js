// Enhanced Career Assessment Questions with Creative UI and Beginner-Friendly Language
export const assessmentQuestions = [
  {
    id: 1,
    category: "Your Interests",
    icon: "🎯",
    question: "What sounds most exciting to you?",
    description: "Think about what kind of work would make you jump out of bed in the morning!",
    type: "single",
    options: [
      { id: "a", text: "🤖 Teaching computers to predict the future (like Netflix recommendations)", emoji: "🤖", roles: ["data-scientist", "ml-engineer", "ai-researcher"] },
      { id: "b", text: "🏗️ Building the behind-the-scenes systems that handle massive amounts of data", emoji: "🏗️", roles: ["data-engineer", "data-architect"] },
      { id: "c", text: "🔍 Being a detective with numbers - finding hidden patterns and insights", emoji: "🔍", roles: ["data-analyst", "bi-developer"] },
      { id: "d", text: "💬 Making computers understand human language (like Siri or ChatGPT)", emoji: "💬", roles: ["nlp-engineer"] },
      { id: "e", text: "👁️ Teaching computers to see and recognize things in photos/videos", emoji: "👁️", roles: ["computer-vision"] },
      { id: "f", text: "📊 Using math and statistics to solve real-world problems", emoji: "📊", roles: ["statistician"] },
      { id: "g", text: "💰 Using data to make smart financial decisions and manage risk", emoji: "💰", roles: ["quant-analyst"] },
      { id: "h", text: "🎨 Creating beautiful charts and graphics that tell compelling stories", emoji: "🎨", roles: ["data-visualization"] }
    ]
  },
  {
    id: 2,
    category: "Tech Comfort Level",
    icon: "💻",
    question: "How comfortable are you with coding and technology?",
    description: "Don't worry - there's a perfect role for every skill level!",
    type: "single",
    options: [
      { id: "a", text: "🚀 I'm a coding wizard - I can build apps and complex systems", emoji: "🚀", roles: ["ml-engineer", "data-engineer", "ai-researcher", "nlp-engineer", "computer-vision"] },
      { id: "b", text: "💪 I'm pretty good - I can write scripts and work with databases", emoji: "💪", roles: ["data-scientist", "data-architect"] },
      { id: "c", text: "🌱 I'm learning - I know some basics but still growing", emoji: "🌱", roles: ["data-analyst", "statistician"] },
      { id: "d", text: "🤔 I'm new to coding but excited to learn!", emoji: "🤔", roles: ["bi-developer", "data-visualization", "quant-analyst"] }
    ]
  },
  {
    id: 3,
    category: "Math & Statistics",
    question: "How comfortable are you with mathematics and statistics?",
    type: "single",
    options: [
      { id: "a", text: "Very comfortable - I love complex mathematical concepts", roles: ["statistician", "quant-analyst", "ai-researcher"] },
      { id: "b", text: "Comfortable - I can handle statistical analysis", roles: ["data-scientist", "ml-engineer"] },
      { id: "c", text: "Somewhat comfortable - Basic statistics is fine", roles: ["data-analyst", "nlp-engineer", "computer-vision"] },
      { id: "d", text: "Not very comfortable - I prefer visual/practical approaches", roles: ["data-engineer", "bi-developer", "data-visualization", "data-architect"] }
    ]
  },
  {
    id: 4,
    category: "Work Environment",
    question: "What type of work environment do you prefer?",
    type: "single",
    options: [
      { id: "a", text: "Research-focused with academic freedom", roles: ["ai-researcher", "statistician"] },
      { id: "b", text: "Fast-paced startup building products", roles: ["ml-engineer", "data-engineer", "nlp-engineer", "computer-vision"] },
      { id: "c", text: "Corporate environment with clear processes", roles: ["data-analyst", "bi-developer", "data-architect"] },
      { id: "d", text: "Financial services with high-stakes decisions", roles: ["quant-analyst"] },
      { id: "e", text: "Creative agency or design-focused company", roles: ["data-visualization"] },
      { id: "f", text: "Consulting or client-facing roles", roles: ["data-scientist"] }
    ]
  },
  {
    id: 5,
    category: "Problem Solving",
    question: "Which type of problems do you enjoy solving most?",
    type: "multiple",
    maxSelections: 3,
    options: [
      { id: "a", text: "Predicting future trends and outcomes", roles: ["data-scientist", "ml-engineer", "quant-analyst"] },
      { id: "b", text: "Finding patterns in large datasets", roles: ["data-analyst", "statistician"] },
      { id: "c", text: "Building scalable systems and infrastructure", roles: ["data-engineer", "data-architect"] },
      { id: "d", text: "Making AI understand human language", roles: ["nlp-engineer"] },
      { id: "e", text: "Teaching computers to see and recognize objects", roles: ["computer-vision"] },
      { id: "f", text: "Creating interactive dashboards and reports", roles: ["bi-developer", "data-visualization"] },
      { id: "g", text: "Advancing the state of AI research", roles: ["ai-researcher"] },
      { id: "h", text: "Optimizing financial portfolios and risk", roles: ["quant-analyst"] }
    ]
  },
  {
    id: 6,
    category: "Tools & Technologies",
    question: "Which tools and technologies interest you most?",
    type: "multiple",
    maxSelections: 4,
    options: [
      { id: "a", text: "Python, R, Jupyter Notebooks", roles: ["data-scientist", "statistician"] },
      { id: "b", text: "SQL, Databases, Data Warehouses", roles: ["data-analyst", "bi-developer", "data-architect"] },
      { id: "c", text: "Apache Spark, Kafka, Airflow", roles: ["data-engineer"] },
      { id: "d", text: "TensorFlow, PyTorch, Scikit-learn", roles: ["ml-engineer", "ai-researcher"] },
      { id: "e", text: "Transformers, BERT, GPT models", roles: ["nlp-engineer"] },
      { id: "f", text: "OpenCV, CNNs, Image Processing", roles: ["computer-vision"] },
      { id: "g", text: "Tableau, Power BI, D3.js", roles: ["data-visualization", "bi-developer"] },
      { id: "h", text: "MATLAB, Quantlib, Bloomberg Terminal", roles: ["quant-analyst"] },
      { id: "i", text: "Cloud platforms (AWS, GCP, Azure)", roles: ["data-engineer", "ml-engineer", "data-architect"] }
    ]
  },
  {
    id: 7,
    category: "Career Goals",
    question: "What are your primary career goals?",
    type: "multiple",
    maxSelections: 3,
    options: [
      { id: "a", text: "Become a technical expert in AI/ML", roles: ["ai-researcher", "ml-engineer"] },
      { id: "b", text: "Lead data-driven business decisions", roles: ["data-scientist", "data-analyst"] },
      { id: "c", text: "Build and manage data infrastructure", roles: ["data-engineer", "data-architect"] },
      { id: "d", text: "Work in cutting-edge NLP research", roles: ["nlp-engineer"] },
      { id: "e", text: "Develop computer vision applications", roles: ["computer-vision"] },
      { id: "f", text: "Create compelling data visualizations", roles: ["data-visualization"] },
      { id: "g", text: "Work in quantitative finance", roles: ["quant-analyst"] },
      { id: "h", text: "Support business intelligence needs", roles: ["bi-developer"] },
      { id: "i", text: "Conduct statistical research", roles: ["statistician"] }
    ]
  },
  {
    id: 8,
    category: "Communication Style",
    question: "How do you prefer to communicate your findings?",
    type: "single",
    options: [
      { id: "a", text: "Technical papers and research publications", roles: ["ai-researcher", "statistician"] },
      { id: "b", text: "Interactive dashboards and visualizations", roles: ["data-visualization", "bi-developer"] },
      { id: "c", text: "Business presentations to stakeholders", roles: ["data-scientist", "data-analyst"] },
      { id: "d", text: "Technical documentation and APIs", roles: ["ml-engineer", "data-engineer", "nlp-engineer", "computer-vision"] },
      { id: "e", text: "Financial models and risk reports", roles: ["quant-analyst"] },
      { id: "f", text: "System architecture diagrams", roles: ["data-architect"] }
    ]
  },
  {
    id: 9,
    category: "Learning Style",
    question: "How do you prefer to learn new concepts?",
    type: "single",
    options: [
      { id: "a", text: "Reading research papers and academic materials", roles: ["ai-researcher", "statistician"] },
      { id: "b", text: "Hands-on coding and building projects", roles: ["ml-engineer", "data-engineer", "nlp-engineer", "computer-vision"] },
      { id: "c", text: "Working with real business data and cases", roles: ["data-scientist", "data-analyst"] },
      { id: "d", text: "Creating visual representations and prototypes", roles: ["data-visualization", "bi-developer"] },
      { id: "e", text: "Financial modeling and quantitative analysis", roles: ["quant-analyst"] },
      { id: "f", text: "System design and architecture patterns", roles: ["data-architect"] }
    ]
  },
  {
    id: 10,
    category: "Industry Interest",
    question: "Which industries interest you most?",
    type: "multiple",
    maxSelections: 3,
    options: [
      { id: "a", text: "Technology and Software", roles: ["ml-engineer", "data-engineer", "nlp-engineer", "computer-vision"] },
      { id: "b", text: "Finance and Banking", roles: ["quant-analyst", "data-analyst"] },
      { id: "c", text: "Healthcare and Pharmaceuticals", roles: ["data-scientist", "statistician", "ai-researcher"] },
      { id: "d", text: "E-commerce and Retail", roles: ["data-scientist", "data-analyst", "bi-developer"] },
      { id: "e", text: "Media and Entertainment", roles: ["data-visualization", "nlp-engineer", "computer-vision"] },
      { id: "f", text: "Consulting and Professional Services", roles: ["data-scientist", "data-analyst"] },
      { id: "g", text: "Research and Academia", roles: ["ai-researcher", "statistician"] },
      { id: "h", text: "Manufacturing and Operations", roles: ["data-engineer", "data-architect"] }
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
      percentage: Math.min(100, Math.round((score / 100) * 100)),
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
