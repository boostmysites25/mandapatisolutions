export const allServices = [
  {
    id: 1,
    title: "AI Development",
    image: require("../assets/images/services/ai.webp"),
    desc: "Transform your business with intelligent AI solutions including machine learning, automation, predictive analytics, and custom AI applications that drive growth.",
  },
  {
    id: 2,
    title: "Mobile Application Development",
    image: require("../assets/images/services/app-development.webp"),
    desc: "Create powerful, user-friendly mobile apps for iOS and Android that engage customers and drive business success with cutting-edge technology.",
  },
  {
    id: 3,
    title: "Web Full-Stack Development",
    image: require("../assets/images/services/web-development.webp"),
    desc: "Build scalable, high-performance web applications with modern full-stack solutions that deliver exceptional user experiences and business results.",
  },
  {
    id: 4,
    title: "Digital Marketing",
    image: require("../assets/images/services/digitalmarketing.webp"),
    desc: "Boost your online presence with strategic digital marketing campaigns that increase visibility, engagement, and conversions across all platforms.",
  },
  {
    id: 5,
    title: "Online Store",
    image: require("../assets/images/services/onlinestore.webp"),
    desc: "Launch a complete e-commerce solution with secure payment processing, inventory management, and mobile-responsive design that drives sales.",
  },
  {
    id: 6,
    title: "Software Training",
    image: require("../assets/images/services/data-analytics.webp"),
    desc: "Upskill your team with comprehensive software training programs covering modern technologies, frameworks, and best practices for lasting success.",
  },
];

// Web Development Services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "Custom Website Design",
    image: require("../assets/images/landing page/Custom Website Design.webp"),
    description:
      "We design visually stunning, user-friendly websites that reflect your brand. Our responsive designs ensure a seamless experience across all devices.",
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    image: require("../assets/images/landing page/E-commerce Solutions.webp"),
    description:
      "We build secure, high-performing e-commerce platforms with seamless payment integration, boosting sales and enhancing user experience.",
  },
  {
    id: 3,
    title: "Content Management Systems",
    image: require("../assets/images/landing page/Content Management Systems.webp"),
    description:
      "Our CMS solutions allow easy website management with platforms like WordPress, Joomla, and Drupal, requiring no technical expertise.",
  },
  {
    id: 4,
    title: "API Integration",
    image: require("../assets/images/landing page/API Integration.webp"),
    description:
      "We connect your website to third-party tools, ensuring smooth API integrations for payment gateways, CRM systems, and other services.",
  },
  {
    id: 5,
    title: "Website Maintenance & Support",
    image: require("../assets/images/landing page/Website Maintenance & Support.webp"),
    description:
      "We provide updates, security enhancements, and performance monitoring to keep your website secure, fast, and up to date.",
  },
];

// App Development Services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    image: require("../assets/images/landing page/iOS App Development.webp"),
    description:
      "We create high-performance iOS apps optimized for iPhones, iPads, and Apple Watch, ensuring seamless user experiences.",
  },
  {
    id: 2,
    title: "Android App Development",
    image: require("../assets/images/landing page/Android App Development.webp"),
    description:
      "Our Android apps are built for smooth performance, scalability, and user engagement across all Android devices.",
  },
  {
    id: 3,
    title: "Cross-Platform App Development",
    image: require("../assets/images/landing page/Cross-Platform App Development.webp"),
    description:
      "Using React Native and Flutter, we develop apps that run seamlessly on both iOS and Android, saving time and cost.",
  },
  {
    id: 4,
    title: "UI/UX Design for Apps",
    image: require("../assets/images/landing page/UIUX Design for Apps.webp"),
    description:
      "We craft intuitive, visually appealing UI/UX designs to enhance user engagement and ensure seamless app navigation.",
  },
  {
    id: 5,
    title: "App Testing & Deployment",
    image: require("../assets/images/landing page/App Testing & Deployment.webp"),
    description:
      "We rigorously test apps for performance, usability, and security, ensuring a smooth launch on the App Store and Google Play.",
  },
];

// Service details page content
export const serviceDetailsList = [
  {
    id: 1,
    title: "AI Development",
    shortDescription: "Intelligent automation and machine learning solutions",
    heroImage: "/images/services/ai.jpg",
    overview:
      "Transform your business with cutting-edge AI solutions that automate processes, enhance decision-making, and drive growth. Our AI development services leverage machine learning, deep learning, and intelligent automation to solve complex business challenges and unlock new opportunities.",
    features: [
      "Machine learning model development",
      "Natural language processing (NLP)",
      "Computer vision and image recognition",
      "Predictive analytics and forecasting",
      "Intelligent chatbots and virtual assistants",
      "Recommendation systems",
      "Process automation",
      "Custom AI applications",
    ],
    technologies: [
      {
        name: "Frameworks",
        items: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn"],
      },
      { name: "Languages", items: ["Python", "R", "Julia"] },
      { name: "NLP", items: ["GPT", "BERT", "spaCy", "NLTK"] },
      { name: "Vision", items: ["OpenCV", "YOLO", "Detectron2"] },
    ],
    process: [
      {
        step: 1,
        title: "Consultation",
        description: "Identify AI opportunities and use cases",
      },
      {
        step: 2,
        title: "Data Preparation",
        description: "Collect and prepare training datasets",
      },
      {
        step: 3,
        title: "Model Development",
        description: "Build and train AI models",
      },
      {
        step: 4,
        title: "Testing & Validation",
        description: "Quality assurance and performance testing",
      },
      {
        step: 5,
        title: "Deployment",
        description: "Integration and production deployment",
      },
      {
        step: 6,
        title: "Optimization",
        description: "Continuous improvement and monitoring",
      },
    ],
    benefits: [
      "Increased operational efficiency",
      "Enhanced decision-making capabilities",
      "Reduced manual workload",
      "Improved customer experiences",
      "Competitive advantage through innovation",
    ],
  },
  {
    id: 2,
    title: "Mobile Application Development",
    shortDescription: "Native and cross-platform mobile apps",
    heroImage: "/images/services/app-dev.jpg",
    overview:
      "Create powerful, user-friendly mobile applications for iOS and Android that engage customers and drive business success. Our mobile app development services combine native and cross-platform solutions to deliver exceptional user experiences and measurable results.",
    features: [
      "Native iOS and Android development",
      "Cross-platform app development",
      "Responsive UI/UX design",
      "Offline functionality",
      "Push notifications",
      "In-app purchases and payments",
      "Social media integration",
      "App store optimization",
    ],
    technologies: [
      { name: "Native", items: ["Swift", "Kotlin", "Java"] },
      { name: "Cross-Platform", items: ["React Native", "Flutter", "Ionic"] },
      { name: "Backend", items: ["Firebase", "AWS Amplify", "GraphQL"] },
      { name: "Testing", items: ["Jest", "Appium", "Detox"] },
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description: "Requirements gathering and planning",
      },
      {
        step: 2,
        title: "Design",
        description: "UI/UX design and prototyping",
      },
      { step: 3, title: "Development", description: "Feature implementation" },
      { step: 4, title: "Testing", description: "QA on multiple devices" },
      { step: 5, title: "Launch", description: "App store deployment" },
      { step: 6, title: "Support", description: "Ongoing maintenance and updates" },
    ],
    benefits: [
      "Increased customer engagement",
      "Better brand visibility",
      "Direct customer communication",
      "Revenue generation opportunities",
      "Competitive market presence",
    ],
  },
  {
    id: 3,
    title: "Web Full-Stack Development",
    shortDescription: "End-to-end web solutions",
    heroImage: "/images/services/web-dev.jpg",
    overview:
      "Build scalable, high-performance web applications with modern full-stack solutions that deliver exceptional user experiences and business results. Our comprehensive web development services cover everything from frontend design to backend architecture and deployment.",
    features: [
      "Custom web application development",
      "Responsive and mobile-first design",
      "RESTful API development",
      "Database design and optimization",
      "Cloud deployment and DevOps",
      "Progressive Web Apps (PWAs)",
      "E-commerce solutions",
      "Content Management Systems",
    ],
    technologies: [
      {
        name: "Frontend",
        items: ["React.js", "Next.js", "Vue.js", "Angular", "Tailwind CSS"],
      },
      {
        name: "Backend",
        items: ["Node.js", "Express", "Django", "Laravel"],
      },
      {
        name: "Databases",
        items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
      },
      {
        name: "DevOps",
        items: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description: "Requirement analysis and planning",
      },
      {
        step: 2,
        title: "Design",
        description: "UI/UX design and architecture",
      },
      {
        step: 3,
        title: "Development",
        description: "Agile implementation with sprints",
      },
      {
        step: 4,
        title: "Testing",
        description: "Quality assurance and user testing",
      },
      {
        step: 5,
        title: "Deployment",
        description: "Launch and performance optimization",
      },
      {
        step: 6,
        title: "Maintenance",
        description: "Ongoing support and updates",
      },
    ],
    benefits: [
      "Comprehensive solution from one provider",
      "Faster time-to-market",
      "Better performance and scalability",
      "Consistent code quality",
      "Future-ready architecture",
    ],
  },
  {
    id: 4,
    title: "Digital Marketing",
    shortDescription: "Strategic online marketing campaigns",
    heroImage: "/images/services/digitalmarketing.jpg",
    overview:
      "Boost your online presence with strategic digital marketing campaigns that increase visibility, engagement, and conversions. Our data-driven approach combines creativity with analytics to deliver measurable results across all digital platforms.",
    features: [
      "Social media marketing",
      "Search Engine Optimization (SEO)",
      "Content marketing and strategy",
      "Pay-per-click (PPC) campaigns",
      "Email marketing",
      "Influencer partnerships",
      "Brand strategy and positioning",
      "Analytics and reporting",
    ],
    technologies: [
      { name: "SEO Tools", items: ["Google Analytics", "SEMrush", "Ahrefs", "Moz"] },
      { name: "Social Media", items: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads"] },
      { name: "Email", items: ["Mailchimp", "SendGrid", "Constant Contact"] },
      { name: "Analytics", items: ["Google Analytics", "Facebook Pixel", "Hotjar"] },
    ],
    process: [
      { step: 1, title: "Strategy", description: "Campaign planning and goal setting" },
      {
        step: 2,
        title: "Content Creation",
        description: "Develop engaging content and creatives",
      },
      { step: 3, title: "Execution", description: "Launch campaigns across platforms" },
      { step: 4, title: "Monitoring", description: "Track performance and metrics" },
      { step: 5, title: "Optimization", description: "Refine campaigns for better results" },
      { step: 6, title: "Reporting", description: "Deliver insights and recommendations" },
    ],
    benefits: [
      "Increased brand awareness",
      "Higher website traffic",
      "Better lead generation",
      "Improved conversion rates",
      "Measurable ROI",
    ],
  },
  {
    id: 5,
    title: "Online Store",
    shortDescription: "Complete e-commerce solutions",
    heroImage: "/images/services/onlinestore.jpg",
    overview:
      "Launch a complete e-commerce solution with secure payment processing, inventory management, and mobile-responsive design that drives sales. Our online store development services help you establish a robust digital presence and reach customers worldwide.",
    features: [
      "E-commerce platform development",
      "Secure payment gateway integration",
      "Inventory management system",
      "Shopping cart functionality",
      "Order management and tracking",
      "Product catalog management",
      "Customer account management",
      "Mobile-responsive design",
    ],
    technologies: [
      { name: "Platforms", items: ["Shopify", "WooCommerce", "Magento", "Custom"] },
      { name: "Payments", items: ["Stripe", "PayPal", "Razorpay", "Square"] },
      { name: "Hosting", items: ["AWS", "Cloudflare", "DigitalOcean"] },
      { name: "Analytics", items: ["Google Analytics", "Hotjar", "Mixpanel"] },
    ],
    process: [
      { step: 1, title: "Planning", description: "Requirements and platform selection" },
      {
        step: 2,
        title: "Design",
        description: "UI/UX design and user flow",
      },
      { step: 3, title: "Development", description: "Build and customize platform" },
      { step: 4, title: "Integration", description: "Payment and shipping setup" },
      { step: 5, title: "Testing", description: "Quality assurance and security checks" },
      { step: 6, title: "Launch", description: "Go live and marketing support" },
    ],
    benefits: [
      "24/7 online availability",
      "Global reach and accessibility",
      "Reduced operational costs",
      "Scalable business model",
      "Data-driven insights",
    ],
  },
  {
    id: 6,
    title: "Software Training",
    shortDescription: "Comprehensive technology training programs",
    heroImage: "/images/services/data-analytics.jpg",
    overview:
      "Upskill your team with comprehensive software training programs covering modern technologies, frameworks, and best practices. Our hands-on training approach ensures your team gains practical skills and knowledge for lasting success.",
    features: [
      "Programming language training",
      "Framework and library training",
      "Cloud technologies training",
      "Development methodologies",
      "Best practices and standards",
      "Hands-on project experience",
      "Certification preparation",
      "Customized training programs",
    ],
    technologies: [
      { name: "Languages", items: ["Python", "JavaScript", "Java", "C#"] },
      { name: "Frameworks", items: ["React", "Angular", "Node.js", "Django"] },
      { name: "Cloud", items: ["AWS", "Azure", "Google Cloud"] },
      { name: "Tools", items: ["Git", "Docker", "Kubernetes", "Jenkins"] },
    ],
    process: [
      { step: 1, title: "Assessment", description: "Evaluate current skill levels" },
      {
        step: 2,
        title: "Curriculum Design",
        description: "Create customized training plan",
      },
      { step: 3, title: "Training Delivery", description: "Conduct interactive sessions" },
      { step: 4, title: "Practice", description: "Hands-on exercises and projects" },
      { step: 5, title: "Assessment", description: "Evaluate learning outcomes" },
      { step: 6, title: "Support", description: "Ongoing mentorship and resources" },
    ],
    benefits: [
      "Improved team productivity",
      "Reduced dependency on external resources",
      "Faster project delivery",
      "Better code quality",
      "Enhanced career growth",
    ],
  },
];
