import ecommerce from '/public/image/e-commerce.jpeg';

export const projectsData = [
    {
        id: 1,
        name: 'E-commerce Microservice Application',
        description: "Crafted a scalable e-commerce platform, embracing microservices architecture powered by Spring Framework in Java. This dynamic system prioritizes containerization using Docker and incorporates Kafka for asynchronous communication, streamlining order processing and product information management. Leveraging Spring Boot for backend development and React/Next.js for the frontend, the project seamlessly integrates RESTful APIs, ensuring efficient communication between the API Gateway and microservices. Additionally, meticulously designed database schemas for Products, Orders, and Images facilitate organized data management and retrieval throughout the platform.",
        tools: ['Spring Boot', 'Java', 'Docker', 'Kafka', 'React', 'Next.js', 'MySQL', 'API Gateways', 'Postman'],
        role: 'Software Developer',
        code: '',
        demo: '',
        image: ecommerce,
    },
    {
        id: 2,
        name: 'Restaurant Management System',
        description: 'Created a restaurant management system using Node.js, Express, and MongoDB. Implemented REST API endpoints for basic CRUD operations, incorporated security measures with bcrypt for password encryption, integrated GraphQL for enhanced filtering, and deployed the application on Cyclic for accessibility.',
        tools: ['Node.js', 'Express.js', 'MongoDB', 'GraphQL', 'bcrypt', 'Git (Version Control)', 'Cyclic (Deployment)'],
        role: 'Software Developer',
        code: '',
        demo: '',
        image: '',
    },
    {
        id: 3,
        name: 'City Oversight',
        description: 'Developed a smart city management platform with modules for garbage and pothole detection using machine learning and image processing. The system facilitates automated reporting and efficient handling of issues by municipal authorities. Built with Python and Django for backend development, the project utilizes OpenCV and TensorFlow for image processing and machine learning tasks. It includes distinct user interfaces for citizens, employees, technicians, and administrators, enabling streamlined management of reports, cameras, and maintenance tasks.',
        tools: ['Python', 'Django', 'Machine Learning', 'OpenCV', 'TensorFlow', 'MySQL', 'PyCharm'],
        role: 'Software Developer',
        code: '',
        demo: '',
        image: '',
    },
    {
        id: 4,
        name: 'The Shoe Company',
        description: 'Developed a dynamic e-commerce platform for "The Shoe Company," offering an engaging online shopping experience for various shoe collections. Key features include a user-friendly home page, an admin dashboard for efficient management, user authentication (login, logout, registration), and dedicated pages for "Contact Us" and "About Us." Implemented a robust MySQL database with a well-structured schema, adhering to naming conventions and normalization principles. The front end is developed using HTML, CSS, JavaScript, and jQuery, ensuring a responsive design and seamless user experience across devices. Leveraged Laravel for backend development, enabling efficient routing, controller management, and Blade templating.',
        tools: ['Laravel', 'PHP', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'Blade Templating', '.env Configuration', 'phpMyAdmin'],
        role: 'Software Developer',
        code: '',
        demo: '',
        image: '',
    },
    {
        id: 5,
        name: 'Railway Ticket Plaza',
        description: 'The Train-Ticket-Reservation-System is a platform designed to streamline train travel management. It allows users to access train schedules, search for specific trains, check seat availability, and obtain details about train timings. The system also facilitates fare inquiries for different trains and provides information about available trains between chosen stations. With its secure online seat booking functionality, it ensures a safe and reliable reservation experience.',
        tools: ['Servlets', 'JSP', 'Javabeans', 'JDBC', 'HTML', 'CSS', 'Bootstrap', 'MySQL'],
        code: '',
        role: 'Software Developer',
        demo: '',
        image: '',
    }
];