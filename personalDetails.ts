// Personal information and data for the portfolio
export const personalDetails = {
  name: 'Ramani Kant Jha',
  designation: ['FrontEND Developer', 'AI & Machine Learning Intern'],
  email: 'ramanikant@example.com',
  aboutMe: `I'm a recent B.Tech graduate in Computer Science and Engineering with a passion for AI, data science, and full-stack development. From building responsive web apps to optimizing machine learning models for real-world use cases, I strive to combine analytical thinking with creative expression. A problem-solver at heart, I'm constantly pushing the boundaries of what technology can do.`,
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
      period: '2019 - 2023',
      location: 'New Delhi, India',
      details: 'Graduated with distinction. Specialized in software engineering and web technologies.'
    }
  ],
  workExperience: [
    {
      title: 'Senior Software Engineer',
      company: 'TechCorp Solutions',
      location: 'New Delhi, India',
      period: 'Jan 2023 - Present',
      description: 'Leading development of enterprise-scale applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Full-Stack Developer',
      company: 'InnovateTech',
      location: 'Bangalore, India',
      period: 'Mar 2021 - Dec 2022',
      description: 'Developed and maintained multiple web applications. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      technologies: ['React', 'Express.js', 'MongoDB', 'Docker', 'Redis'],
      link: '#'
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Mumbai, India',
      period: 'Jun 2020 - Feb 2021',
      description: 'Built responsive user interfaces and implemented modern frontend architectures. Worked closely with designers to create intuitive user experiences.',
      technologies: ['React', 'Vue.js', 'Sass', 'Webpack', 'Jest'],
      link: '#'
    }
  ],
  stats: {
    currentRole: 'AI/ML Intern',
    education: 'B.Tech in Computer Science and Engineering',
    experience: '3+ years',
    projectsCompleted: '15+',
  },
  projects: [
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern web technologies and smooth animations.',
      image: '/assets/Portfolio_light.png',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/ramanikantjha/portfolio_v3',
      live: 'https://ramanikantjha.me',
      featured: true
    },
    {
      title: 'Test Report Analyser',
      description: 'A health report analyser built during a 5-day AWS workshop using AWS IDP. It processes uploaded reports, provides insights, and suggests health recommendations.',
      image: '/assets/test-report-app.png',
      technologies: ['Python', 'Flask', 'AWS IDP', 'OCR', 'Health Analysis'],
      github: 'https://github.com/yourusername/test-report-analyser', // replace with actual
      live: 'https://your-demo-link.com', // optional; replace if hosted
      featured: false
    },
    {
      title: 'AI ChatBot',
      description: 'An intelligent chatbot built using NLP and React, capable of holding contextual conversations.',
      image: '/assets/ChatBot.png',
      technologies: ['Python', 'FastAPI', 'React'],
      github: '[link-to-code]',
      live: '[link-to-demo]',
      featured: true  
    },
    {
      title: 'Image Enhancer',
      description: 'Developed an advanced image enhancement tool leveraging deep learning techniques to improve image quality, resolution, and clarity. The tool supports denoising, super-resolution, and color correction, making it suitable for both professional and personal use.',
      image: '/assets/ImageEnhancer.png',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Keras', 'NumPy'],
      github: '[link-to-code]',
      live: '[link-to-demo]',
      featured: true
    },
    {
      title: 'Ghibli Cartoonifier',
      description: 'Converts real images into Ghibli-style art using AnimeGANv2 and a FastAPI backend.',
      image: '/assets/Ghibli.png',
      technologies: ['PyTorch', 'FastAPI', 'React', 'AnimeGAN'],
      github: '[link-to-code]',
      live: '[link-to-demo]',
      featured: true
    },
    {
      title: 'Heart Disease Prediction Model',
      description: 'Developed and optimised a heart disease prediction model using machine learning algorithms to predict the likelihood of heart disease based on patient data.',
      image: '/assets/heartDisease.png',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      github: '[link-to-code]',
      live: '[link-to-demo]',
      featured: true
    },
    {
      title: 'Generating Art with AI for Low-End Devices',
      description: 'Developed an AI-based art generation tool optimized for low-end devices, providing users with the ability to generate exact or approximate images based on their input.',
      image: '/assets/AI Art Generation.png',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Tkinter'],
      github: '[link-to-code]',
      live: '[link-to-demo]',
      featured: true
    },
  ],
}; 