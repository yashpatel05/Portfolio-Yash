import ecommerce from '/public/image/e-commerce.jpeg';

export const projectsData = [
    {
        id: 1,
        name: 'E-commerce Microservice Application',
        description: "Crafted a scalable e-commerce platform, embracing microservices architecture powered by Spring Framework in Java. This dynamic system prioritizes containerization using Docker and incorporates Kafka for asynchronous communication, streamlining order processing and product information management. Leveraging Spring Boot for backend development and React/Next.js for the frontend, the project seamlessly integrates RESTful APIs, ensuring efficient communication between the API Gateway and microservices. Additionally, meticulously designed database schemas for Products, Orders, and Images facilitate organized data management and retrieval throughout the platform.",
        tools: ['Spring Boot', 'Java', 'Docker', 'Kafka', 'React', 'Next.js', 'MySQL', 'API Gateways', 'Postman'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: ecommerce,
    },
    {
        id: 2,
        name: 'Restaurant Management System',
        description: 'Created a restaurant management system using Node.js, Express, and MongoDB. Implemented REST API endpoints for basic CRUD operations, incorporated security measures with bcrypt for password encryption, integrated GraphQL for enhanced filtering, and deployed the application on Cyclic for accessibility.',
        tools: ['Node.js', 'Express.js', 'MongoDB', 'GraphQL', 'bcrypt', 'Git (Version Control)', 'Cyclic (Deployment)'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: '',
    },
    {
        id: 3,
        name: 'Railway Ticket Plaza',
        description: 'The Train-Ticket-Reservation-System is a platform designed to streamline train travel management. It allows users to access train schedules, search for specific trains, check seat availability, and obtain details about train timings. The system also facilitates fare inquiries for different trains and provides information about available trains between chosen stations. With its secure online seat booking functionality, it ensures a safe and reliable reservation experience.',
        tools: ['Servlets', 'JSP', 'Javabeans', 'JDBC', 'HTML', 'CSS', 'Bootstrap', 'MySQL'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: '',
    },
    {
        id: 4,
        name: 'Hotel Management System',
        description: "Introducing the Skyline Inn Hotel Management System, a cutting-edge web application transforming hotel room bookings. Seamlessly navigate from user registration to room reservation with an intuitive interface. Experience secure authentication, comprehensive room listings, and hassle-free booking functionality. Empower administrators with efficient room, booking, and user management tools. Developed using Angular.js and Node.js, with MySQL for robust database management.",
        tools: ['Angular 17', 'Node.js', 'TypeScript', 'JavaScript', 'BootStrap', 'HTML5', 'CSS3', 'MySQL'],
        code: '',
        demo: '',
        image: '',
        role: 'Full Stack Developer',
    }
];