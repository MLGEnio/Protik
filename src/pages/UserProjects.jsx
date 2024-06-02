import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import UserCard from "../components/ui/User/Card.jsx";
import ProjectCard from "../components/ui/Project/Card.jsx";
import { motion, AnimatePresence } from 'framer-motion';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const filterConfig = [
    { title: 'All' },
    { title: 'Liked' },
    { title: 'Disliked' },
];

const initialProfiles = [
    {
        title: 'Software Engineer',
        description: 'Hi, I’m Bright Dumadi... Hi, I’m Bright Dumadi... Hi, I’m Bright Dumadi... Hi, I’m Bright Dumadi...',
        fullDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        image: '/path/to/image1.png',
        skills: ['github', 'javascript', 'diamond'],
        experience: [
            {
                title: 'Software Engineer',
                icon: '/path/to/icon1.png',
                location: 'San Jose, US',
                duration: 'Dec 20 - Feb 21',
            },
            {
                title: 'Software Engineer',
                icon: '/path/to/icon2.png',
                location: 'San Jose, US',
                duration: 'Dec 20 - Feb 21',
            },
        ],
        certificates: [
            {
                title: 'Certificate',
                icon: '/path/to/cert1.png',
            },
            {
                title: 'Certificate',
                icon: '/path/to/cert2.png',
            },
        ],
    },
    {
        title: 'Software Engineer',
        description: 'Hi, I’m Bright Dumadi...',
        fullDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        image: '/path/to/image1.png',
        skills: ['github', 'javascript', 'diamond'],
        experience: [
            {
                title: 'Software Engineer',
                icon: '/path/to/icon1.png',
                location: 'San Jose, US',
                duration: 'Dec 20 - Feb 21',
            },
            {
                title: 'Software Engineer',
                icon: '/path/to/icon2.png',
                location: 'San Jose, US',
                duration: 'Dec 20 - Feb 21',
            },
        ],
        certificates: [
            {
                title: 'Certificate',
                icon: '/path/to/cert1.png',
            },
            {
                title: 'Certificate',
                icon: '/path/to/cert2.png',
            },
        ],
    },
    {
        title: 'Software Engineer',
        description: 'Hi, I’m Bright Dumadi...',
        fullDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        image: '/path/to/image1.png',
        skills: ['github', 'javascript', 'diamond'],
        experience: [
            {
                title: 'Software Engineer',
                icon: '/path/to/icon1.png',
                location: 'San Jose, US',
                duration: 'Dec 20 - Feb 21',
            },
            {
                title: 'Software Engineer',
                icon: '/path/to/icon2.png',
                location: 'San Jose, US',
                duration: 'Dec 20 - Feb 21',
            },
        ],
        certificates: [
            {
                title: 'Certificate',
                icon: '/path/to/cert1.png',
            },
            {
                title: 'Certificate',
                icon: '/path/to/cert2.png',
            },
        ],
    },
    {
        title: 'Software Engineer',
        description: 'Hi, I’m Bright Dumadi...',
        fullDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        image: '/path/to/image1.png',
        skills: ['github', 'javascript', 'diamond'],
        experience: [
            {
                title: 'Software Engineer',
                icon: '/path/to/icon1.png',
                location: 'San Jose, US',
                duration: 'Dec 20 - Feb 21',
            },
            {
                title: 'Software Engineer',
                icon: '/path/to/icon2.png',
                location: 'San Jose, US',
                duration: 'Dec 20 - Feb 21',
            },
        ],
        certificates: [
            {
                title: 'Certificate',
                icon: '/path/to/cert1.png',
            },
            {
                title: 'Certificate',
                icon: '/path/to/cert2.png',
            },
        ],
    },
    {
        title: 'Software Engineer',
        description: 'Hi, I’m Bright Dumadi...',
        fullDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        image: '/path/to/image1.png',
        skills: ['github', 'javascript', 'diamond'],
        experience: [
            {
                title: 'Software Engineer',
                icon: '/path/to/icon1.png',
                location: 'San Jose, US',
                duration: 'Dec 20 - Feb 21',
            },
            {
                title: 'Software Engineer',
                icon: '/path/to/icon2.png',
                location: 'San Jose, US',
                duration: 'Dec 20 - Feb 21',
            },
        ],
        certificates: [
            {
                title: 'Certificate',
                icon: '/path/to/cert1.png',
            },
            {
                title: 'Certificate',
                icon: '/path/to/cert2.png',
            },
        ],
    },
    {
        title: 'Software Engineer',
        description: 'Hi, I’m Bright Dumadi...',
        fullDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        image: '/path/to/image1.png',
        skills: ['github', 'javascript', 'diamond'],
        experience: [
            {
                title: 'Software Engineer',
                icon: '/path/to/icon1.png',
                location: 'San Jose, US',
                duration: 'Dec 20 - Feb 21',
            },
            {
                title: 'Software Engineer',
                icon: '/path/to/icon2.png',
                location: 'San Jose, US',
                duration: 'Dec 20 - Feb 21',
            },
        ],
        certificates: [
            {
                title: 'Certificate',
                icon: '/path/to/cert1.png',
            },
            {
                title: 'Certificate',
                icon: '/path/to/cert2.png',
            },
        ],
    },
    {
        title: 'Software Engineer',
        description: 'Hi, I’m Bright Dumadi...',
        fullDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        image: '/path/to/image1.png',
        skills: ['github', 'javascript', 'diamond'],
        experience: [
            {
                title: 'Software Engineer',
                icon: '/path/to/icon1.png',
                location: 'San Jose, US',
                duration: 'Dec 20 - Feb 21',
            },
            {
                title: 'Software Engineer',
                icon: '/path/to/icon2.png',
                location: 'San Jose, US',
                duration: 'Dec 20 - Feb 21',
            },
        ],
        certificates: [
            {
                title: 'Certificate',
                icon: '/path/to/cert1.png',
            },
            {
                title: 'Certificate',
                icon: '/path/to/cert2.png',
            },
        ],
    },
    // Add more profiles as needed
];

const initialProjects = [
    {
        id: 7,
        image: 'https://source.unsplash.com/random/800x603',
        title: 'Project 1',
        date: 'Apr 5th, 2022',
        tag: 'Mobile App'
    },
    {
        id: 8,
        image: 'https://source.unsplash.com/random/800x604',
        title: 'Project 2',
        date: 'May 21st, 2022',
        tag: 'Backend Development'
    }, {
        id: 7,
        image: 'https://source.unsplash.com/random/800x623',
        title: 'Project 1',
        date: 'Apr 5th, 2022',
        tag: 'Mobile App'
    },
    {
        id: 8,
        image: 'https://source.unsplash.com/random/800x624',
        title: 'Project 2',
        date: 'May 21st, 2022',
        tag: 'Backend Development'
    }, {
        id: 7,
        image: 'https://source.unsplash.com/random/800x613',
        title: 'Project 1',
        date: 'Apr 5th, 2022',
        tag: 'Mobile App'
    },
    {
        id: 8,
        image: 'https://source.unsplash.com/random/800x614',
        title: 'Project 2',
        date: 'May 21st, 2022',
        tag: 'Backend Development'
    }, {
        id: 7,
        image: 'https://source.unsplash.com/random/800x633',
        title: 'Project 1',
        date: 'Apr 5th, 2022',
        tag: 'Mobile App'
    },
    {
        id: 8,
        image: 'https://source.unsplash.com/random/800x634',
        title: 'Project 2',
        date: 'May 21st, 2022',
        tag: 'Backend Development'
    }
];

const ProfileSwiper = () => {
    const [profiles, setProfiles] = useState(initialProfiles);
    const [projectsConfig, setProjectsConfig] = useState(initialProjects);
    const [filter, setFilter] = useState("All");
    const [mainFilterText, setMainFilterText] = useState("Projects");
    const [mainFilter, setMainFilter] = useState([
        { title: 'Projects' },
        { title: 'People' },
    ]);

    const handleSwap = (title) => {
        if (title !== mainFilter[0].title) {
            setMainFilter([mainFilter[1], mainFilter[0]]);
            setMainFilterText(title);
        }
    };

    useEffect(() => {
        let filteredProfiles = [];
        let filteredProjects = [];

        if (filter === "All") {
            filteredProfiles = initialProfiles;
            filteredProjects = initialProjects;
        } else if (filter === "Liked") {
            filteredProfiles = initialProfiles.slice(0, Math.ceil(initialProfiles.length / 2));
            filteredProjects = initialProjects.slice(0, Math.ceil(initialProjects.length / 2));
        } else if (filter === "Disliked") {
            filteredProfiles = initialProfiles.slice(Math.ceil(initialProfiles.length / 2));
            filteredProjects = initialProjects.slice(Math.ceil(initialProjects.length / 2));
        }

        setProfiles(filteredProfiles);
        setProjectsConfig(filteredProjects);
    }, [filter]);

    const colors = [
        'rgba(252, 191, 4, 0.3)',  // #FCBF04
        'rgba(161, 204, 158, 0.3)', // #A1CC9E
        'rgba(45, 189, 172, 0.3)',  // #2DBDAC
        'rgba(107, 186, 190, 0.3)', // #6BBABE
        'rgba(4, 118, 132, 0.3)',    // #047684
    ];

    return (
        <div className="py-12">
            <div className="flex items-end mb-4">
                <AnimatePresence initial={false}>
                    {mainFilter.map((item, index) => (
                        <motion.h2
                            key={item.title}
                            className={`relative flex flex-col items-center text-[#B573EE] cursor-pointer ${index === 0 ? "text-5xl mr-5" : "text-xl"}`}
                            onClick={() => handleSwap(item.title)}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            layout
                        >
                            {item.title}
                        </motion.h2>
                    ))}
                </AnimatePresence>
            </div>

            <div className="flex mb-4">
                {filterConfig.map((item) => (
                    <div key={item.title} className="relative flex flex-col items-center">
                        <button
                            className={`bg-gray-800 mr-2 py-1 px-4 rounded-full bg-opacity-50 hover:bg-gray-700 ${filter === item.title ? 'text-[#B573EE] bg-opacity-20' : 'text-white'}`}
                            onClick={() => setFilter(item.title)}
                        >
                            {item.title}
                        </button>
                    </div>
                ))}
            </div>

            <Swiper
                spaceBetween={10}
                slidesPerView={'auto'}
                centeredSlides={false}
                className="mySwiper"
            >
                {mainFilterText === "Projects" ?
                    projectsConfig.map((project, index) => (
                        <SwiperSlide key={index} style={{ width: 'auto' }}>
                            <ProjectCard
                                key={index}
                                image={project.image || sampleImage} // Provide a default image if none is specified
                                title={project.title}
                                date={project.date}
                                tag={project.tag}
                            />
                        </SwiperSlide>
                    ))
                    :
                    profiles.map((profile, index) => (
                        <SwiperSlide key={index} style={{ width: 'auto' }}>
                            <UserCard
                                key={profile.title}
                                title={profile.title}
                                filter={filter}
                                setFilter={setFilter}
                                profile={profile}
                                backgroundColor={colors[index % colors.length]}
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default ProfileSwiper;
