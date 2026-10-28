// Personal information and data for the portfolio
export const personalDetails = {
  name: 'Ramani Kant Jha',
  designation: ['Data Analyst', 'Python & SQL', 'Machine Learning'],
  email: 'kantramani01@gmail.com',
  phone: '+91 7840030847',
  location: 'Delhi, India',
  aboutMe: `Computer Science graduate (B.Tech, 8.89 CGPA) with a Python and SQL background and hands-on data analysis experience through published machine learning research. Skilled in data cleaning and preprocessing, feature selection, statistical analysis, model evaluation, and hyperparameter tuning. Brings a year of experience maintaining customer data accuracy and integrity in a high-volume banking environment using Finacle Core Banking Solution. Currently building Power BI and advanced SQL skills for business intelligence and reporting.`,
  socials: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/ramani-kant-jha', handle: 'ramani-kant-jha' },
    { label: 'GitHub', url: 'https://github.com/RamaniKantJha', handle: '@RamaniKantJha' },
    { label: 'Portfolio', url: 'https://portfolio-v3-topaz-five.vercel.app', handle: 'portfolio-v3-topaz-five.vercel.app' },
  ],
  education: [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Delhi Technical Campus',
      period: 'Aug 2019 - Jul 2023',
      location: 'New Delhi, India',
      details: 'CGPA: 8.89/10.'
    },
    {
      degree: 'Diploma in Mechanical Engineering',
      institution: 'Pusa Institute of Technology',
      period: 'Jul 2016 - May 2019',
      location: 'New Delhi, India',
      details: 'Diploma in Mechanical Engineering.'
    }
  ],
  workExperience: [
    {
      title: 'Apprentice, Core Banking Operations',
      company: 'Bank of Baroda',
      location: 'Karol Bagh, New Delhi, India',
      period: 'Aug 2025 - Aug 2026',
      description: 'Maintained data accuracy and integrity for Finacle Core Banking Solution records, processing approximately 15–17 KYC verifications and 4–5 account openings per day. Identified and resolved customer-record inconsistencies across account opening, onboarding, and digital banking workflows. Supported approximately 10–15 customers per day with digital banking services and coordinated with branch and technical teams to investigate data and system issues. Developed working knowledge of enterprise data workflows and reporting structures in a regulated banking environment.',
      technologies: ['Finacle Core Banking Solution', 'Customer Data Management', 'Data Accuracy & Integrity', 'KYC Verification', 'Digital Banking'],
      link: '#'
    },
    {
      title: 'AI/ML Intern',
      company: 'CloudStok Technologies Pvt. Ltd.',
      location: 'Noida, India',
      period: 'Feb 2025 - Jul 2025',
      description: 'Built and supported AI-powered web applications including an intelligent website chatbot, image-enhancement application, and image-generation system using Python, PyTorch, TensorFlow, and OpenCV. Developed backend APIs with FastAPI and integrated them with frontend interfaces. Tested functionality, investigated and fixed technical issues, and optimized application and model performance. Collaborated across development, testing, and deployment using Git and SDLC practices.',
      technologies: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'FastAPI', 'Git', 'REST APIs'],
      link: '#'
    },
    {
      title: 'Web Developer Intern',
      company: 'TwoWaits Technologies Pvt. Ltd.',
      location: 'Greater Noida, Uttar Pradesh, India',
      period: 'Jul 2022 - Aug 2022',
      description: 'Developed the frontend of a responsive gym website using HTML, CSS, and JavaScript. Implemented navigation, contact forms, and interactive website components. Collaborated with the design team to create a user-friendly interface across different devices. Performed cross-browser compatibility testing and identified and resolved frontend issues.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: '#'
    }
  ],
  stats: {
    currentRole: 'Data Analyst | Python, SQL & Machine Learning',
    education: 'B.Tech in Computer Science and Engineering (CGPA: 8.89/10)',
    experience: '1 year in banking operations + internship experience',
    projectsCompleted: '4 featured',
  },
  projects: [
    {
      title: 'Heart Disease Prediction Using Machine Learning',
      description: 'Compared Random Forest, XGBoost, LightGBM, SVM, KNN, and Logistic Regression using the Cleveland Heart Disease dataset. Applied data preprocessing, feature selection, and GridSearchCV hyperparameter tuning. Random Forest achieved 92.07% accuracy and 0.91 AUC. The research was published as a first-author book chapter by Taylor & Francis in 2024.',
      image: '/assets/heartDisease.png',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'GridSearchCV', 'Random Forest', 'XGBoost', 'LightGBM'],
      github: 'https://github.com/RamaniKantJha/heart-disease-prediction',
      live: '#',
      featured: true
    },
    {
      title: 'AI Chatbot',
      description: 'Built a chatbot that processes user queries and returns contextual responses. Integrated RESTful APIs built with FastAPI into a React frontend, troubleshot issues, and improved the user interaction experience.',
      image: '/assets/ChatBot.png',
      technologies: ['Python', 'FastAPI', 'React', 'REST APIs'],
      github: 'https://github.com/RamaniKantJha/ai-chatbot',
      live: '#',
      featured: true
    },
    {
      title: 'Test Report Analyzer',
      description: 'Built a Flask web application for report uploads and analysis during an AWS Intelligent Document Processing workshop. Used OCR and document-processing techniques to extract information and tested the complete upload-to-analysis workflow.',
      image: '/assets/test-report-app.png',
      technologies: ['Python', 'Flask', 'AWS Intelligent Document Processing', 'OCR', 'Document Processing'],
      github: 'https://github.com/RamaniKantJha/test-report-analyzer',
      live: '#',
      featured: true
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Designed and developed a responsive portfolio website with interactive components and animations. Tested and optimized the site for desktop, tablet, and mobile devices, then deployed it on Vercel.',
      image: '/assets/Portfolio_light.png',
      technologies: ['Framer Motion', 'Responsive Web Design', 'Vercel'],
      github: 'https://github.com/RamaniKantJha/portfolio_v3',
      live: 'https://portfolio-v3-topaz-five.vercel.app',
      featured: true
    },
  ],
};
