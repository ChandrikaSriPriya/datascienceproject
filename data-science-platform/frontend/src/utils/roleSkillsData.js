const roleSkillsData = {
  'data-scientist': {
    title: 'Data Scientist',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    icon: '🧠',
    description: 'Build predictive models, run experiments, and drive decisions.',
    skills: {
      'Programming & Tools': [
        {
          name: 'Python',
          level: 'Advanced',
          description: 'Core programming language for data science',
          icon: '🐍',
          importance: 'Essential'
        },
        {
          name: 'R',
          level: 'Intermediate',
          description: 'Statistical computing and graphics',
          icon: '📊',
          importance: 'Important'
        },
        {
          name: 'Jupyter Notebooks',
          level: 'Advanced',
          description: 'Interactive development environment',
          icon: '📓',
          importance: 'Essential'
        },
        {
          name: 'Git',
          level: 'Intermediate',
          description: 'Version control for code management',
          icon: '📝',
          importance: 'Important'
        }
      ],
      'Statistics & Mathematics': [
        {
          name: 'Statistical Analysis',
          level: 'Advanced',
          description: 'Hypothesis testing, regression, ANOVA',
          icon: '📈',
          importance: 'Essential'
        },
        {
          name: 'Probability Theory',
          level: 'Advanced',
          description: 'Probability distributions and Bayes theorem',
          icon: '🎲',
          importance: 'Essential'
        },
        {
          name: 'Linear Algebra',
          level: 'Intermediate',
          description: 'Matrices, vectors, eigenvalues',
          icon: '🔢',
          importance: 'Important'
        },
        {
          name: 'Calculus',
          level: 'Intermediate',
          description: 'Derivatives, integrals, optimization',
          icon: '∫',
          importance: 'Important'
        }
      ],
      'Machine Learning': [
        {
          name: 'Supervised Learning',
          level: 'Advanced',
          description: 'Classification and regression algorithms',
          icon: '🎯',
          importance: 'Essential'
        },
        {
          name: 'Unsupervised Learning',
          level: 'Advanced',
          description: 'Clustering and dimensionality reduction',
          icon: '🔍',
          importance: 'Essential'
        },
        {
          name: 'Deep Learning',
          level: 'Intermediate',
          description: 'Neural networks and deep architectures',
          icon: '🧠',
          importance: 'Important'
        },
        {
          name: 'Model Evaluation',
          level: 'Advanced',
          description: 'Cross-validation, metrics, bias-variance',
          icon: '📊',
          importance: 'Essential'
        }
      ],
      'Data Manipulation': [
        {
          name: 'Pandas',
          level: 'Advanced',
          description: 'Data manipulation and analysis',
          icon: '🐼',
          importance: 'Essential'
        },
        {
          name: 'NumPy',
          level: 'Advanced',
          description: 'Numerical computing with Python',
          icon: '🔢',
          importance: 'Essential'
        },
        {
          name: 'SQL',
          level: 'Intermediate',
          description: 'Database querying and management',
          icon: '🗄️',
          importance: 'Important'
        },
        {
          name: 'Data Cleaning',
          level: 'Advanced',
          description: 'Handling missing data and outliers',
          icon: '🧹',
          importance: 'Essential'
        }
      ],
      'Visualization': [
        {
          name: 'Matplotlib',
          level: 'Intermediate',
          description: 'Basic plotting and visualization',
          icon: '📊',
          importance: 'Important'
        },
        {
          name: 'Seaborn',
          level: 'Intermediate',
          description: 'Statistical data visualization',
          icon: '🌊',
          importance: 'Important'
        },
        {
          name: 'Plotly',
          level: 'Intermediate',
          description: 'Interactive visualizations',
          icon: '📈',
          importance: 'Useful'
        }
      ],
      'Business Skills': [
        {
          name: 'A/B Testing',
          level: 'Intermediate',
          description: 'Experimental design and analysis',
          icon: '🧪',
          importance: 'Important'
        },
        {
          name: 'Storytelling',
          level: 'Intermediate',
          description: 'Communicating insights effectively',
          icon: '📖',
          importance: 'Important'
        },
        {
          name: 'Business Acumen',
          level: 'Intermediate',
          description: 'Understanding business context',
          icon: '💼',
          importance: 'Important'
        }
      ]
    }
  },
  'data-analyst': {
    title: 'Data Analyst',
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)',
    icon: '📈',
    description: 'Transform raw data into actionable insights through visualization and statistical analysis.',
    skills: {
      'Data Tools': [
        {
          name: 'SQL',
          level: 'Advanced',
          description: 'Database querying and data extraction',
          icon: '🗄️',
          importance: 'Essential'
        },
        {
          name: 'Excel',
          level: 'Advanced',
          description: 'Spreadsheet analysis and modeling',
          icon: '📊',
          importance: 'Essential'
        },
        {
          name: 'Google Sheets',
          level: 'Intermediate',
          description: 'Cloud-based spreadsheet analysis',
          icon: '☁️',
          importance: 'Important'
        },
        {
          name: 'Python',
          level: 'Intermediate',
          description: 'Data analysis and automation',
          icon: '🐍',
          importance: 'Important'
        }
      ],
      'BI Tools': [
        {
          name: 'Tableau',
          level: 'Advanced',
          description: 'Data visualization and business intelligence',
          icon: '📊',
          importance: 'Essential'
        },
        {
          name: 'Power BI',
          level: 'Advanced',
          description: 'Microsoft business analytics platform',
          icon: '⚡',
          importance: 'Essential'
        },
        {
          name: 'Looker',
          level: 'Intermediate',
          description: 'Modern business intelligence platform',
          icon: '👀',
          importance: 'Important'
        },
        {
          name: 'QlikView',
          level: 'Intermediate',
          description: 'Business intelligence and analytics',
          icon: '🔍',
          importance: 'Useful'
        }
      ],
      'Statistics': [
        {
          name: 'Descriptive Statistics',
          level: 'Advanced',
          description: 'Measures of central tendency and dispersion',
          icon: '📊',
          importance: 'Essential'
        },
        {
          name: 'Inferential Statistics',
          level: 'Intermediate',
          description: 'Hypothesis testing and confidence intervals',
          icon: '🎯',
          importance: 'Important'
        },
        {
          name: 'Correlation Analysis',
          level: 'Intermediate',
          description: 'Understanding relationships between variables',
          icon: '🔗',
          importance: 'Important'
        }
      ],
      'Data Visualization': [
        {
          name: 'Chart Types',
          level: 'Advanced',
          description: 'Bar, line, scatter, pie charts',
          icon: '📈',
          importance: 'Essential'
        },
        {
          name: 'Dashboard Design',
          level: 'Intermediate',
          description: 'Creating effective dashboards',
          icon: '📱',
          importance: 'Important'
        },
        {
          name: 'Color Theory',
          level: 'Intermediate',
          description: 'Effective use of color in visualizations',
          icon: '🎨',
          importance: 'Important'
        }
      ],
      'Business Skills': [
        {
          name: 'KPI Definition',
          level: 'Advanced',
          description: 'Defining and tracking key performance indicators',
          icon: '📊',
          importance: 'Essential'
        },
        {
          name: 'Stakeholder Communication',
          level: 'Advanced',
          description: 'Presenting insights to business stakeholders',
          icon: '💬',
          importance: 'Essential'
        },
        {
          name: 'Requirements Gathering',
          level: 'Intermediate',
          description: 'Understanding business requirements',
          icon: '📋',
          importance: 'Important'
        }
      ]
    }
  },
  'ml-engineer': {
    title: 'ML Engineer',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
    icon: '🤖',
    description: 'Design, build, and deploy machine learning models at scale in production environments.',
    skills: {
      'Programming': [
        {
          name: 'Python',
          level: 'Advanced',
          description: 'Primary language for ML development',
          icon: '🐍',
          importance: 'Essential'
        },
        {
          name: 'Java/Scala',
          level: 'Intermediate',
          description: 'For production systems and Spark',
          icon: '☕',
          importance: 'Important'
        },
        {
          name: 'C++',
          level: 'Intermediate',
          description: 'Performance-critical ML systems',
          icon: '⚡',
          importance: 'Useful'
        }
      ],
      'ML Frameworks': [
        {
          name: 'TensorFlow',
          level: 'Advanced',
          description: 'Deep learning framework by Google',
          icon: '🧠',
          importance: 'Essential'
        },
        {
          name: 'PyTorch',
          level: 'Advanced',
          description: 'Deep learning framework by Facebook',
          icon: '🔥',
          importance: 'Essential'
        },
        {
          name: 'Scikit-learn',
          level: 'Advanced',
          description: 'Traditional ML algorithms',
          icon: '🔧',
          importance: 'Essential'
        },
        {
          name: 'XGBoost',
          level: 'Intermediate',
          description: 'Gradient boosting framework',
          icon: '📈',
          importance: 'Important'
        }
      ],
      'MLOps': [
        {
          name: 'Model Versioning',
          level: 'Advanced',
          description: 'MLflow, DVC for model tracking',
          icon: '📦',
          importance: 'Essential'
        },
        {
          name: 'Model Serving',
          level: 'Advanced',
          description: 'TensorFlow Serving, TorchServe',
          icon: '🚀',
          importance: 'Essential'
        },
        {
          name: 'CI/CD for ML',
          level: 'Intermediate',
          description: 'Automated ML pipeline deployment',
          icon: '🔄',
          importance: 'Important'
        },
        {
          name: 'Model Monitoring',
          level: 'Advanced',
          description: 'Performance and drift monitoring',
          icon: '👁️',
          importance: 'Essential'
        }
      ],
      'Cloud & Infrastructure': [
        {
          name: 'AWS SageMaker',
          level: 'Advanced',
          description: 'Managed ML platform',
          icon: '☁️',
          importance: 'Important'
        },
        {
          name: 'Google Cloud ML',
          level: 'Intermediate',
          description: 'Google Cloud ML services',
          icon: '🌐',
          importance: 'Important'
        },
        {
          name: 'Docker',
          level: 'Advanced',
          description: 'Containerization for ML models',
          icon: '🐳',
          importance: 'Essential'
        },
        {
          name: 'Kubernetes',
          level: 'Intermediate',
          description: 'Orchestration for ML workloads',
          icon: '⚓',
          importance: 'Important'
        }
      ],
      'Data Engineering': [
        {
          name: 'Apache Spark',
          level: 'Intermediate',
          description: 'Distributed computing for big data',
          icon: '⚡',
          importance: 'Important'
        },
        {
          name: 'Apache Airflow',
          level: 'Intermediate',
          description: 'Workflow orchestration',
          icon: '🌪️',
          importance: 'Important'
        },
        {
          name: 'Data Pipelines',
          level: 'Advanced',
          description: 'ETL/ELT pipeline design',
          icon: '🔗',
          importance: 'Essential'
        }
      ]
    }
  },
  'data-engineer': {
    title: 'Data Engineer',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
    icon: '⚙️',
    description: 'Design and maintain data infrastructure and pipelines for efficient data processing.',
    skills: {
      'Programming': [
        {
          name: 'Python',
          level: 'Advanced',
          description: 'Primary language for data engineering',
          icon: '🐍',
          importance: 'Essential'
        },
        {
          name: 'Java',
          level: 'Intermediate',
          description: 'For big data frameworks',
          icon: '☕',
          importance: 'Important'
        },
        {
          name: 'Scala',
          level: 'Intermediate',
          description: 'Apache Spark development',
          icon: '⚡',
          importance: 'Important'
        },
        {
          name: 'SQL',
          level: 'Advanced',
          description: 'Database operations and optimization',
          icon: '🗄️',
          importance: 'Essential'
        }
      ],
      'Big Data Technologies': [
        {
          name: 'Apache Spark',
          level: 'Advanced',
          description: 'Distributed computing framework',
          icon: '⚡',
          importance: 'Essential'
        },
        {
          name: 'Apache Hadoop',
          level: 'Intermediate',
          description: 'Distributed storage and processing',
          icon: '🐘',
          importance: 'Important'
        },
        {
          name: 'Apache Kafka',
          level: 'Advanced',
          description: 'Real-time streaming platform',
          icon: '📡',
          importance: 'Essential'
        },
        {
          name: 'Apache Airflow',
          level: 'Advanced',
          description: 'Workflow orchestration',
          icon: '🌪️',
          importance: 'Essential'
        }
      ],
      'Databases': [
        {
          name: 'PostgreSQL',
          level: 'Advanced',
          description: 'Relational database management',
          icon: '🐘',
          importance: 'Essential'
        },
        {
          name: 'MongoDB',
          level: 'Intermediate',
          description: 'NoSQL document database',
          icon: '🍃',
          importance: 'Important'
        },
        {
          name: 'Redis',
          level: 'Intermediate',
          description: 'In-memory data structure store',
          icon: '🔴',
          importance: 'Important'
        },
        {
          name: 'Elasticsearch',
          level: 'Intermediate',
          description: 'Search and analytics engine',
          icon: '🔍',
          importance: 'Useful'
        }
      ],
      'Cloud Platforms': [
        {
          name: 'AWS',
          level: 'Advanced',
          description: 'Amazon Web Services ecosystem',
          icon: '☁️',
          importance: 'Essential'
        },
        {
          name: 'Google Cloud',
          level: 'Intermediate',
          description: 'Google Cloud Platform services',
          icon: '🌐',
          importance: 'Important'
        },
        {
          name: 'Azure',
          level: 'Intermediate',
          description: 'Microsoft Azure services',
          icon: '🔵',
          importance: 'Important'
        }
      ],
      'Data Modeling': [
        {
          name: 'Dimensional Modeling',
          level: 'Advanced',
          description: 'Star and snowflake schemas',
          icon: '⭐',
          importance: 'Essential'
        },
        {
          name: 'Data Vault',
          level: 'Intermediate',
          description: 'Agile data warehouse modeling',
          icon: '🏦',
          importance: 'Important'
        },
        {
          name: 'Normalization',
          level: 'Advanced',
          description: 'Database normalization techniques',
          icon: '📐',
          importance: 'Essential'
        }
      ]
    }
  },
  'bi-developer': {
    title: 'BI Developer',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    icon: '📊',
    description: 'Create business intelligence solutions and dashboards to help organizations make data-driven decisions.',
    skills: {
      'BI Tools': [
        {
          name: 'Power BI',
          level: 'Advanced',
          description: 'Microsoft business analytics platform',
          icon: '⚡',
          importance: 'Essential'
        },
        {
          name: 'Tableau',
          level: 'Advanced',
          description: 'Data visualization and business intelligence',
          icon: '📊',
          importance: 'Essential'
        },
        {
          name: 'QlikView',
          level: 'Intermediate',
          description: 'Business intelligence and analytics',
          icon: '🔍',
          importance: 'Important'
        },
        {
          name: 'Looker',
          level: 'Intermediate',
          description: 'Modern business intelligence platform',
          icon: '👀',
          importance: 'Important'
        }
      ],
      'Data Modeling': [
        {
          name: 'Dimensional Modeling',
          level: 'Advanced',
          description: 'Star and snowflake schemas',
          icon: '⭐',
          importance: 'Essential'
        },
        {
          name: 'Data Vault',
          level: 'Intermediate',
          description: 'Agile data warehouse modeling',
          icon: '🏦',
          importance: 'Important'
        },
        {
          name: 'Kimball Methodology',
          level: 'Advanced',
          description: 'Data warehouse design principles',
          icon: '📐',
          importance: 'Important'
        }
      ],
      'Programming': [
        {
          name: 'SQL',
          level: 'Advanced',
          description: 'Database querying and optimization',
          icon: '🗄️',
          importance: 'Essential'
        },
        {
          name: 'DAX',
          level: 'Advanced',
          description: 'Data Analysis Expressions for Power BI',
          icon: '📈',
          importance: 'Essential'
        },
        {
          name: 'M',
          level: 'Intermediate',
          description: 'Power Query formula language',
          icon: '🔧',
          importance: 'Important'
        },
        {
          name: 'Python',
          level: 'Intermediate',
          description: 'Data processing and automation',
          icon: '🐍',
          importance: 'Important'
        }
      ],
      'Database Technologies': [
        {
          name: 'SQL Server',
          level: 'Advanced',
          description: 'Microsoft SQL Server administration',
          icon: '🗄️',
          importance: 'Essential'
        },
        {
          name: 'Azure SQL',
          level: 'Intermediate',
          description: 'Cloud-based SQL database',
          icon: '☁️',
          importance: 'Important'
        },
        {
          name: 'Snowflake',
          level: 'Intermediate',
          description: 'Cloud data platform',
          icon: '❄️',
          importance: 'Important'
        }
      ]
    }
  },
  'ai-researcher': {
    title: 'AI Researcher',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    icon: '🔍',
    description: 'Push the boundaries of artificial intelligence through cutting-edge research and experimentation.',
    skills: {
      'Deep Learning': [
        {
          name: 'Neural Networks',
          level: 'Advanced',
          description: 'Deep neural network architectures',
          icon: '🧠',
          importance: 'Essential'
        },
        {
          name: 'Transformers',
          level: 'Advanced',
          description: 'Attention mechanisms and transformer models',
          icon: '⚡',
          importance: 'Essential'
        },
        {
          name: 'Computer Vision',
          level: 'Advanced',
          description: 'Image and video processing',
          icon: '👁️',
          importance: 'Important'
        },
        {
          name: 'NLP',
          level: 'Advanced',
          description: 'Natural language processing',
          icon: '💬',
          importance: 'Important'
        }
      ],
      'Research Methods': [
        {
          name: 'Experimental Design',
          level: 'Advanced',
          description: 'Designing rigorous experiments',
          icon: '🧪',
          importance: 'Essential'
        },
        {
          name: 'Statistical Analysis',
          level: 'Advanced',
          description: 'Advanced statistical methods',
          icon: '📊',
          importance: 'Essential'
        },
        {
          name: 'Literature Review',
          level: 'Advanced',
          description: 'Research paper analysis',
          icon: '📚',
          importance: 'Important'
        }
      ],
      'Programming': [
        {
          name: 'Python',
          level: 'Advanced',
          description: 'Primary research language',
          icon: '🐍',
          importance: 'Essential'
        },
        {
          name: 'PyTorch',
          level: 'Advanced',
          description: 'Deep learning framework',
          icon: '🔥',
          importance: 'Essential'
        },
        {
          name: 'TensorFlow',
          level: 'Advanced',
          description: 'Deep learning framework',
          icon: '🧠',
          importance: 'Important'
        },
        {
          name: 'JAX',
          level: 'Intermediate',
          description: 'High-performance ML framework',
          icon: '⚡',
          importance: 'Useful'
        }
      ],
      'Mathematics': [
        {
          name: 'Linear Algebra',
          level: 'Advanced',
          description: 'Matrix operations and vector spaces',
          icon: '🔢',
          importance: 'Essential'
        },
        {
          name: 'Calculus',
          level: 'Advanced',
          description: 'Multivariate calculus and optimization',
          icon: '∫',
          importance: 'Essential'
        },
        {
          name: 'Probability Theory',
          level: 'Advanced',
          description: 'Advanced probability concepts',
          icon: '🎲',
          importance: 'Important'
        }
      ]
    }
  },
  'data-architect': {
    title: 'Data Architect',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    icon: '🏗️',
    description: 'Design and implement complex data systems and architectures for large-scale applications.',
    skills: {
      'Architecture Design': [
        {
          name: 'System Design',
          level: 'Advanced',
          description: 'Large-scale system architecture',
          icon: '🏗️',
          importance: 'Essential'
        },
        {
          name: 'Data Modeling',
          level: 'Advanced',
          description: 'Conceptual and logical data modeling',
          icon: '📐',
          importance: 'Essential'
        },
        {
          name: 'Microservices',
          level: 'Advanced',
          description: 'Microservices architecture',
          icon: '🔧',
          importance: 'Important'
        }
      ],
      'Database Technologies': [
        {
          name: 'Relational Databases',
          level: 'Advanced',
          description: 'SQL databases and optimization',
          icon: '🗄️',
          importance: 'Essential'
        },
        {
          name: 'NoSQL Databases',
          level: 'Advanced',
          description: 'Document, key-value, graph databases',
          icon: '📄',
          importance: 'Important'
        },
        {
          name: 'Data Warehousing',
          level: 'Advanced',
          description: 'Data warehouse design',
          icon: '🏢',
          importance: 'Essential'
        }
      ],
      'Cloud Platforms': [
        {
          name: 'AWS',
          level: 'Advanced',
          description: 'Amazon Web Services',
          icon: '☁️',
          importance: 'Essential'
        },
        {
          name: 'Azure',
          level: 'Intermediate',
          description: 'Microsoft Azure',
          icon: '🔵',
          importance: 'Important'
        },
        {
          name: 'Google Cloud',
          level: 'Intermediate',
          description: 'Google Cloud Platform',
          icon: '🌐',
          importance: 'Important'
        }
      ],
      'Programming': [
        {
          name: 'SQL',
          level: 'Advanced',
          description: 'Database programming',
          icon: '🗄️',
          importance: 'Essential'
        },
        {
          name: 'Python',
          level: 'Intermediate',
          description: 'Scripting and automation',
          icon: '🐍',
          importance: 'Important'
        },
        {
          name: 'Java',
          level: 'Intermediate',
          description: 'Enterprise applications',
          icon: '☕',
          importance: 'Useful'
        }
      ]
    }
  },
  'statistician': {
    title: 'Statistician',
    color: '#ef4444',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    icon: '🧮',
    description: 'Apply statistical theories and methods to solve real-world problems across various industries.',
    skills: {
      'Statistical Methods': [
        {
          name: 'Inferential Statistics',
          level: 'Advanced',
          description: 'Hypothesis testing and confidence intervals',
          icon: '📊',
          importance: 'Essential'
        },
        {
          name: 'Regression Analysis',
          level: 'Advanced',
          description: 'Linear and non-linear regression',
          icon: '📈',
          importance: 'Essential'
        },
        {
          name: 'Time Series Analysis',
          level: 'Advanced',
          description: 'Temporal data analysis',
          icon: '⏰',
          importance: 'Important'
        },
        {
          name: 'Multivariate Analysis',
          level: 'Advanced',
          description: 'Multiple variable analysis',
          icon: '🔢',
          importance: 'Important'
        }
      ],
      'Programming': [
        {
          name: 'R',
          level: 'Advanced',
          description: 'Statistical computing',
          icon: '📊',
          importance: 'Essential'
        },
        {
          name: 'Python',
          level: 'Advanced',
          description: 'Statistical analysis with Python',
          icon: '🐍',
          importance: 'Essential'
        },
        {
          name: 'SAS',
          level: 'Intermediate',
          description: 'Statistical analysis software',
          icon: '📈',
          importance: 'Important'
        },
        {
          name: 'SPSS',
          level: 'Intermediate',
          description: 'Statistical package for social sciences',
          icon: '📊',
          importance: 'Useful'
        }
      ],
      'Mathematics': [
        {
          name: 'Probability Theory',
          level: 'Advanced',
          description: 'Advanced probability concepts',
          icon: '🎲',
          importance: 'Essential'
        },
        {
          name: 'Mathematical Statistics',
          level: 'Advanced',
          description: 'Theoretical statistics',
          icon: '📐',
          importance: 'Essential'
        },
        {
          name: 'Linear Algebra',
          level: 'Advanced',
          description: 'Matrix operations',
          icon: '🔢',
          importance: 'Important'
        }
      ],
      'Research Methods': [
        {
          name: 'Experimental Design',
          level: 'Advanced',
          description: 'Design of experiments',
          icon: '🧪',
          importance: 'Essential'
        },
        {
          name: 'Survey Design',
          level: 'Intermediate',
          description: 'Questionnaire and survey design',
          icon: '📋',
          importance: 'Important'
        },
        {
          name: 'Sampling Methods',
          level: 'Advanced',
          description: 'Statistical sampling techniques',
          icon: '🎯',
          importance: 'Important'
        }
      ]
    }
  },
  'data-visualization': {
    title: 'Data Visualization',
    color: '#d946ef',
    gradient: 'linear-gradient(135deg, #d946ef 0%, #a21caf 100%)',
    icon: '🎨',
    description: 'Create compelling visual representations of complex data to communicate insights effectively.',
    skills: {
      'Visualization Tools': [
        {
          name: 'Tableau',
          level: 'Advanced',
          description: 'Interactive data visualization',
          icon: '📊',
          importance: 'Essential'
        },
        {
          name: 'D3.js',
          level: 'Advanced',
          description: 'Custom web-based visualizations',
          icon: '🌐',
          importance: 'Essential'
        },
        {
          name: 'Power BI',
          level: 'Intermediate',
          description: 'Business intelligence visualization',
          icon: '⚡',
          importance: 'Important'
        },
        {
          name: 'Plotly',
          level: 'Intermediate',
          description: 'Interactive Python visualizations',
          icon: '📈',
          importance: 'Important'
        }
      ],
      'Design Principles': [
        {
          name: 'Color Theory',
          level: 'Advanced',
          description: 'Effective use of color in visualizations',
          icon: '🎨',
          importance: 'Essential'
        },
        {
          name: 'Typography',
          level: 'Intermediate',
          description: 'Text and font design',
          icon: '📝',
          importance: 'Important'
        },
        {
          name: 'Layout Design',
          level: 'Advanced',
          description: 'Visual composition and layout',
          icon: '📐',
          importance: 'Important'
        },
        {
          name: 'User Experience',
          level: 'Intermediate',
          description: 'UX principles for data visualization',
          icon: '👤',
          importance: 'Important'
        }
      ],
      'Programming': [
        {
          name: 'JavaScript',
          level: 'Advanced',
          description: 'Web-based visualizations',
          icon: '🌐',
          importance: 'Essential'
        },
        {
          name: 'Python',
          level: 'Intermediate',
          description: 'Data visualization libraries',
          icon: '🐍',
          importance: 'Important'
        },
        {
          name: 'R',
          level: 'Intermediate',
          description: 'Statistical visualizations',
          icon: '📊',
          importance: 'Important'
        }
      ],
      'Data Skills': [
        {
          name: 'Data Cleaning',
          level: 'Advanced',
          description: 'Preparing data for visualization',
          icon: '🧹',
          importance: 'Essential'
        },
        {
          name: 'SQL',
          level: 'Intermediate',
          description: 'Data querying for visualization',
          icon: '🗄️',
          importance: 'Important'
        },
        {
          name: 'Statistical Concepts',
          level: 'Intermediate',
          description: 'Understanding data distributions',
          icon: '📊',
          importance: 'Important'
        }
      ]
    }
  },
  'quant-analyst': {
    title: 'Quantitative Analyst',
    color: '#14b8a6',
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
    icon: '💰',
    description: 'Develop complex mathematical models to analyze financial markets and assess risk.',
    skills: {
      'Financial Modeling': [
        {
          name: 'Risk Models',
          level: 'Advanced',
          description: 'Value at Risk and risk assessment',
          icon: '⚠️',
          importance: 'Essential'
        },
        {
          name: 'Pricing Models',
          level: 'Advanced',
          description: 'Option pricing and derivatives',
          icon: '💱',
          importance: 'Essential'
        },
        {
          name: 'Portfolio Theory',
          level: 'Advanced',
          description: 'Modern portfolio theory',
          icon: '📊',
          importance: 'Important'
        }
      ],
      'Programming': [
        {
          name: 'Python',
          level: 'Advanced',
          description: 'Financial analysis and modeling',
          icon: '🐍',
          importance: 'Essential'
        },
        {
          name: 'R',
          level: 'Advanced',
          description: 'Statistical analysis for finance',
          icon: '📊',
          importance: 'Essential'
        },
        {
          name: 'MATLAB',
          level: 'Intermediate',
          description: 'Numerical computing',
          icon: '🔢',
          importance: 'Important'
        },
        {
          name: 'C++',
          level: 'Intermediate',
          description: 'High-frequency trading systems',
          icon: '⚡',
          importance: 'Useful'
        }
      ],
      'Mathematics': [
        {
          name: 'Stochastic Calculus',
          level: 'Advanced',
          description: 'Random processes and calculus',
          icon: '🎲',
          importance: 'Essential'
        },
        {
          name: 'Linear Algebra',
          level: 'Advanced',
          description: 'Matrix operations for finance',
          icon: '🔢',
          importance: 'Essential'
        },
        {
          name: 'Optimization',
          level: 'Advanced',
          description: 'Mathematical optimization',
          icon: '📈',
          importance: 'Important'
        }
      ],
      'Financial Knowledge': [
        {
          name: 'Financial Markets',
          level: 'Advanced',
          description: 'Understanding market mechanics',
          icon: '📈',
          importance: 'Essential'
        },
        {
          name: 'Derivatives',
          level: 'Advanced',
          description: 'Options, futures, and swaps',
          icon: '💱',
          importance: 'Essential'
        },
        {
          name: 'Fixed Income',
          level: 'Intermediate',
          description: 'Bonds and interest rate products',
          icon: '📋',
          importance: 'Important'
        }
      ]
    }
  },
  'nlp-engineer': {
    title: 'NLP Engineer',
    color: '#f97316',
    gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    icon: '🗣️',
    description: 'Develop systems that can understand, interpret, and generate human language.',
    skills: {
      'NLP Techniques': [
        {
          name: 'Text Processing',
          level: 'Advanced',
          description: 'Tokenization, stemming, lemmatization',
          icon: '📝',
          importance: 'Essential'
        },
        {
          name: 'Language Models',
          level: 'Advanced',
          description: 'BERT, GPT, and transformer models',
          icon: '🧠',
          importance: 'Essential'
        },
        {
          name: 'Named Entity Recognition',
          level: 'Advanced',
          description: 'Entity extraction and classification',
          icon: '🏷️',
          importance: 'Important'
        },
        {
          name: 'Sentiment Analysis',
          level: 'Intermediate',
          description: 'Opinion mining and sentiment detection',
          icon: '😊',
          importance: 'Important'
        }
      ],
      'Programming': [
        {
          name: 'Python',
          level: 'Advanced',
          description: 'Primary NLP development language',
          icon: '🐍',
          importance: 'Essential'
        },
        {
          name: 'PyTorch',
          level: 'Advanced',
          description: 'Deep learning for NLP',
          icon: '🔥',
          importance: 'Essential'
        },
        {
          name: 'TensorFlow',
          level: 'Intermediate',
          description: 'Deep learning framework',
          icon: '🧠',
          importance: 'Important'
        },
        {
          name: 'Hugging Face',
          level: 'Advanced',
          description: 'Transformers library',
          icon: '🤗',
          importance: 'Essential'
        }
      ],
      'Linguistics': [
        {
          name: 'Computational Linguistics',
          level: 'Advanced',
          description: 'Linguistic theory and computation',
          icon: '🔤',
          importance: 'Important'
        },
        {
          name: 'Syntax Analysis',
          level: 'Intermediate',
          description: 'Parsing and syntactic structure',
          icon: '🌳',
          importance: 'Important'
        },
        {
          name: 'Semantic Analysis',
          level: 'Intermediate',
          description: 'Meaning and context understanding',
          icon: '💭',
          importance: 'Important'
        }
      ],
      'Machine Learning': [
        {
          name: 'Sequence Models',
          level: 'Advanced',
          description: 'RNNs, LSTMs, and attention',
          icon: '🔄',
          importance: 'Essential'
        },
        {
          name: 'Transfer Learning',
          level: 'Advanced',
          description: 'Pre-trained models and fine-tuning',
          icon: '🔄',
          importance: 'Essential'
        },
        {
          name: 'Evaluation Metrics',
          level: 'Intermediate',
          description: 'BLEU, ROUGE, and other NLP metrics',
          icon: '📊',
          importance: 'Important'
        }
      ]
    }
  },
  'computer-vision': {
    title: 'Computer Vision',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
    icon: '👁️',
    description: 'Build systems that can interpret and understand visual information from the world.',
    skills: {
      'Computer Vision': [
        {
          name: 'Image Processing',
          level: 'Advanced',
          description: 'Digital image manipulation and analysis',
          icon: '🖼️',
          importance: 'Essential'
        },
        {
          name: 'Object Detection',
          level: 'Advanced',
          description: 'YOLO, R-CNN, and detection models',
          icon: '🎯',
          importance: 'Essential'
        },
        {
          name: 'Image Segmentation',
          level: 'Advanced',
          description: 'Semantic and instance segmentation',
          icon: '✂️',
          importance: 'Important'
        },
        {
          name: 'Feature Extraction',
          level: 'Advanced',
          description: 'SIFT, SURF, and deep features',
          icon: '🔍',
          importance: 'Important'
        }
      ],
      'Deep Learning': [
        {
          name: 'Convolutional Neural Networks',
          level: 'Advanced',
          description: 'CNN architectures for vision',
          icon: '🧠',
          importance: 'Essential'
        },
        {
          name: 'Transfer Learning',
          level: 'Advanced',
          description: 'Pre-trained vision models',
          icon: '🔄',
          importance: 'Essential'
        },
        {
          name: 'PyTorch',
          level: 'Advanced',
          description: 'Deep learning framework',
          icon: '🔥',
          importance: 'Essential'
        },
        {
          name: 'TensorFlow',
          level: 'Intermediate',
          description: 'Deep learning framework',
          icon: '🧠',
          importance: 'Important'
        }
      ],
      'Programming': [
        {
          name: 'Python',
          level: 'Advanced',
          description: 'Primary CV development language',
          icon: '🐍',
          importance: 'Essential'
        },
        {
          name: 'OpenCV',
          level: 'Advanced',
          description: 'Computer vision library',
          icon: '👁️',
          importance: 'Essential'
        },
        {
          name: 'C++',
          level: 'Intermediate',
          description: 'Performance-critical CV applications',
          icon: '⚡',
          importance: 'Useful'
        }
      ],
      'Mathematics': [
        {
          name: 'Linear Algebra',
          level: 'Advanced',
          description: 'Matrix operations for vision',
          icon: '🔢',
          importance: 'Essential'
        },
        {
          name: 'Geometry',
          level: 'Intermediate',
          description: 'Geometric transformations',
          icon: '📐',
          importance: 'Important'
        },
        {
          name: 'Signal Processing',
          level: 'Intermediate',
          description: 'Digital signal processing',
          icon: '📡',
          importance: 'Important'
        }
      ]
    }
  }
};

export default roleSkillsData;