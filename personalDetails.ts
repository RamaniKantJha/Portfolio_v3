// Personal information and data for the portfolio
export const personalDetails = {
  name: 'Ramani Kant Jha',
  designation: ['Full-Stack Developer', 'AI & ML Engineer'],
  email: 'kantramani01@gmail.com',
  phone: '+91 7840030847',
  location: 'Delhi, India',
  aboutMe: `Computer Science graduate with hands-on experience supporting enterprise applications, technology-driven business operations, and web-based software. Experienced in application troubleshooting, system and operational issue resolution, customer support, data management, REST APIs, SQL, Python, FastAPI, Flask, MySQL, MongoDB, and Git. Experienced working with Finacle Core Banking Solution and supporting technology-enabled banking processes. Strong analytical and problem-solving skills with a software development background, enabling effective diagnosis and resolution of application and technical issues.`,
  socials: [
    { label: 'Behance', url: 'https://behance.net/ramanikantjha', handle: '@ramanikantjha' },
    { label: 'Instagram', url: 'https://instagram.com/ramanikantjha', handle: '@ramanikantjha' },
    { label: 'Twitter', url: 'https://twitter.com/ramanikantjha', handle: '@ramanikantjha' },
    { label: 'Dribbble', url: 'https://dribbble.com/ramanikantjha', handle: '@ramanikantjha' },
    { label: 'GitHub', url: 'https://github.com/ramanikantjha', handle: '@ramanikantjha' },
  ],
  education: [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Delhi Technical Campus',
      period: 'Aug 2019 - Jul 2023',
      location: 'New Delhi, India',
      details: 'CGPA: 8.89/10. Specialized in software engineering, web technologies, and machine learning applications.'
    },
    {
      degree: 'Diploma in Mechanical Engineering',
      institution: 'Pusa Institute of Technology',
      period: 'Jul 2016 - May 2019',
      location: 'New Delhi, India',
      details: 'Foundation in engineering principles and technical fundamentals.'
    }
  ],
  workExperience: [
    {
      title: 'Apprentice',
      company: 'Bank of Baroda',
      location: 'Karol Bagh, New Delhi, India',
      period: 'Aug 2025 - Aug 2026',
      description: 'Technical support and application support professional working with Finacle Core Banking Solution. Managed account operations, transaction processing, and customer data. Resolved application and operational issues, supported KYC verification, and assisted with customer onboarding using digital banking tools. Applied analytical and troubleshooting skills to support efficient resolution of technology-related operational issues.',
      technologies: ['Finacle Core Banking Solution', 'Digital Banking Systems', 'System Troubleshooting', 'Customer Support', 'Data Management'],
      link: '#'
    },
    {
      title: 'AI/ML Intern',
      company: 'CloudStok Technologies Pvt. Ltd.',
      location: 'Noida, India',
      period: 'Feb 2025 - Jul 2025',
      description: 'Developed and supported AI-powered web applications including an intelligent chatbot, image enhancement application, and image generation system. Built backend APIs using FastAPI and integrated services with frontend interfaces. Worked with Python, OpenCV, PyTorch, and TensorFlow for application development. Tested application functionality and resolved technical issues. Optimized application and model performance for better user experience.',
      technologies: ['Python', 'FastAPI', 'PyTorch', 'TensorFlow', 'OpenCV', 'Git', 'REST APIs'],
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
    currentRole: 'Technical Support Professional & Full-Stack Developer',
    education: 'B.Tech in Computer Science and Engineering (CGPA: 8.89/10)',
    experience: '2+ years',
    projectsCompleted: '10+',
  },
  projects: [
    {
      title: 'Personal Portfolio Website',
      description: 'Designed and developed a responsive personal portfolio website using modern web technologies. Implemented interactive UI components and animations using Framer Motion. Tested and optimized the website for desktop, tablet, and mobile devices.',
      image: '/assets/Portfolio_light.png',
      technologies: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'Vercel'],
      github: 'https://github.com/ramanikantjha/portfolio_v3',
      live: 'https://ramanikantjha.me',
      featured: true
    },
    {
      title: 'AI Chatbot',
      description: 'Developed an AI-powered chatbot capable of processing user queries and providing contextual responses. Built RESTful APIs using FastAPI and integrated the backend with a React-based frontend. Applied troubleshooting techniques to improve the overall user interaction experience.',
      image: '/assets/ChatBot.png',
      technologies: ['Python', 'FastAPI', 'React', 'NLP', 'REST APIs'],
      github: 'https://github.com/ramanikantjha/ai-chatbot',
      live: '#',
      featured: true  
    },
    {
      title: 'Test Report Analyzer',
      description: 'Web-based application for analyzing uploaded reports developed during an AWS Intelligent Document Processing workshop. Implemented OCR and document-processing techniques to extract information from uploaded documents. Built a Flask-based application for document upload and analysis workflow.',
      image: '/assets/test-report-app.png',
      technologies: ['Python', 'Flask', 'AWS IDP', 'OCR', 'Document Processing'],
      github: 'https://github.com/ramanikantjha/test-report-analyzer',
      live: '#',
      featured: true
    },
    {
      title: 'Heart Disease Prediction Model',
      description: 'Developed a machine learning application using the Cleveland Heart Disease dataset. Performed data preprocessing, feature selection, and hyperparameter tuning using GridSearchCV. Evaluated multiple algorithms and achieved 92.07% accuracy using Random Forest with an AUC score of 0.91. Published research on this project in Taylor & Francis, 2024.',
      image: '/assets/heartDisease.png',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'GridSearchCV', 'Random Forest', 'XGBoost'],
      github: 'https://github.com/ramanikantjha/heart-disease-prediction',
      live: '#',
      featured: true
    },
    {
      title: 'Image Enhancer',
      description: 'Advanced image enhancement tool leveraging deep learning techniques to improve image quality, resolution, and clarity. The tool supports denoising, super-resolution, and color correction, making it suitable for both professional and personal use.',
      image: '/assets/ImageEnhancer.png',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Keras', 'NumPy', 'Deep Learning'],
      github: 'https://github.com/ramanikantjha/image-enhancer',
      live: '#',
      featured: false
    },
    {
      title: 'Ghibli Cartoonifier',
      description: 'Converts real images into Ghibli-style art using AnimeGANv2 and a FastAPI backend. Demonstrates the integration of advanced AI models with web application architecture for creative image transformation.',
      image: '/assets/Ghibli.png',
      technologies: ['PyTorch', 'FastAPI', 'React', 'AnimeGAN', 'Computer Vision'],
      github: 'https://github.com/ramanikantjha/ghibli-cartoonifier',
      live: '#',
      featured: false
    },
    {
      title: 'Generating Art with AI for Low-End Devices',
      description: 'AI-based art generation tool optimized for low-end devices, providing users with the ability to generate exact or approximate images based on their input. Focuses on performance optimization and resource efficiency.',
      image: '/assets/AI Art Generation.png',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Tkinter', 'Model Optimization'],
      github: 'https://github.com/ramanikantjha/ai-art-generation',
      live: '#',
      featured: false
    },
  ],
}; 