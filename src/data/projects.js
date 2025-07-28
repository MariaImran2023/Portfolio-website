import newsapp from '../assets/newsApp.png';
import api from '../assets/api.png';
import firebase from '../assets/firebase.png';
import redux from '../assets/redux.png';
import port from '../assets/portfolio.png';
import n from '../assets/n.png';
import career from '../assets/career.png';
import mnist from '../assets/mnist.png';
import skin from '../assets/skin.png';
import smart from '../assets/smart.png';

export const PROJECTS = [
    {
      title: "Netflix Movie/TV Show Recommender",
      image: n,
      description: "A web-based system to recommend similar Netflix shows and movies using K-Means clustering. The show and movie data was preprocessed and analyzed based on genre, rating, and duration (number of seasons and minutes). A Flask backend was built to handle predictions and served through a RESTful API. The frontend was designed in React.js with a responsive interface, form-based input, and dynamic results display. The backend was deployed on Railway, while the frontend was made publicly accessible via Vercel.",
      technologies: ["Python", "Flask", "React.js", "Pandas", "Scikit-learn", "Seaborn"],
      github: ["https://github.com/MariaImran2023/netflix-recommender"],
      live: ['https://netflix-recommender-five.vercel.app/']
    },
    {
      title: "Career Path Recommender Web App",
      image: career,
      description: "A web application that suggests career paths based on user-entered skills. Real-world job data was collected and preprocessed, and a custom matching algorithm was created to rank suitable roles. A Flask API powered the backend logic, and Plotly was used for data visualization on the frontend. The application was deployed with the backend on Railway and the frontend on Vercel",
      technologies: ["Flask", "Python", "Pandas", "React JS", "Plotly"],
      github: ["https://github.com/MariaImran2023/career-recommender"],
      live: ['https://career-recommender-lilac.vercel.app/']
    },
    {
      title: "Smart-Hire: AI-Based Recruitment Platform",
      image: smart,
      description: "An intelligent recruitment system that uses NLP and AI to automate and improve hiring. A CV parser was developed using spaCy and SBERT embeddings for efficient job-candidate matching. The platform also features a job posting engine, a unbiased ranking algorithm, and feedback functionality. PostgreSQL handled database operations, and Flask RESTful APIs supported communication with the React.js frontend. Automated messaging was integrated to improve the recruitment workflow",
      technologies: ["Python", "Flask", "PostgreSQL", "React JS", "spaCy", "SBERT"],
    },
    {
      title: "Image Classifier using CNN and SVM",
      image: mnist,
      description: "Trained a digit recognition model using the MNIST dataset and implemented classification using both Convolutional Neural Networks (CNN) and Support Vector Machines (SVM). The dataset was preprocessed, and both models were evaluated using various performance metrics for comparison.",
      technologies: ["Python", "CNN", "MNIST Dataset", "SVM"],
    },
    {
      title: "Skin Disease Image Classifier",
      image: skin,
      description: "Developed a deep learning-based skin disease detection model using three pre-trained architectures: MobileNet, DenseNet, and EfficientNet. The dataset underwent preprocessing and data augmentation to improve generalization. Model performance was evaluated and compared using metrics such as accuracy, precision, recall, and confusion matrix of the three models.",
      technologies: ["TensorFlow/Keras", "MobileNet", "DenseNet", "EfficientNet", "Python"],
    },
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
      github: "https://github.com/MariaImran2023/Portfolio-website"
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
