// Personal information and data for the portfolio
export const personalDetails = {
  name: 'Vishal Kumar',
  designation: ['Full stack Developer', 'GAME Developer'],
  email: 'vishalkumar8673@gmail.com',
  aboutMe: `I'm a skilled Full Stack Developer with expertise in building scalable web applications and real-time multiplayer games for high-traffic platforms. I specialize in Node.js, React.js, and TypeScript, and have hands-on experience with Redis, MySQL, MongoDB, and cloud deployments on AWS. Passionate about backend architecture, microservices, and real-time systems using WebSockets and RabbitMQ, I enjoy creating robust solutions that balance performance, scalability, and clean design. I'm a problem-solver at heart, committed to delivering reliable and efficient technology for modern applications.`,
  socials: [
    { label: 'Behance', url: 'https://behance.net/vishalkumar', handle: '@vishalkumar' },
    { label: 'Instagram', url: 'https://instagram.com/vishalkumar', handle: '@vishalkumar' },
    { label: 'Twitter', url: 'https://twitter.com/vishalkumar', handle: '@vishalkumar' },
    { label: 'Dribbble', url: 'https://dribbble.com/vishalkumar', handle: '@vishalkumar' },
    { label: 'GitHub', url: 'https://github.com/vishalkumar', handle: '@vishalkumar' },
  ],
  education: [
    {
      degree: 'Bachelor of Engineering',
      institution: 'Rameshwaram Institute Of Technology',
      period: '2016 - 2020',
      location: 'UP, India',
      details: 'Graduated with distinction. Specialized in software engineering and web technologies.'
    }
  ],
  workExperience: [
    {
      title: 'Full-Stack Developer',
      company: 'Cloudstok Technologies Pvt. Ltd.',
      location: 'Noida, India',
      period: 'Oct 2021 - Present',
      description: 'Developed scalable web applications and real-time multiplayer game backends (card, crash, slot) using Node.js, Socket.io, and microservices architecture with RabbitMQ. Integrated RESTful APIs, WebSockets, and optimized performance with Redis, MySQL, and MongoDB. Managed cloud deployments on AWS and Docker, and collaborated with frontend teams to deliver high-traffic platforms.',
      technologies: ['Node.js', 'React.js', 'TypeScript', 'Redis', 'MySQL', 'MongoDB', 'Socket.io', 'RabbitMQ', 'AWS', 'Docker'],
      link: 'https://cloudstok.com/',
    }
  ],
  stats: {
    currentRole: 'Fullstack Developer',
    education: 'Bachelor of Engineering',
    experience: '3+ years',
    projectsCompleted: '15+',
  },
  projects: [
    {
      title: 'Visa Application App',
      description: 'Backend built with Node.js & TypeScript, integrated APIs, optimized performance using Redis & MySQL for scalable visa application processing.',
      image: '/assets/Visa.png',
      technologies: ['Node.js', 'TypeScript', 'Redis', 'MySQL', 'Postman'],
      github: '',
      live: '',
      featured: true,
    },
    {
      title: 'Notification Server',
      description: 'Scalable backend server with Node.js and Redis caching, designed for high-performance notifications and API integration.',
      image: '/assets/Notification.png',
      technologies: ['Node.js', 'TypeScript', 'Redis', 'Postman'],
      github: '',
      live: '',
      featured: true,
    },
    {
      title: 'Doctor Consultation App',
      description: 'Frontend built with React.js for doctor consultations, featuring OTP login, audio/video calling UI, and API integration.',
      image: '/assets/Doctor.png',
      technologies: ['React.js', 'Figma', 'WebRTC', 'Postman'],
      github: '',
      live: '',
      featured: true,
    },
    {
      title: 'AccessBridge Admin Panel',
      description: 'High-concurrency admin panel built with secure token-based authentication and operator-mediated access control for 2000–4000 concurrent users.',
      image: '/assets/Acess.png',
      technologies: ['Node.js', 'TypeScript', 'Redis', 'Postman'],
      github: '',
      live: '',
      featured: true,
    },
    {
      title: 'Sport App',
      description: 'Responsive web and mobile frontend with React.js and React Native, featuring OTP authentication and API integration.',
      image: '/assets/Sport.png',
      technologies: ['React.js', 'React Native', 'Postman'],
      github: '',
      live: '',
      featured: true,
    },
  ],
}; 