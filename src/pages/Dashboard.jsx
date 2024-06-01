import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import ProjectCard from "../components/ui/Project/Card.jsx";

SwiperCore.use([Navigation, Pagination]);

const ownedProjects = [
    {
        id: 1,
        image: '/placeholders/img.png',
        title: 'Owned Project 1',
        date: 'Jan 7th, 2022',
        tag: 'UX Design'
    },
    {
        id: 2,
        image: '/placeholders/img.png',
        title: 'Owned Project 2',
        date: 'Feb 14th, 2022',
        tag: 'Web Development'
    },
    {
        id: 3,
        image: '/placeholders/img.png',
        title: 'Owned Project 3',
        date: 'Mar 10th, 2022',
        tag: 'Graphic Design'
    },
    {
        id: 4,
        image: '/placeholders/img.png',
        title: 'Owned Project 4',
        date: 'Jan 7th, 2022',
        tag: 'UX Design'
    },
    {
        id: 5,
        image: '/placeholders/img.png',
        title: 'Owned Project 5',
        date: 'Feb 14th, 2022',
        tag: 'Web Development'
    },
    {
        id: 6,
        image: '/placeholders/img.png',
        title: 'Owned Project 6',
        date: 'Mar 10th, 2022',
        tag: 'Graphic Design'
    }
];

const partakingProjects = [
    {
        id: 7,
        image: '/placeholders/img.png',
        title: 'Partaking Project 1',
        date: 'Apr 5th, 2022',
        tag: 'Mobile App'
    },
    {
        id: 8,
        image: '/placeholders/img.png',
        title: 'Partaking Project 2',
        date: 'May 21st, 2022',
        tag: 'Backend Development'
    },
    {
        id: 9,
        image: '/placeholders/img.png',
        title: 'Partaking Project 3',
        date: 'Jun 15th, 2022',
        tag: 'DevOps'
    },
    {
        id: 10,
        image: '/placeholders/img.png',
        title: 'Partaking Project 4',
        date: 'Apr 5th, 2022',
        tag: 'Mobile App'
    },
    {
        id: 11,
        image: '/placeholders/img.png',
        title: 'Partaking Project 5',
        date: 'May 21st, 2022',
        tag: 'Backend Development'
    },
    {
        id: 12,
        image: '/placeholders/img.png',
        title: 'Partaking Project 6',
        date: 'Jun 15th, 2022',
        tag: 'DevOps'
    }
];

const Dashboard = () => {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/project/${id}`);
    };

    return (
        <div className="py-12 mb-44">
            <div className="mb-8">
                <h2 className="text-5xl text-[#B573EE] mb-4">Owned Projects</h2>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={'auto'}
                    centeredSlides={false}
                    className="mySwiper"
                >
                    {ownedProjects.map((project, index) => (
                        <SwiperSlide key={index} style={{ width: 'auto' }}>
                            <div onClick={() => handleCardClick(project.id)}>
                                <ProjectCard
                                    key={index}
                                    image={project.image}
                                    title={project.title}
                                    date={project.date}
                                    tag={project.tag}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div>
                <h2 className="text-5xl text-[#B573EE] mb-4">Partaking Projects</h2>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={'auto'}
                    centeredSlides={false}
                    className="mySwiper"
                >
                    {partakingProjects.map((project, index) => (
                        <SwiperSlide key={index} style={{ width: 'auto' }}>
                            <div onClick={() => handleCardClick(project.id)}>
                                <ProjectCard
                                    key={index}
                                    image={project.image}
                                    title={project.title}
                                    date={project.date}
                                    tag={project.tag}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Dashboard;
