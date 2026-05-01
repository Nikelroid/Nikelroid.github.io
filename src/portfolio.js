// --- Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true,
    onlyLanding: false,
    showOnce: true,
    thresholdOption: 0.15
}

// Splash Screen
const splashScreen = true

// --- Greeting Section ---
const greeting = {
    intro: "Hello, my name is",
    name: "Nima Kelidari",
    message: "I am a Computer Science - Artificial Intelligence Master's student at the University of Southern California (Viterbi School of Engineering) and an AI/ML Engineer with research and engineering experience across NLP, Computer Vision, Reinforcement Learning, and Robotics. I am passionate about building production-grade ML systems that solve real-world problems.",
    basedLocation: "Los Angeles, CA",
    resumeLink: "https://drive.google.com/file/d/1Mmq29q3AEOvj_eYhQgs1TlS4Ii2W_cma/view?usp=sharing",
    logo: {
        link: "images/initials.png",
        custom: true
    },
    portraitLink: 'images/portrait.jpg'
}

const socialMediaLinks = {
    email: "mailto:Kelidari.Nima@gmail.com",
    github: "https://github.com/Nikelroid",
    linkedin: "https://www.linkedin.com/in/nima-kelidari/",
    xtwitter: "https://twitter.com/Adivide2",
    facebook: "https://www.facebook.com/profile.php?id=61552144558918&mibextid=ZbWKwL",
}

// --- About Section ---
const about = {
    autobiography: [
        "Hello! I'm Nima Kelidari, a Computer Science - Artificial Intelligence Master's student at the University of Southern California's Viterbi School of Engineering. I hold a Bachelor of Science in Computer Science from Sharif University of Technology, where I spent ten months as a research assistant working with Dr. Tefagh on Computer Vision applications using Vision Transformers and 3D CNNs in generative AI pipelines.",
        "I focus on the intersection of Machine Learning and Robotics, with hands-on experience across the full ML stack — from low-level PyTorch implementations and distributed training pipelines to MLOps infrastructure (Docker, Kubernetes, MLflow, DVC, Jenkins) and full-stack deployment (FastAPI, Flask, Swift, Angular). My recent work spans Speech Emotion Recognition probing, Mixture-of-Experts steering for LLMs, and adversarial RL training against large language models.",
        "Outside of research and engineering, I served as a Teaching Assistant for 4 semesters across 6 courses at Sharif (300+ students), built and delivered TensorFlow workshops, and worked as a Technical Sales Advisor at Best Buy. I enjoy hiking, swimming, and playing video games. If you're curious to learn more, explore my projects, CV, or GitHub below."
    ],
    techStack: [
        "Python",
        "Java",
        "C++",
        "SQL",
        "PyTorch",
        "TensorFlow",
        "HuggingFace",
        "FastAPI",
        "Docker",
        "Kubernetes",
        "Google Cloud",
        "AWS",
        "MLflow",
        "ROS"
    ],
    photo1Link: "images/portrait1.jpg",
    photo2Link: "images/portrait2.jpg",
    photo3Link: "images/portrait3.jpg"
}

// --- Education Section ---
const experiences = [
    {
        position: "Master of Science in Computer Science - Artificial Intelligence",
        company: {
            name: "University of Southern California, Viterbi School of Engineering",
            location: "Los Angeles, CA"
        },
        duration: "Dec 2024 - Dec 2026",
        bulletPoints: [
            "GPA: 3.32/4.0. Building interdisciplinary expertise at the intersection of Machine Learning and Robotics through advanced coursework in AI and autonomous systems.",
            "Relevant Coursework: Applied Natural Language Processing, Multi-modal Probabilistic Learning, Web Technologies, Machine Learning, Deep Learning.",
            "Pursuing additional coursework in Robotics and NLP to align with AI/ML Engineering career goals."
        ],
        hashtags: [
            "MachineLearning",
            "DeepLearning",
            "NaturalLanguageProcessing",
            "Robotics",
            "MultiModalLearning",
            "WebTechnologies"
        ]
    },
    {
        position: "Bachelor of Science in Computer Science",
        company: {
            name: "Sharif University of Technology",
            location: "Tehran, Iran",
            link: "https://en.sharif.ir"
        },
        duration: "Sep 2019 - Feb 2024",
        bulletPoints: [
            "GPA: 3.37/4.0 overall, 3.45/4.0 in major-related courses. Completed 15+ undergraduate and graduate CS/AI courses with an average of 3.5/4.",
            "Coursework: Computer Vision, Deep Learning, Statistical Learning, Algorithm Design, Numerical Analysis, Data Structures, Image Processing, Databases, Operating Systems.",
            "Built a strong mathematical foundation through calculus, linear algebra, automata theory, probability, and statistics."
        ],
        hashtags: [
            "ComputerVision",
            "StatisticalLearning",
            "AlgorithmDesign",
            "DataStructures",
            "ImageProcessing",
            "Databases"
        ]
    }
]

// --- Professional Experience ---
const professionalExperiences = [
    {
        position: "Technical Sales Advisor",
        company: {
            name: "Best Buy Co.",
            location: "Seattle, WA"
        },
        duration: "May 2024 - Jan 2025",
        bulletPoints: [
            "Worked as a Technical PC Advisor, assisting 300+ customers in selecting suitable electronic devices while debugging issues and optimizing systems.",
            "Strengthened initiative, teamwork, and leadership skills by supporting 800+ customers and collaborating with employees and managers across the store."
        ],
        hashtags: [
            "TechnicalSupport",
            "CustomerService",
            "Teamwork",
            "Leadership"
        ]
    },
    {
        position: "Research Assistant - Computer Vision",
        company: {
            name: "Sharif University of Technology",
            location: "Tehran, Iran",
            link: "https://en.sharif.ir"
        },
        duration: "Sep 2022 - Aug 2023",
        bulletPoints: [
            "Conducted ten months of research with Dr. Tefagh, surveying innovative applications of Computer Vision as part of a 4-member team of CS students.",
            "Built generative AI pipelines using Vision Transformers and 3D Convolutional Neural Networks for advanced visual reasoning tasks.",
            "Collaborated with the team using Git, Kaggle, and HPC clusters to streamline complex machine learning experiments."
        ],
        hashtags: [
            "ComputerVision",
            "VisionTransformers",
            "GenerativeAI",
            "Research",
            "HPC"
        ]
    },
    {
        position: "Teaching Assistant and Tutor",
        company: {
            name: "Sharif University of Technology",
            location: "Tehran, Iran",
            link: "https://en.sharif.ir"
        },
        duration: "Sep 2021 - Jul 2023",
        bulletPoints: [
            "Served as Teaching Assistant for 4 semesters across 6 courses, supporting Basic Programming, Advanced Programming, Computer Fundamentals, and Machine Learning.",
            "Presented lectures, designed assignments, conducted quizzes, and graded exams and projects for 300+ students, working closely with Head TAs.",
            "Built and delivered TensorFlow workshops and diagnostic sessions for 60 students in a Machine Learning course, achieving a 65% attendance rate."
        ],
        hashtags: [
            "Teaching",
            "MachineLearning",
            "Programming",
            "Workshops",
            "Mentorship"
        ]
    }
]

// --- Featured Projects (highlighted at the top of the projects section) ---
const featuredWorks = [
    {
        projectName: "Linguistic-Agnostic Speech Emotion Recognition",
        yearCompleted: "2026",
        description: "An MLOps probing framework for Speech Emotion Recognition transformers that evaluates how acoustic emotion is encoded across 24 hidden layers. Automated parallel experiments across 6 models and 8 datasets on HPC clusters via SLURM Array, paired with a full-stack FastAPI + JavaScript dashboard for real-time layer-wise visualization.",
        techStack: "Python, PyTorch, HuggingFace, FastAPI, SLURM",
        links: [
            { label: "", type: "git", url: "https://github.com/Nikelroid/linguistic-agnostic-ser" }
        ],
        imageLink: "images/ser.png",
        alignLeft: true
    },
    {
        projectName: "Adversarial Co-Evolution of RL and LLM Agents",
        yearCompleted: "2025",
        description: "A distributed multi-core PPO training pipeline for Gin Rummy that distills strategic knowledge from large language models into RL policies. A custom three-phase curriculum learning approach prevents strategy collapse and achieves a 99.12% win rate against baselines, with an interactive Flask dashboard for live human-vs-agent testing.",
        techStack: "Python, PyTorch, Stable-Baselines3, Ollama, Flask",
        links: [
            { label: "", type: "git", url: "https://github.com/Nikelroid/adversarial-coevolution" }
        ],
        imageLink: "images/adverserial-coev.png",
        alignLeft: false
    },
    {
        projectName: "Risk-Scaled and Token-Aware Steering for MoE LLMs",
        yearCompleted: "2026",
        description: "A token-aware steering mechanism for Mixture-of-Experts language models that uses novel 3D delta tensors and custom loss optimization to dynamically scale expert activations to semantic context. Integrated into the vLLM plugin architecture, it improves alignment and safety on SQuAD entirely at inference time, eliminating expensive fine-tuning.",
        techStack: "Python, vLLM, PyTorch, HuggingFace",
        links: [
            { label: "", type: "git", url: "https://github.com/adsrivatsa/llm-steering" },
            { label: "Dataset", type: "external", url: "https://rajpurkar.github.io/SQuAD-explorer/" },
            { label: "Paper", type: "external", url: "https://arxiv.org/abs/1606.05250" }
        ],
        imageLink: "images/llm-steering.gif",
        alignLeft: true
    },
    {
        projectName: "Multi-Modal Sentiment Classification",
        yearCompleted: "2023",
        description: "A multimodal fusion network integrating RoBERTa, ViT, and wav2vec2 for sentiment prediction on image-text-audio conversations, attaining 69% accuracy. Deployed with an automated SLURM + WandB MLOps training pipeline and a FastAPI server with an interactive frontend for live predictions.",
        techStack: "Python, PyTorch, HuggingFace, FastAPI, WandB",
        links: [
            { label: "", type: "git", url: "https://github.com/Nikelroid/multimodal-sentiment-classification" },
            { label: "Dataset", type: "external", url: "https://github.com/XL2248/MSCTD" }
        ],
        imageLink: "images/multimodal.png",
        alignLeft: false
    },
    {
        projectName: "Real-Time AI Vision Assistant",
        yearCompleted: "2025",
        description: "An intelligent image analysis app that answers natural language questions about live camera input. A FastAPI backend with Google Cloud Vision and Vertex AI is deployed in Docker, supporting multimodal NLP and real-time WebSocket communication. A native Swift iOS app provides the user interface.",
        techStack: "Docker, FastAPI, Google Cloud, Swift, WebSockets",
        links: [
            { label: "Server", type: "git", url: "https://github.com/Nikelroid/qa-vision-server" },
            { label: "iOS Client", type: "git", url: "https://github.com/Nikelroid/qa-vision-ios-client" }
        ],
        imageLink: "images/qa-ui.jpeg",
        alignLeft: true
    }
]

// --- Project Categories (browse-by-area sections) ---
const workCategories = [
    {
        name: "Machine Learning & MLOps",
        emoji: "🤖",
        description: "End-to-end ML systems with production pipelines, deployment, and experiment tracking.",
        projects: [
            {
                projectName: "Hybrid Anime Recommender System",
                yearCompleted: "2025",
                description: "Hybrid recommender processing 80M+ user-anime interactions (300k users x 14k anime) using neural collaborative filtering (matrix factorization + DNN). Automated MLOps with Comet ML/DVC, Jenkins CI/CD, deployed on GKE.",
                techStack: "TensorFlow, Keras, Docker, Kubernetes, Jenkins, Comet ML, DVC",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/anime-recommender-application" }
                ]
            },
            {
                projectName: "Hotel Cancellation Detection",
                yearCompleted: "2025",
                description: "MLOps-driven application using LightGBM and Flask to predict hotel booking cancellations, with full pipeline from data ingestion to deployment.",
                techStack: "Python, LightGBM, Flask, MLflow",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/hotel-cancel-detection-application" }
                ]
            },
            {
                projectName: "Knowledge Distillation for DNNs",
                yearCompleted: "2022",
                description: "Trains compact neural networks via knowledge distillation from larger teacher models, achieving high accuracy with reduced compute through fine-tuning and dropout techniques.",
                techStack: "Python, PyTorch, CNN",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/deeplearning-classification-transferlearning" },
                    { label: "Reference", type: "external", url: "https://intellabs.github.io/distiller/knowledge_distillation.html" }
                ]
            },
            {
                projectName: "Comparing MLP and CNN Architectures",
                yearCompleted: "2022",
                description: "Comparative study of MLP vs. CNN for image classification, exploring optimization techniques like dropout, kernel factorization, and architectural ablations.",
                techStack: "Python, PyTorch, CNN, MLP",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/deeplearning-classification-projects" },
                    { label: "Dataset", type: "external", url: "https://www.kaggle.com/datasets/hasibalmuzdadid/shoe-vs-sandal-vs-boot-dataset-15k-images" }
                ]
            },
            {
                projectName: "Neural Network from Scratch",
                yearCompleted: "2022",
                description: "Built a neural network from scratch using PyTorch on Fashion-MNIST, training with SGD and evaluating across multiple optimization regimes.",
                techStack: "Python, PyTorch",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/deeplearning-classification-projects" },
                    { label: "Dataset", type: "external", url: "https://github.com/zalandoresearch/fashion-mnist/" }
                ]
            },
            {
                projectName: "Predicting World Cup 2022 Results",
                yearCompleted: "2022",
                description: "Predicts Iran's results in the 2022 World Cup group stage from historical match data using a neural network built in PyTorch, targeting 60%+ accuracy.",
                techStack: "Python, PyTorch, Data Analysis",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/deeplearning-classification-projects" }
                ]
            },
            {
                projectName: "Hand Gesture Recognition",
                yearCompleted: "2022",
                description: "MLP trained on hand-movement CSV data for Latin letter recognition. Compared SGD and ADAM optimizers with dropout, validated against live webcam input.",
                techStack: "Python, MLP, OpenCV",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/deeplearning-classification-projects" }
                ]
            },
            {
                projectName: "Matrix Factorization Recommender System",
                yearCompleted: "2022",
                description: "Recommender using matrix factorization with latent factors and SVD-based methods to predict user preferences from sparse interaction data.",
                techStack: "Python, NumPy, Matrix Factorization",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/classic-ml-algorithms-implementation" },
                    { label: "Reference", type: "file", url: "https://datajobs.com/data-science-repo/Recommender-Systems-[Netflix].pdf" }
                ]
            },
            {
                projectName: "Classic ML Algorithms",
                yearCompleted: "2022",
                description: "Educational implementations of classic ML algorithms including music recommendation, heart disease classification, and regression models.",
                techStack: "Python, scikit-learn, Pandas",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/classic-ml-algorithms-implementation" }
                ]
            }
        ]
    },
    {
        name: "Natural Language Processing & Deep Learning",
        emoji: "🧠",
        description: "NLP and sequence-modeling projects from Persian language tasks to image captioning.",
        projects: [
            {
                projectName: "Image Caption Generator",
                yearCompleted: "2023",
                description: "Image captioning system combining CNN feature extractors with LSTM and GRU decoders, integrating computer vision and NLP for automatic caption generation.",
                techStack: "Python, PyTorch, CNN, LSTM, GRU",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/deeplearning-nlp-vision-projects" }
                ]
            },
            {
                projectName: "Ferdousi Poem Generator",
                yearCompleted: "2023",
                description: "Generates poems in the style of Ferdousi (a famous Persian poet) using LSTM and GRU sequence models trained on a Persian poetry corpus.",
                techStack: "Python, NLP, LSTM, GRU",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/deeplearning-nlp-vision-projects" }
                ]
            },
            {
                projectName: "Persian Poet Classifier",
                yearCompleted: "2023",
                description: "Classifies poems by author across 10 Iranian poets using NLP techniques and sequence models, achieving high accuracy on held-out verses.",
                techStack: "Python, NLP, RNN",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/deeplearning-nlp-vision-projects" }
                ]
            },
            {
                projectName: "Persian Poems Corpus",
                yearCompleted: "2023",
                description: "Curated and preprocessed corpus of Persian poems including stopword lists, prepared for downstream NLP tasks like generation and classification.",
                techStack: "Python, NLP",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/Persian_poems_corpus" }
                ]
            }
        ]
    },
    {
        name: "Computer Vision & Image Processing",
        emoji: "👁️",
        description: "Classical and deep learning approaches to vision: detection, segmentation, stitching, and reconstruction.",
        projects: [
            {
                projectName: "Image Compression via SVD and FFT",
                yearCompleted: "2024",
                description: "Lossy image compression combining Singular Value Decomposition and Fast Fourier Transform to dramatically reduce file size with minimal perceptual loss.",
                techStack: "Python, OpenCV, MATLAB, LaTeX",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/image-compression-svd-fft" }
                ]
            },
            {
                projectName: "AlexNet Scene Recognition",
                yearCompleted: "2024",
                description: "Comparative study of scene classification using various AlexNet configurations in PyTorch, including transfer learning and feature extraction strategies.",
                techStack: "Python, PyTorch, AlexNet",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/alexnet-scene-recognition" }
                ]
            },
            {
                projectName: "Scene Recognition with Bag of Visual Words",
                yearCompleted: "2024",
                description: "Scene recognition pipeline using SIFT descriptors and Bag of Visual Words, with epipolar geometry analysis for multi-view scenes.",
                techStack: "Python, OpenCV, SIFT, SVM",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/cv-scene-recognition-epipolar-geometry" }
                ]
            },
            {
                projectName: "Harris Corner Detection & Image Stitching",
                yearCompleted: "2024",
                description: "Implements Harris corner detection and homography-based image stitching with RANSAC for robust panorama construction.",
                techStack: "Python, OpenCV, RANSAC",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/cv-harris-homography-ransac" }
                ]
            },
            {
                projectName: "HOG-SVM Face Detector",
                yearCompleted: "2024",
                description: "Face detection pipeline using Histogram of Oriented Gradients (HOG) features with an SVM classifier, including non-maximum suppression.",
                techStack: "Python, OpenCV, scikit-learn",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/hog-svm-face-detector" }
                ]
            },
            {
                projectName: "Video Panorama Stitching",
                yearCompleted: "2024",
                description: "Constructs panoramic images from video sequences and performs background subtraction using SIFT-based homography estimation.",
                techStack: "Python, OpenCV, SIFT",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/video-panorama-stitching" }
                ]
            },
            {
                projectName: "Advanced Image Segmentation Toolkit",
                yearCompleted: "2024",
                description: "K-Means, Mean-Shift, SLIC superpixels, and GrabCut segmentation methods implemented and compared on real-world datasets.",
                techStack: "Python, OpenCV, scikit-image",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/advanced-image-segmentation-toolkit" }
                ]
            },
            {
                projectName: "Advanced Image Blending Techniques",
                yearCompleted: "2023",
                description: "Face morphing, Poisson blending, and Laplacian stack techniques for seamless image composition.",
                techStack: "Python, OpenCV, Poisson Solver",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/advanced-image-blending-techniques" }
                ]
            },
            {
                projectName: "Prokudin-Gorskii Reconstruction",
                yearCompleted: "2021",
                description: "Reconstructs full-color images from Prokudin-Gorskii's historical black-and-white photo plates by aligning RGB channels with image-pyramid optimization.",
                techStack: "Python, NumPy, Image Alignment",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/visionlab-fundamentals" },
                    { label: "Collection", type: "external", url: "https://www.loc.gov/collections/prokudin-gorskii/about-this-collection/" }
                ]
            },
            {
                projectName: "Histogram Specification",
                yearCompleted: "2021",
                description: "Transforms the histogram of one image to match another to enhance detail and visual quality through histogram matching.",
                techStack: "Python, OpenCV",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/visionlab-fundamentals" }
                ]
            },
            {
                projectName: "Template Matching",
                yearCompleted: "2021",
                description: "Template matching across colored images with multi-scale support, edge detection, and accurate match highlighting.",
                techStack: "Python, OpenCV",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/advanced-image-processing-techniques" }
                ]
            },
            {
                projectName: "Homography & Image Warping",
                yearCompleted: "2021",
                description: "Extracts and rectifies book covers from photographs by selecting corner points, computing the homography matrix, and warping images.",
                techStack: "Python, OpenCV, Linear Algebra",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/advanced-image-processing-techniques" }
                ]
            },
            {
                projectName: "Hybrid Images",
                yearCompleted: "2021",
                description: "Combines two images with high-pass and low-pass filters in the frequency domain so that one is visible up close and another from far away.",
                techStack: "Python, FFT, Convolution",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/advanced-image-processing-techniques" }
                ]
            },
            {
                projectName: "Hough Transform for Line Detection",
                yearCompleted: "2021",
                description: "Implements the Hough Transform for line and corner detection by accumulating votes in parameter space after edge detection.",
                techStack: "Python, OpenCV, Hough Transform",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/visioncraft-synthesis-hough" }
                ]
            },
            {
                projectName: "Texture Synthesis",
                yearCompleted: "2021",
                description: "Patch-based texture synthesis with Dijkstra's algorithm for optimal seam selection and gradient handling for visually coherent results.",
                techStack: "Python, Dijkstra's Algorithm",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/visioncraft-synthesis-hough" }
                ]
            },
            {
                projectName: "Image Completion / Inpainting",
                yearCompleted: "2021",
                description: "Completes images by filling in missing regions through patch-based texture synthesis followed by smoothing for high-quality results.",
                techStack: "Python, Patch Optimization",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/visioncraft-synthesis-hough" }
                ]
            }
        ]
    },
    {
        name: "Full-Stack & Application Development",
        emoji: "📱",
        description: "End-to-end web and mobile applications with backend, frontend, and database integration.",
        projects: [
            {
                projectName: "Artist Explorer App",
                yearCompleted: "2025",
                description: "Three-part full-stack progression: Python Flask + vanilla JS, Angular TypeScript with Node.js + MongoDB Atlas, and Android Kotlin with Jetpack Compose. Features artist search, authentication, and favorites via Artsy API. (Codes are private — contact for access.)",
                techStack: "Flask, Angular, TypeScript, Node.js, MongoDB, Kotlin, Jetpack Compose",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/artist-explorer-app" }
                ]
            },
            {
                projectName: "QA Vision iOS Client",
                yearCompleted: "2025",
                description: "SwiftUI iOS client for the Real-Time AI Vision Assistant, featuring camera streaming, animations, and an interactive activity suggester.",
                techStack: "Swift, SwiftUI, WebSockets",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/qa-vision-ios-client" }
                ]
            },
            {
                projectName: "MySQL Metadata Manager",
                yearCompleted: "2024",
                description: "Python GUI tool using Tkinter and MySQL to reverse-engineer and manage database schema metadata. Imports/exports schema definitions and supports row-level manipulation.",
                techStack: "Python, MySQL, Tkinter",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/mysql-metadata-manager" }
                ]
            }
        ]
    },
    {
        name: "Systems, Networking & Algorithms",
        emoji: "💻",
        description: "Low-level systems work, distributed networking, and classical algorithm implementations.",
        projects: [
            {
                projectName: "P2P File Sharer (Torrent Simulation)",
                yearCompleted: "2023",
                description: "Multi-threaded peer-to-peer file sharing application using TCP sockets with a central tracker for indexing. Simulates a Torrent-like network with peer discovery and detailed logs.",
                techStack: "Python, TCP/UDP, Sockets, Multithreading",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/p2p-file-sharer" }
                ]
            },
            {
                projectName: "Mininet Floodlight SDN Controller",
                yearCompleted: "2023",
                description: "Custom 8-switch Mininet topology with an advanced Floodlight controller implementing K-shortest path routing for software-defined networking.",
                techStack: "Java, Mininet, Floodlight, OpenFlow",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/mininet-floodlight-controller" }
                ]
            },
            {
                projectName: "Threadpool Job Runner",
                yearCompleted: "2022",
                description: "Custom Java thread pool with resource-aware job scheduling, priority queues, and dynamic worker scaling.",
                techStack: "Java, Concurrency, Thread Pools",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/threadpool-jobrunner" }
                ]
            },
            {
                projectName: "MIPS Stack Machine",
                yearCompleted: "2022",
                description: "Custom stack machine implemented in MIPS Assembly, supporting expression evaluation and a custom calling convention.",
                techStack: "MIPS Assembly",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/mips-stack-machine" }
                ]
            },
            {
                projectName: "Huffman Encoder/Decoder",
                yearCompleted: "2022",
                description: "Lossless and lossy Huffman coding implementation for text compression, including frequency analysis and tree serialization.",
                techStack: "Java, Huffman Coding",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/huffman-encoder-decoder" }
                ]
            },
            {
                projectName: "DFA Minimization Toolkit",
                yearCompleted: "2022",
                description: "Theory of Computation toolkit for linear grammar parsing and DFA minimization, with visualization of the resulting automaton.",
                techStack: "Java, Automata Theory",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/linear-grammar-dfa-minimization" }
                ]
            },
            {
                projectName: "Algorithm Design Assignments",
                yearCompleted: "2022",
                description: "Python implementations for advanced Algorithm Design problems covering Computational Geometry, Graph Theory, and dynamic programming.",
                techStack: "Python, Algorithms",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/algorithm-design-assignments" }
                ]
            },
            {
                projectName: "Advanced Algorithmic Solutions",
                yearCompleted: "2022",
                description: "Curated Python solutions for advanced algorithmic challenges spanning competitive programming and academic problem sets.",
                techStack: "Python, Algorithms",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/advanced-algorithmic-design-questions-solutions" }
                ]
            }
        ]
    },
    {
        name: "Games & Interactive",
        emoji: "🎮",
        description: "Game implementations exploring AI, multiplayer architecture, and game-engine fundamentals.",
        projects: [
            {
                projectName: "Sea Battle Multiplayer Game",
                yearCompleted: "2021",
                description: "Multiplayer Sea Battle game with client-server architecture, account creation, hosted matches, spectator mode, leaderboard, and live game-status views.",
                techStack: "Java, JavaFX, Server-Socket, CSS",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/sea-battle-game" }
                ]
            },
            {
                projectName: "Arkanoid FX",
                yearCompleted: "2021",
                description: "JavaFX clone of the classic Arkanoid arcade game with power-ups, save/load functionality, scoreboard, and a variety of brick types.",
                techStack: "Java, JavaFX",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/arkanoid-fx" }
                ]
            },
            {
                projectName: "Pac-Nam (C++ Pac-Man)",
                yearCompleted: "2021",
                description: "Pac-Man-style game in C++ with BFS-based ghost AI, level loading, and a custom rendering loop.",
                techStack: "C, C++, BFS",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/pac-nam-cpp" }
                ]
            }
        ]
    },
    {
        name: "Nwitter — Social Network Suite",
        emoji: "🐦",
        description: "Multi-component social network platform with backend, JavaFX clients, CLI, and chatbot extensions.",
        projects: [
            {
                projectName: "Nwitter Backend Server",
                yearCompleted: "2022",
                description: "Java backend for the Nwitter social network with MongoDB integration, user authentication, post timelines, and a REST API for clients and bots.",
                techStack: "Java, MongoDB, REST",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/nwitter-backend-server" }
                ]
            },
            {
                projectName: "Nwitter Frontend Client",
                yearCompleted: "2022",
                description: "JavaFX desktop client for Nwitter with offline support, message caching, and a polished social-feed interface.",
                techStack: "Java, JavaFX",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/nwitter-frontend-client" }
                ]
            },
            {
                projectName: "Graphical Nwitter (JavaFX)",
                yearCompleted: "2022",
                description: "Alternative graphical Nwitter desktop client built with JavaFX, with a focus on UI animation and component composition.",
                techStack: "Java, JavaFX",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/graphical_nwitter" }
                ]
            },
            {
                projectName: "Nwitter Offline CLI",
                yearCompleted: "2022",
                description: "Terminal-based Nwitter client with JSON persistence, offline composing, and command-line interaction patterns.",
                techStack: "Java, JSON",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/nwitter-offline-cli" }
                ]
            },
            {
                projectName: "XO Game Bot Extension",
                yearCompleted: "2022",
                description: "Tic-Tac-Toe bot for the Nwitter platform with dynamic board rendering and turn-based interactions over messages.",
                techStack: "Java, Bot API",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/xo-game-bot-extention" }
                ]
            },
            {
                projectName: "Calculator Bot Extension",
                yearCompleted: "2022",
                description: "Math-expression parser bot for Nwitter that evaluates user-submitted expressions and supports an extensible operator set.",
                techStack: "Java, Parsing",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/calculator-bot-extention" }
                ]
            },
            {
                projectName: "Vote Bot Extension",
                yearCompleted: "2022",
                description: "Interactive polling bot for Nwitter, allowing users to create polls, vote, and view real-time tallies.",
                techStack: "Java, Bot API",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/vote-bot-extention" }
                ]
            }
        ]
    },
    {
        name: "Statistics & Data Analysis",
        emoji: "📊",
        description: "Statistical modeling and exploratory analysis projects in R.",
        projects: [
            {
                projectName: "Iran COVID-19 Mortality Analysis",
                yearCompleted: "2023",
                description: "Linear regression analysis estimating excess mortality across 31 Iranian provinces by predicting pre-COVID mortality from historical data and comparing against observed values.",
                techStack: "R, HTML, CSV",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/provinces-covid-mortality-analysis" },
                    { label: "Dataset", type: "external", url: "https://d-learn.ir/iranprovs_mortality_monthly/" }
                ]
            },
            {
                projectName: "Diabetes Prediction (USA)",
                yearCompleted: "2023",
                description: "Comparative analysis of ML models (decision trees, random forests, neural networks, KNN) on a balanced diabetes dataset, with feature selection on BMI, blood pressure, and age.",
                techStack: "R, Markdown",
                links: [
                    { label: "", type: "git", url: "https://github.com/Nikelroid/diabetes-prediction" }
                ]
            }
        ]
    }
]

const archiveLink = "https://github.com/Nikelroid?tab=repositories"

// --- Contact Section ---
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Currently seeking AI/ML Engineering internships and full-time roles starting 2026, with a focus on Applied ML, NLP, Robotics, and MLOps.",
            "Also open to research collaborations, startup ideas, and professional connections — feel free to reach out."
        ],
        link: {
            email: "Kelidari.Nima@gmail.com",
            other: ""
        },
        responseTimeMessage: "...and I'll respond as soon as possible"
    },
    formEmbedLink: ""
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    professionalExperiences,
    featuredWorks,
    workCategories,
    archiveLink,
    contact
}
