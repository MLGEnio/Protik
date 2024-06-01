import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import UserCard from "../components/ui/User/Card.jsx";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);
const profiles = [
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
    return (
        <div className="py-12">
            <div className="flex mb-4">
                {filterConfig.map((item) => (
                    <div key={item.title} className="relative flex flex-col items-center">
                        <button
                            className={`bg-gray-800 mr-2 text-white py-1 px-4 rounded-full hover:bg-gray-700 focus:bg-[#B573EE] ${filter === item.title ? 'bg-gray-700' : ''}`}
                            onClick={() => setFilter(item.title)}
                        >
                            {item.title}
                        </button>
                    </div>
                ))}
            </div>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                navigation
                pagination={{clickable: true}}
                className="mySwiper"
            >
                {profiles.map((profile, index) => (
                    <SwiperSlide key={index}>
                        <UserCard
                            key={profile.title}
                            title={profile.title}
                            filter={filter}
                            setFilter={setFilter}
                            profile={profiles[0]}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProfileSwiper;
