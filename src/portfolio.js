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
        projectName: "Image Caption Generator",
        yearCompleted: "2023",
        description: "This is an image captioning system using both LSTM and GRU methods. This approach allows for the automatic generation of captions related to the content of an image, which is integration of computer vision and natural language processing techniques.",
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
    },
    {
        projectName: "Ferdousi Poem Generator",
        yearCompleted: "2023",
        description: "This project is about generating poems in Ferdousi style, a famous Persian poet. We use Natural Language Processing (NLP) and two different ways , \"LSTM\" and \"GRU\" to generate poems automatically using starting sequence.",
        techStack: "Python, NLP",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/DeepLearning_HW4/blob/main/DL2022_HW4_P1.ipynb"
            },
            {
                label: "Google Drive",
                type: "external",
                url: "https://colab.research.google.com/drive/1J8tHOYQWiJwNzXejRgNHKg0bFTiyDA3Y#scrollTo=pdND018suUx4"
            }
        ],
        imageLink: "images/poemGenerator.png",
        alignLeft: true
    },
    {
        projectName: "Poet Classifier",
        yearCompleted: "2023",
        description: "This project learns from poems written by 10 Iranian poets. Then, it figures out who wrote a poem you give it with appropraite accuracy. It uses Natural Language Processing (NLP) to do this.",
        techStack: "Python, NLP",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/DeepLearning_HW4/blob/main/DL2022_HW4_P3.ipynb"
            },
            {
                label: "Google Drive",
                type: "external",
                url: "https://colab.research.google.com/drive/1z1FunJkGGboigBywe1URjfj4qiVuETEC#scrollTo=8vh19CH3g6eb"
            }
        ],
        imageLink: "images/poetClass.png",
        alignLeft: false
    },
    {
        projectName: "Comparing MLP and CNN",
        yearCompleted: "2022",
        description: "This project compares MLP and CNN models for image classification by training both models, evaluating their performance, and visualizing results. It also explores optimization techniques like dropout and kernel factorization.",
        techStack: "Python, CNN, MLP",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/DeepLearning_HW3/blob/main/DL2022_HW3_P1.ipynb"
            },
            {
                label: "Kaggle",
                type: "external",
                url: "https://www.kaggle.com/datasets/hasibalmuzdadid/shoe-vs-sandal-vs-boot-dataset-15k-images"
            }
        ],
        imageLink: "images/shoeClassifier.png",
        alignLeft: true
    },
    {
        projectName: "Knowledge Distillation for DNN",
        yearCompleted: "2022",
        description: "This project trains smaller neural networks using knowledge distillation from larger models, achieving high accuracy with limited resources. It evaluates performance using metrics and techniques like fine-tuning and dropout.",
        techStack: "Python, CNN",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/DeepLearning_HW3/blob/main/DL2022_HW3_P2.ipynb"
            },
            {
                label: "Orginal Project",
                type: "external",
                url: "https://intellabs.github.io/distiller/knowledge_distillation.html"
            }
        ],
        imageLink: "images/KnoledgeDistillation.png",
        alignLeft: false
    },
    {
        projectName: "Neural Network from Scratch",
        yearCompleted: "2022",
        description: "This project involves building a neural network from scratch using PyTorch and the Fashion-MNIST dataset, training it with SGD, and evaluating accuracy.",
        techStack: "Python, Neural Network",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/DeepLearning_HW3/blob/main/DL2022_HW2_P1.ipynb"
            },
            {
                label: "Dataset",
                type: "external",
                url: "https://github.com/zalandoresearch/fashion-mnist/tree/master/"
            }
        ],
        imageLink: "images/Strach.png",
        alignLeft: true
    },
    {
        projectName: "Predicting World Cup Results",
        yearCompleted: "2022",
        description: "This project predicts Iran's results in the 2022 World Cup group stage using historical match data and a neural network built with PyTorch, aiming for at least 60% accuracy.",
        techStack: "Python, Neural Network, Data Analyze",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/DeepLearning_HW3/blob/main/DL2022_HW2_P2.ipynb"
            }
        ],
        imageLink: "images/FWC.png",
        alignLeft: false
    },
    {
        projectName: "Hand Gesture Recognition",
        yearCompleted: "2022",
        description: "Analyze hand movements to train an MLP for Latin letter recognition using CSV data. Test SGD and ADAM optimizers, add dropout, and aim for 75% test accuracy. Test with webcam inputs.",
        techStack: "Python, Image Recognition",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/DeepLearning_HW3/blob/main/DL2022_HW2_P3.ipynb"
            }
        ],
        imageLink: "images/Alphabet.png",
        alignLeft: true
    },
    {
        projectName: "Designing Recommender System",
        yearCompleted: "2022",
        description: "Matrix factorization improves recommendations by analyzing user-item interactions through latent factors. Methods like SVD predict preferences from sparse data, enhancing personalization and accuracy in recommendations.",
        techStack: "Python, Matrix Factorization",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/DeepLearning_HW1/blob/main/DL2022-HW1-P1.ipynb"
            },
            {
                label: "Orginal Research",
                type: "file",
                url: "https://datajobs.com/data-science-repo/Recommender-Systems-[Netflix].pdf"
            }
        ],
        imageLink: "images/RS.png",
        alignLeft: false
    },
    {
        projectName: "Prokudin-Gorskii Images Reconstruction",
        yearCompleted: "2021",
        description: "Reconstruct color images from Prokudin-Gorskii’s black-and-white photos by aligning RGB channels. The project involves coding for color alignment and efficient image processing.",
        techStack: "Image Aligment, Image Processing",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/Image-peocessing-1/tree/main/PictureMatching-3"
            },
            {
                label: "Image Collection",
                type: "external",
                url: "https://www.loc.gov/collections/prokudin-gorskii/about-this-collection/"
            }
        ],
        imageLink: "images/ProkudinGorskii.png",
        alignLeft: true
    },
    {
        projectName: "Histogram Specification",
        yearCompleted: "2021",
        description: "This project focuses on transforming the histogram of one image to match another, enhancing detail and improving its aesthetic quality.",
        techStack: "Image Processing, Histogram",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/Image-peocessing-1/tree/main/Dark-6"
            }
        ],
        imageLink: "images/HistogramSpecification.png",
        alignLeft: false
    },
    {
        projectName: "Template Matching",
        yearCompleted: "2021",
        description: "This project matches templates within colored images. It involves scaling, edge detection, and highlighting matched templates for efficient and accurate results.",
        techStack: "Image Processing",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/Image-processing-2/tree/main/Template%20matching%20-%202"
            }
        ],
        imageLink: "images/TemplateMatching.png",
        alignLeft: true
    },
    {
        projectName: "Homography and Image Warping",
        yearCompleted: "2021",
        description: "Extract and straighten book covers from a given image by selecting corner points, computing the homography matrix, and applying it to warp the images.",
        techStack: "Image Processing",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/Image-processing-2/tree/main/image%20wrapping%20-%203"
            }
        ],
        imageLink: "images/ImageWrapping.png",
        alignLeft: false
    },
    {
        projectName: "Hybrid Images",
        yearCompleted: "2021",
        description: "Create hybrid images by combining two images such that one is visible up close and the other from a distance. Select image pairs, align them, apply high-pass and low-pass filters, and merge the results to produce the final hybrid image.",
        techStack: "Fourier Transform, Convolution",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/Image-processing-2/tree/main/hybrid-4"
            }
        ],
        imageLink: "images/HybridImages.png",
        alignLeft: true
    },
    {
        projectName: "Hough Transform for Line Detection",
        yearCompleted: "2021",
        description: "This project implements the Hough Transform to detect and draw lines in images, and mark corners. It involves edge detection and updating an accumulator matrix using Haugh Transform.",
        techStack: "Line Detection, Image Transform",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/Image-processing-3/tree/main/Hough-Transform"
            }
        ],
        imageLink: "images/HaughTransform.png",
        alignLeft: false
    },
    {
        projectName: "Texture Synthesis",
        yearCompleted: "2021",
        description: "This project implements texture synthesis, focusing on generating new textures through image patching and synthesis. It covers matrix adjustments, gradient handling, and optimization techniques.",
        techStack: "Dijkstra's algorithm",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/Image-processing-3/tree/main/Texture-Synthesis"
            }
        ],
        imageLink: "images/TexrureSyntesis.png",
        alignLeft: true
    },
    {
        projectName: "Image Completion",
        yearCompleted: "2021",
        description: "In this project we complete images by filling in missing regions. The process includes refining the filled areas, and followed by smoothing to enhance the final image quality.",
        techStack: "patch optimization",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Nikelroid/Image-processing-3/tree/main/I%E2%85%BFage-%E2%85%ADo%E2%85%BFp%E2%85%BCetion"
            }
        ],
        imageLink: "images/ImageCompletion.png",
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
