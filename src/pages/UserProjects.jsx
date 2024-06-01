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
                    <UserCard
                        key={item.title}
                        title={item.title}
                        filter={filter}
                        setFilter={setFilter}
                        profile={profiles[0]} // Use the appropriate profile
                    />
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
                        <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg p-6">
                            <img src={profile.image} alt={profile.title}
                                 className="w-full h-48 object-cover rounded-full mx-auto"/>
                            <h3 className="text-xl font-bold mt-4 text-center">{profile.title}</h3>
                            <p className="text-gray-400 text-center mt-2">{profile.description}</p>
                            <div className="flex justify-center mt-4 space-x-4">
                                {profile.skills.map((skill, idx) => (
                                    <span key={idx}
                                          className="bg-gray-700 rounded-full px-3 py-1 text-sm">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProfileSwiper;
