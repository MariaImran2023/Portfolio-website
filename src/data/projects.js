import newsapp from '../assets/newsApp.png';
import api from '../assets/api.png';
import firebase from '../assets/firebase.png';
import redux from '../assets/redux.png';
import port from '../assets/portfolio.png';

export const PROJECTS = [
    {
      title: "News App",
      image: newsapp,
      description: "The News App, developed using React JS, fetches daily updated news from NewsAPI and presents them in a structured manner. Users can switch between various news categories, including General, Business, Entertainment, Health, Science, Sports, and Technology. The app features dark and light mode options, infinite scroll for continuous browsing, and a loading indicator for a smoother experience. It incorporates both class-based and function-based components to demonstrate a versatile approach to React development.",
      technologies: ["HTML", "CSS", "JavaScript", "React JS", "News API"],
      github: ["https://github.com/MariaImran2023/NewsApp-Function-Based-Components-React"]
    },
    {
      title: "SignUp using Firebase",
      image: firebase,
      description: "This project implements a user authentication system using Firebase, enabling users to sign up, log in, and reset their passwords. It adds user data to Firebase upon registration and handles various authentication errors with clear, custom messages. Errors include issues like duplicate emails, invalid email formats, and weak passwords. The password reset functionality also includes specific error handling for invalid emails and non-existent users, ensuring a smooth and user-friendly experience.",
      technologies: ["HTML", "CSS", "JavaScript", "React JS", "Firebase Authentication", "Firebase SDK"],
      github: "https://github.com/MariaImran2023/signup-login-and-reset-using-firebase"
    },
    {
      title: "Portfolio Website",
      image: port,
      description: "This personal portfolio website is designed to showcase my experience, skills, projects, and contact information. It features a well-organized layout that highlights my professional journey, technical expertise, and key projects.",
      technologies: ["HTML", "Tailwind CSS", "React JS", "JavaScript"],
      github: "https://github.com/your-username/portfolio-website"
    },
    {
      title: "RESTful API Integration",
      image: api,
      description: "This project provides an admin interface for managing user accounts using a RESTful API. Administrators can add, delete, and update user information through a user-friendly interface. The application interacts with a backend RESTful API to perform these operations, ensuring efficient and secure management of user data.",
      technologies: ["HTML", "CSS", "RESTful API", "JavaScript", "React JS", "Axios"],
      github: "https://github.com/MariaImran2023/CRUD-using-RESTful-API-Integration"
    },
    {
        title: "Redux State Management",
        image: redux,
        description: "This project demonstrates the use of Redux for state management in a React application. It showcases how Redux can be used to manage and synchronize state across various components, providing a centralized store for application state.",
        technologies: ["HTML", "CSS", "JavaScript", "React JS", "React-Redux", "Redux Thunk"],
        github: "https://github.com/MariaImran2023/Redux-State-Management"
    }
];
