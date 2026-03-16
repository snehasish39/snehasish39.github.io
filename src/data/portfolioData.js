// Portfolio Data - Easily editable configuration
export const portfolioData = {
  personal: {
    name: "Snehasish",
    title: "Business Analyst • Software Engineer • Data Strategist",
    tagline: "Transforming complex data into actionable insights. McKinsey-trained problem solver delivering enterprise solutions with measurable ROI.",
    email: "snehasish.kaibartta@gmail.com",
    phone: "+44 7552889879",
    location: "Exeter, UK",
    linkedin: "https://linkedin.com/in/snehasish-kaibartta/",
    github: "https://github.com/snehasish39",
    portfolio: "https://snehasish39.github.io"
  },

  stats: [
    {
      id: 1,
      number: "40%",
      label: "Risk Reduction",
      description: "Security incidents decreased through enterprise transformation",
      icon: "🔒"
    },
    {
      id: 2,
      number: "2K+",
      label: "Hours Saved",
      description: "Annual time savings through process automation",
      icon: "⚡"
    },
    {
      id: 3,
      number: "30%",
      label: "Faster Deploys",
      description: "Deployment acceleration via architecture modernization",
      icon: "🚀"
    },
    {
      id: 4,
      number: "80%+",
      label: "ML Accuracy",
      description: "Prediction accuracy in stock market forecasting model",
      icon: "📈"
    }
  ],

  projects: [
    {
      id: 1,
      title: "Enterprise Security Transformation",
      subtitle: "AWS KMS • Security Architecture",
      description: "Architected AWS KMS encryption solution with custom administrative dashboard, eliminating hardcoded credentials across enterprise applications. Built user-friendly secret management system with role-based access controls.",
      icon: "🔐",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      impact: [
        "40% reduction in security incidents",
        "65% operational efficiency improvement",
        "2,000+ hours saved annually in admin overhead",
        "100% team adoption rate across organization"
      ],
      technologies: ["AWS KMS", "Go", "Security Architecture", "Process Automation", "Role-Based Access Control"],
      metrics: {
        roi: "350%",
        timeline: "6 months",
        teamSize: "5 engineers"
      },
      github: null,
      liveDemo: null,
      featured: true
    },
    {
      id: 2,
      title: "Project Management Platform",
      subtitle: "SaaS • Enterprise Software",
      description: "Centralized platform serving 50+ users across 5 teams with automated task assignments, real-time progress tracking, and intelligent resource allocation for optimal project delivery.",
      icon: "📊",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      impact: [
        "15% improvement in project completion rates",
        "10% reduction in delivery timelines",
        "20% optimization in resource utilization",
        "Enhanced cross-team collaboration and visibility"
      ],
      technologies: ["Go", "REST API", "PostgreSQL", "Real-time Updates", "Dashboard UI"],
      metrics: {
        users: "50+",
        teams: "5",
        uptime: "99.8%"
      },
      github: "https://github.com/snehasish39/PMS-PRJ",
      liveDemo: null,
      featured: true
    },
    {
      id: 3,
      title: "Carbon Credit Marketplace",
      subtitle: "Blockchain • Predictive Analytics • ESG",
      description: "Blockchain-powered marketplace for tokenized carbon credits with integrated predictive analytics for price forecasting, enhanced market transparency, and automated regulatory compliance.",
      icon: "🌍",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      impact: [
        "Enhanced market transparency through blockchain ledger",
        "Predictive price forecasting with ML algorithms",
        "Automated compliance verification and reporting",
        "Data-driven environmental impact measurement"
      ],
      technologies: ["Python", "Blockchain", "Smart Contracts", "Machine Learning", "Predictive Analytics", "ESG"],
      metrics: {
        accuracy: "85%",
        transactions: "Real-time",
        compliance: "Automated"
      },
      github: "https://github.com/snehasish39/Business-Project-Tokenized-Carbon-Credit-Marketplace",
      liveDemo: null,
      featured: true
    },
    {
      id: 4,
      title: "Stock Market Prediction Model",
      subtitle: "Machine Learning • Financial Analytics",
      description: "Advanced predictive analytics model for stock market forecasting using ensemble ML algorithms, comprehensive feature engineering, and historical financial data analysis.",
      icon: "📈",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      impact: [
        "80%+ prediction accuracy on test dataset",
        "Multi-factor feature engineering pipeline",
        "Time-series pattern recognition and analysis",
        "Actionable insights for investment decisions"
      ],
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "Time Series Analysis", "Feature Engineering"],
      metrics: {
        accuracy: "80%+",
        features: "25+",
        models: "Ensemble"
      },
      github: "https://github.com/snehasish39/SMP",
      liveDemo: null,
      featured: true
    },
    {
      id: 5,
      title: "Mobile Security Integration",
      subtitle: "Mobile Security • API Integration",
      description: "Integrated Google Play Integrity API to validate genuine app binaries and user interactions, protecting against tampering, malware, and unauthorized modifications across mobile platforms.",
      icon: "📱",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      impact: [
        "100% authenticity verification of app installations",
        "Protected sensitive business logic from tampering",
        "Safeguarded against screen capture and malware threats",
        "Enhanced user trust and brand reputation"
      ],
      technologies: ["Google Play Integrity API", "Mobile Security", "API Integration", "Android", "iOS"],
      metrics: {
        verification: "100%",
        platforms: "2",
        response: "<100ms"
      },
      github: "https://github.com/snehasish39/DAPP-prj",
      liveDemo: null,
      featured: false
    },
    {
      id: 6,
      title: "Decentralized Asset Management",
      subtitle: "Blockchain • Smart Contracts",
      description: "Designed and implemented decentralized application with Ethereum-based smart contracts to streamline asset management, enhance security, and reduce compliance overhead.",
      icon: "⛓️",
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      impact: [
        "Enhanced security through decentralization",
        "Improved operational efficiency in asset tracking",
        "Reduced compliance complexity and costs",
        "Transparent, immutable audit trail for all transactions"
      ],
      technologies: ["Ethereum", "Solidity", "Smart Contracts", "Web3.js", "Blockchain"],
      metrics: {
        gasOptimization: "40%",
        security: "Audited",
        uptime: "99.9%"
      },
      github: "https://github.com/snehasish39/DAPP-prj",
      liveDemo: null,
      featured: false
    }
  ],

  skills: {
    "Business Analytics": {
      icon: "📊",
      color: "#00f5ff",
      items: [
        "Data Analysis & Visualization",
        "Tableau & Power BI",
        "Google Analytics",
        "Excel Advanced (Pivot, VBA, Power Query)",
        "Predictive Modeling",
        "SQL & Database Querying",
        "Statistical Analysis",
        "A/B Testing & Experimentation"
      ]
    },
    "Software Engineering": {
      icon: "💻",
      color: "#b537ff",
      items: [
        "Python (Pandas, NumPy, Scikit-learn)",
        "Go (Gin, GORM)",
        "JavaScript (React, Node.js)",
        "SQL (PostgreSQL, MySQL)",
        "Git & Version Control",
        "RESTful API Design",
        "AWS (KMS, EC2, S3, Lambda)",
        "Docker & Containerization"
      ]
    },
    "Data Science & ML": {
      icon: "🤖",
      color: "#ff0080",
      items: [
        "Machine Learning (Supervised/Unsupervised)",
        "Time Series Forecasting",
        "Feature Engineering",
        "Model Evaluation & Tuning",
        "TensorFlow & Scikit-learn",
        "Natural Language Processing",
        "Computer Vision Basics",
        "MLOps Fundamentals"
      ]
    },
    "Business Strategy": {
      icon: "💼",
      color: "#ffd700",
      items: [
        "McKinsey Problem-Solving Frameworks",
        "Strategic Analysis & Planning",
        "Process Optimization",
        "Stakeholder Management",
        "Business Case Development",
        "ROI Analysis & Financial Modeling",
        "Change Management",
        "Agile & Scrum Methodologies"
      ]
    },
    "Leadership & Soft Skills": {
      icon: "🎯",
      color: "#00ff88",
      items: [
        "Team Leadership & Mentoring",
        "Cross-functional Collaboration",
        "Strategic Communication",
        "Project Management",
        "Problem-Solving",
        "Presentation & Storytelling",
        "Client Engagement",
        "Conflict Resolution"
      ]
    },
    "Tools & Platforms": {
      icon: "🛠️",
      color: "#0066ff",
      items: [
        "VS Code, IntelliJ IDEA",
        "Jupyter Notebook, Google Colab",
        "Postman, Swagger",
        "GitHub, GitLab",
        "Jira, Confluence",
        "Figma (UI/UX basics)",
        "Slack, Microsoft Teams",
        "Linux/Unix Command Line"
      ]
    }
  },

  experience: [
    {
      id: 1,
      company: "Finnovation Tech Solutions",
      role: "Software Engineer",
      duration: "Aug 2023 - Nov 2024",
      location: "Bangalore, India",
      description: "Led enterprise security transformation and system modernization initiatives",
      highlights: [
        "Architected AWS KMS encryption solution reducing security incidents by 40%",
        "Implemented hexagonal architecture increasing test coverage from 60% to 85%",
        "Integrated Google Play Integrity API for mobile security assurance",
        "Saved 2,000+ hours annually through process automation"
      ],
      technologies: ["Go", "AWS", "Security", "Architecture", "APIs"]
    },
    {
      id: 2,
      company: "Finnovation Tech Solutions",
      role: "Software Engineer Intern",
      duration: "Jan 2023 - July 2023",
      location: "Bangalore, India",
      description: "Developed project management platform and learned enterprise software development",
      highlights: [
        "Built centralized project management system for 50+ users",
        "Improved project completion rates by 15%",
        "Reduced delivery timelines by 10%",
        "Collaborated with cross-functional teams"
      ],
      technologies: ["Go", "REST APIs", "PostgreSQL", "Frontend Development"]
    },
    {
      id: 3,
      company: "National Aluminium Company Ltd (NALCO)",
      role: "Intern",
      duration: "Aug 2022 - Oct 2022",
      location: "Bhubaneswar, India",
      description: "Blockchain development and asset management solutions",
      highlights: [
        "Designed decentralized application with Ethereum smart contracts",
        "Enhanced security and operational efficiency",
        "Reduced compliance overhead",
        "Learned blockchain technology fundamentals"
      ],
      technologies: ["Ethereum", "Solidity", "Smart Contracts", "Web3"]
    }
  ],

  education: [
    {
      id: 1,
      degree: "Master of Science in Business Analytics",
      institution: "University of Exeter",
      duration: "2025 - 2026",
      location: "Exeter, UK",
      highlights: [
        "Pre-admission Academic Excellence Scholarship",
        "Focus on data-driven decision making and strategic analytics",
        "Advanced courses in predictive modeling and ML"
      ]
    },
    {
      id: 2,
      degree: "Bachelor's in Computer Engineering",
      institution: "IIIT Bhubaneswar",
      duration: "2019 - 2023",
      location: "Bhubaneswar, India",
      highlights: [
        "Strong foundation in algorithms, data structures, and software engineering",
        "Leadership roles in university sports teams",
        "UI/UX design contributions to university tech society"
      ]
    }
  ],

  certifications: [
    {
      id: 1,
      name: "McKinsey Career Forward Program",
      issuer: "McKinsey & Company",
      date: "2024",
      description: "Intensive training in consulting frameworks, strategic analysis, and problem-solving",
      credentialUrl: null
    },
    {
      id: 2,
      name: "Google Analytics Certification",
      issuer: "Google",
      date: "2024",
      description: "Website performance tracking, user behavior analysis, and data-driven marketing",
      credentialUrl: null
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Senior Engineering Manager",
      company: "Finnovation Tech Solutions",
      text: "Snehasish's ability to bridge technical implementation with business strategy is exceptional. His security transformation project became a company-wide benchmark.",
      avatar: null,
      rating: 5
    }
  ],

  achievements: [
    "Pre-admission Academic Excellence Scholarship - University of Exeter",
    "McKinsey Career Forward Graduate - Strategic Problem Solving",
    "Led football team to victory over defending champions (1-0)",
    "Delivered 40% security risk reduction in enterprise systems",
    "Automated processes saving 2,000+ hours annually",
    "80%+ accuracy in ML-based stock market predictions"
  ]
};

// AI Chat Responses
export const chatResponses = {
  greetings: [
    "👋 Hi! I'm Snehasish's AI assistant. Ask me anything about his projects, skills, or experience!",
    "🚀 Hello! I can tell you about Snehasish's work in business analytics, software engineering, or specific projects. What interests you?"
  ],
  
  security: "🔐 Snehasish architected an AWS KMS encryption solution that eliminated hardcoded credentials and reduced security incidents by 40%. He built a custom dashboard with role-based access controls, saving over 2,000 hours annually. This project became a company-wide standard for security best practices.",
  
  projectManagement: "📊 He developed a centralized project management platform serving 50+ users across 5 teams. The system automated task assignments and provided real-time progress tracking, improving completion rates by 15% and reducing delivery timelines by 10%. Resource utilization improved by 20%.",
  
  carbonCredit: "🌍 The Carbon Credit Marketplace is a blockchain-powered platform for trading tokenized carbon credits. It integrates predictive analytics for price forecasting and ensures regulatory compliance through smart contracts. Built with Python, blockchain technology, and ML algorithms.",
  
  stockPrediction: "📈 Snehasish developed a stock market prediction model using ensemble ML algorithms achieving 80%+ accuracy. The model uses comprehensive feature engineering (25+ features), time-series analysis, and historical financial data to provide actionable investment insights.",
  
  skills: "⚡ Technical Skills: Python, Go, JavaScript, SQL, AWS, React. Analytics: Tableau, Google Analytics, Excel, Predictive Modeling. Business: McKinsey frameworks, strategic analysis, process optimization, stakeholder management. He bridges technical and business domains uniquely well.",
  
  education: "🎓 MSc Business Analytics at University of Exeter (2025-2026) with Pre-admission Academic Excellence Scholarship. BTech Computer Engineering from IIIT Bhubaneswar (2019-2023). Also a McKinsey Career Forward graduate, trained in consulting frameworks and strategic problem-solving.",
  
  impact: "💼 Key achievements: 40% security risk reduction, 2,000+ hours saved annually, 30% faster deployments, 99.9% system uptime, 80%+ ML accuracy, 20% technical debt reduction. Every project delivers measurable ROI and business value.",
  
  mckinsey: "🏆 As a McKinsey Career Forward graduate, Snehasish has been trained in world-class problem-solving frameworks, client engagement strategies, and structured analytical thinking. He applies these consulting methodologies to deliver data-driven solutions with clear business impact.",
  
  default: "💡 I can tell you about:\n• His enterprise projects (security, project management, blockchain)\n• Technical skills and analytics expertise\n• McKinsey consulting training\n• Education and certifications\n• Specific achievements and impact\n\nWhat would you like to know?"
};
