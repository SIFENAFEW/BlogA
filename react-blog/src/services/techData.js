// Mock technology blog posts data
export const techPosts = [
  {
    id: 1,
    userId: 1,
    title: "The Future of Artificial Intelligence in Web Development",
    body: "Artificial Intelligence is revolutionizing how we build and interact with web applications. From automated code generation to intelligent user interfaces, AI is transforming the development landscape. In this article, we explore the latest AI tools and frameworks that are making developers more productive and creating better user experiences."
  },
  {
    id: 2,
    userId: 2,
    title: "React 18: New Features and Performance Improvements",
    body: "React 18 introduces several groundbreaking features including concurrent rendering, automatic batching, and new hooks. These improvements significantly enhance application performance and user experience. Learn how to leverage these new capabilities in your next React project and migrate from previous versions."
  },
  {
    id: 3,
    userId: 1,
    title: "Building Scalable APIs with Node.js and GraphQL",
    body: "GraphQL has become the go-to solution for building flexible and efficient APIs. Combined with Node.js, it provides a powerful stack for modern web applications. This comprehensive guide covers best practices, performance optimization, and real-world implementation strategies for GraphQL APIs."
  },
  {
    id: 4,
    userId: 3,
    title: "The Rise of Edge Computing and Its Impact on Web Performance",
    body: "Edge computing is bringing computation closer to users, dramatically reducing latency and improving web performance. Explore how CDNs, edge functions, and distributed architectures are reshaping the web. Learn about the tools and platforms that make edge computing accessible to developers."
  },
  {
    id: 5,
    userId: 2,
    title: "Cybersecurity Best Practices for Modern Web Applications",
    body: "As web applications become more complex, security threats continue to evolve. This article covers essential security practices including authentication, authorization, data encryption, and protection against common vulnerabilities like XSS and CSRF attacks. Keep your applications and users safe."
  },
  {
    id: 6,
    userId: 4,
    title: "Machine Learning in the Browser: TensorFlow.js and Beyond",
    body: "Machine learning is no longer confined to servers and cloud platforms. With TensorFlow.js and WebAssembly, we can now run sophisticated ML models directly in the browser. Discover how to implement real-time image recognition, natural language processing, and predictive analytics in web applications."
  },
  {
    id: 7,
    userId: 3,
    title: "The Evolution of CSS: From Flexbox to Container Queries",
    body: "CSS continues to evolve with powerful new features that make responsive design easier and more intuitive. Container queries, CSS Grid improvements, and new layout primitives are changing how we approach web design. Learn about the latest CSS features and how to use them effectively."
  },
  {
    id: 8,
    userId: 1,
    title: "Microservices Architecture: Benefits, Challenges, and Best Practices",
    body: "Microservices architecture offers scalability and flexibility but comes with its own set of challenges. This deep dive explores when to use microservices, how to design service boundaries, and strategies for managing distributed systems. Includes real-world case studies and lessons learned."
  },
  {
    id: 9,
    userId: 4,
    title: "Progressive Web Apps: Bridging the Gap Between Web and Mobile",
    body: "Progressive Web Apps (PWAs) combine the best of web and mobile applications, offering offline functionality, push notifications, and native-like experiences. Learn how to build PWAs that work seamlessly across all devices and platforms, improving user engagement and retention."
  },
  {
    id: 10,
    userId: 2,
    title: "Blockchain Technology: Beyond Cryptocurrency",
    body: "While blockchain is famous for powering cryptocurrencies, its applications extend far beyond digital money. Explore how blockchain technology is being used for supply chain management, digital identity verification, smart contracts, and decentralized applications. Understand the potential and limitations of this revolutionary technology."
  },
  {
    id: 11,
    userId: 3,
    title: "Cloud-Native Development with Kubernetes and Docker",
    body: "Cloud-native development is transforming how we build and deploy applications. Kubernetes and Docker provide the foundation for scalable, resilient, and portable applications. This guide covers containerization strategies, orchestration patterns, and best practices for cloud-native architecture."
  },
  {
    id: 12,
    userId: 1,
    title: "The Impact of 5G on Web Development and User Experience",
    body: "5G networks promise unprecedented speed and low latency, opening new possibilities for web applications. From real-time collaboration tools to immersive AR/VR experiences, 5G is enabling new categories of web applications. Explore how to optimize your applications for the 5G era."
  }
];

// Mock technology-focused comments
export const techComments = [
  {
    id: 1,
    postId: 1,
    name: "Sarah Chen",
    email: "sarah.chen@techdev.com",
    body: "Great insights on AI in web development! I've been experimenting with GitHub Copilot and it's amazing how much it speeds up development. Looking forward to more AI-powered tools."
  },
  {
    id: 2,
    postId: 1,
    name: "Mike Rodriguez",
    email: "mike.r@startup.io",
    body: "The section on automated testing with AI was particularly interesting. Have you tried any specific tools for AI-driven test generation?"
  },
  {
    id: 3,
    postId: 2,
    name: "Emily Johnson",
    email: "emily.j@webstudio.com",
    body: "React 18's concurrent features are game-changers! The automatic batching alone has improved our app's performance significantly. Thanks for the migration tips."
  },
  {
    id: 4,
    postId: 2,
    name: "David Kim",
    email: "david.kim@techcorp.com",
    body: "Excellent breakdown of the new hooks. The useId hook has been particularly useful for accessibility improvements in our forms."
  },
  {
    id: 5,
    postId: 3,
    name: "Lisa Wang",
    email: "lisa.wang@apidesign.com",
    body: "GraphQL has transformed our API development workflow. The type safety and query flexibility are unmatched. Great article on best practices!"
  }
];

// Function to get technology posts (simulating API call)
export const getTechPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(techPosts);
    }, 500); // Simulate network delay
  });
};

// Function to get technology comments (simulating API call)
export const getTechComments = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(techComments);
    }, 300); // Simulate network delay
  });
};
