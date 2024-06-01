import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import UserCard from "../components/ui/User/Card.jsx";

import { motion, AnimatePresence } from 'framer-motion';
// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);
const profiles = [
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
const filterConfig = [
    { title: 'Liked'},
    { title: 'Not Liked'} ,
];


const ProfileSwiper = () => {
    const [filter, setFilter] = useState("Liked")
    const [mainFilter, setMainFilter] = useState([
        { title: 'Projects'},
        { title: 'Users'} ,
    ])
    const handleSwap = () => {
        setMainFilter([mainFilter[1], mainFilter[0]]);
    };
    const colors = [
        'rgba(252, 191, 4, 0.3)',  // #FCBF04
        'rgba(161, 204, 158, 0.3)', // #A1CC9E
        'rgba(45, 189, 172, 0.3)',  // #2DBDAC
        'rgba(107, 186, 190, 0.3)', // #6BBABE
        'rgba(4, 118, 132, 0.3)'    // #047684
    ]; return (
        <div className="py-12">
            <div className="flex items-end mb-4">
                <AnimatePresence initial={false}>
                    {mainFilter.map((item, index) => (
                        <motion.h2
                            key={item.title}
                            className={`relative flex flex-col items-center text-[#B573EE] cursor-pointer ${index ===0 ? "text-5xl mr-5" : "text-xl"}`}
                            onClick={handleSwap}
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
                            className={`bg-gray-800 mr-2 text-white py-1 px-4 rounded-full hover:bg-gray-700 focus:bg-[#B573EE] ${filter === item.title ? 'bg-gray-700' : ''}`}
                            onClick={() => setMainFilter(item.title)}
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
                // navigation
                // pagination={{ clickable: true }}
                className="mySwiper"
            >
                {profiles.map((profile, index) => (
                    <SwiperSlide key={index} style={{width: 'auto'}}>
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
