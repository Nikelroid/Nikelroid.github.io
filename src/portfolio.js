// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Nima Kelidari",
    message: "I am a Computer Science graduate from Sharif University of Technology and a developer.  I have a strong interest in Data Science and its applications, particularly in image processing and computer vision.",
    basedLocation: "Bellevue, WA",
    resumeLink: "https://cvdesignr.com/p/65e5a2f304e92", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/portrait.jpg'
}

const socialMediaLinks = {
    email: "mailto:Nikelroid@gmail.com",
    github: "https://github.com/Nikelroid",
    linkedin: "https://www.linkedin.com/in/nima-kelidari-7674aa218/",
    //telegram: "https://T.me/Adivide2",
    xtwitter: "https://twitter.com/Adivide2",
    facebook: "https://www.facebook.com/profile.php?id=61552144558918&mibextid=ZbWKwL", 
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "Hello! My name is Nima Kelidari, a graduate with a B.Sc. in Computer Science from Sharif University of Technology. I am a Python and Java developer, specializing in Image Processing, Computer Vision, and the applications of Deep Learning. I have a keen interest in leveraging technology to solve real-world problems. Outside of the digital realm, I find joy in activities such as swimming, biking, and exploring the wonders of nature.",
        "If you're curious to learn more about my journey, projects, and coding prowess, I invite you to explore my CV, projects, and GitHub page."
    ], // Separated items are paragraphs
    techStack: [
        "Python",
        "Java",
        "MySQL",
        "MongoDB",
        "Pytorch",
        "open-cv"
    ],
    photo1Link: "images/portrait1.jpg",
    photo2Link: "images/portrait2.jpg",
    photo3Link: "images/portrait3.jpg"
}

// --- Educaion Section ---
const experiences = [
    {
        position: "Bachelor of Computer Science",
        company: {
            name: "Sharif University of Technology",
            location: "Tehran, Iran",
            link: "https://en.Sharif.ir"
        },
        duration: " Sep 2019 - Feb 2024",
        bulletPoints: [
            "Started specialized courses in semester 4, advancing to mid and senior-level courses in my field.",
            "Attend research in the Computer Vision field, starting from the 7th semester.",
            "I served as a Teaching Assistant six times during my Bachelor's degree, supporting both Computer Science and Computer Engineering departments.",
            "I achieved an overall GPA of 3.34 out of 4, with a GPA of 3.45 out of 4 in related courses."
        ],
        hashtags: [
            "ImageProcessing",
            "ComputerVision",
            "StaticalLearning",
            "DeepLearning",
            "AlgorithmDesign",
            "DataStructures",
            "StaticsandApplications"
        ]
    },
    {
        position: "Diploma of mathematics",
        company: {
            name: " Shahid Beheshti HighSchool",
            location: "Yasuj, Iran"
        },
        duration: "Sep 2016 - Jun 2019",
        bulletPoints: [
            "Excelled in high school courses such as Algebra, Calculus, Geometry, Discrete Math, Physics, and Chemistry, achieving top scores.",
            "Obtained top scores in both exams and scientific competitions.",
            "Attended the National Organization for Development of Exceptional Talents high school.",
            "Achieved a rank of 85th in Iran's entrance exam within Region 3.",
        ],
        hashtags: [
            "Calc 1-2",
            "Algebra 1-3",
            "Discrete Math",
            "StatisticsAndProbability",
            "Geometery",
            "Chemistry"
        ]
    }
    
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "Multi-Modal Sentiment Classification",
        yearCompleted: "2023",
        description: "MSCTD (Multi-Modal Sentiment Classification and Time Dynamics) is a tool designed for multi-modal sentiment analysis and time dynamics exploration in image-text conversations.",
        techStack: "Python, Pandas, Pytorch",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/Multi-Modal-Sentiment-Classification"
            },
            {
                label: "Dataset",
                type: "external",
                url: "https://github.com/XL2248/MSCTD"
            }
        ],
        imageLink: "images/multimodal.png",
        alignLeft: false
    },
    {
        projectName: "Image Compression Using SVD",
        yearCompleted: "2024",
        description: "In this project, a compression method is introduced that, through the use of singular value decomposition and matrix Fourier transforms, achieves compression resulting in a significant reduction in volume alongside some loss of information and overall quality.",
        techStack: "Python, open-cv, Matlab, LaTeX",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/Image-Compression/"
            }
        ],
        imageLink: "images/image_compression.png",
        alignLeft: true
    },
    {
        projectName: "Database Manager",
        yearCompleted: "2024",
        description: "The SQL Database Manager streamlines database management tasks, offering features for importing/exporting metadata and manipulating rows with ease.",
        techStack: "Python, MySQL",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/Database-Manager/"
            }
        ],
        imageLink: "images/database.png",
        alignLeft: false
    },
    {
        projectName: "Iran's COVID-19 Mortality Analysis",
        yearCompleted: "2023",
        description: "Our R program predicts pre-COVID mortality rates by state and age group in Iran using historical data. It then estimates COVID-19 mortality by comparing predicted values to actual data, considering age group weighting and statewide trends.",
        techStack: "R, HTML, CSV",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/Regression-HW1"
            },
            {
                label: "Dataset",
                type: "external",
                url: "https://d-learn.ir/iranprovs_mortality_monthly/"
            }
        ],
        imageLink: "images/covid.png",
        alignLeft: true
    },
    {
        projectName: "Predicting Diabetes in the USA",
        yearCompleted: "2023",
        description: "This project analyzes a balanced dataset to identify diabetes predictors like BMI, blood pressure, and age. Feature selection refines predictors, with training using decision trees, random forests, neural networks, KNN, and more.",
        techStack: "R, MarkDown",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/Regression-HW2"
            }
        ],
        imageLink: "images/diabates.png",
        alignLeft: false
    },
    {
        projectName: "Simulating Torrent network",
        yearCompleted: "2023",
        description: "This project offers a limited simulation of a Torrent network. A manager network operates within the tracker code, overseeing peer interactions. Peers can either share or request files with detailed logs.",
        techStack: "Python, UDP, TCP",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/SocketProgramming-P2P"
            }
        ],
        imageLink: "images/network.png",
        alignLeft: true
    },
    {
        projectName: "Sea Battle Game",
        yearCompleted: "2021",
        description: "Sea Battle is a multiplayer game where players can create accounts and host games or join others' matches. It's based on the classic naval warfare concept, allowing two players to battle each other. Spectators can also watch ongoing games, check game statuses, and view the leaderboard. Join the excitement of strategic sea battles in \"Sea Battle\"!\"",
        techStack: "JAVA, Server-Socket, CSS, JAVAFX",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/Sea-Battle"
            }
        ],
        imageLink: "images/seabattle.png",
        alignLeft: false
    },
    {
        projectName: "Arkanoid Game",
        yearCompleted: "2021",
        description: "Arkanoid is a famous and simple game where you control a paddle and a ball in a 2D space, aiming to demolish all the blocks at the top. With a variety of thrilling blocks and abilities, challenge your friends on the scoreboard for an exciting competition.",
        techStack: "JAVA, JAVAFX",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/Arkanoid"
            }
        ],
        imageLink: "images/arkanoid.png",
        alignLeft: true
    },
    {
        projectName: "Caption Generator fo Images",
        yearCompleted: "2023",
        description: "In this project, we've developed an image captioning system leveraging both LSTM and GRU architectures. This innovative approach allows for the automatic generation of descriptive captions tailored to the content of each image, providing a seamless integration of computer vision and natural language processing techniques.",
        techStack: "Python, NLP, CNN",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/DeepLearning_HW4/blob/main/DL2022_HW4_P2.ipynb"
            },
            {
                label: "Google Drive",
                type: "external",
                url: "https://colab.research.google.com/drive/1vKG1nrwLvdFwcnjCfdRvGwf2a1Jgz_xF#scrollTo=jC32FE_T_K0p"
            }
        ],
        imageLink: "images/captionGenerator.png",
        alignLeft: false
    }
]

const archiveLink = "https://github.com/Nikelroid?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Currently seeking software development positions/internships in Seattle,WA.",
            "Also looking to build a team for projects & startup ideas or just make professional connections."
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "Nikelroid@gmail.com", // email takes precedance
            other: ""
        },
        responseTimeMessage: "...and I'll resopnd as soon as possible"
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}
