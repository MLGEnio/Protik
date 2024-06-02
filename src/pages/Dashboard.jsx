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
        image: 'https://source.unsplash.com/random/800x600',
        title: 'Owned Project 1',
        date: 'Jan 7th, 2022',
        tag: 'UX Design'
    }
];

const partakingProjects = [
    {
        id: 7,
        image: 'https://source.unsplash.com/random/800x601',
        title: 'Partaking Project 1',
        date: 'Apr 5th, 2022',
        tag: 'Mobile App'
    },
    {
        id: 8,
        image: 'https://source.unsplash.com/random/800x602',
        title: 'Partaking Project 2',
        date: 'May 21st, 2022',
        tag: 'Backend Development'
    }
];

const invitations = [
    {
        id: 7,
        image: 'https://source.unsplash.com/random/800x603',
        title: 'Project Invitation 1',
        date: 'Apr 5th, 2022',
        tag: 'Mobile App'
    },
    {
        id: 8,
        image: 'https://source.unsplash.com/random/800x604',
        title: 'Project Invitation 2',
        date: 'May 21st, 2022',
        tag: 'Backend Development'
    }, {
        id: 7,
        image: 'https://source.unsplash.com/random/800x623',
        title: 'Project Invitation 1',
        date: 'Apr 5th, 2022',
        tag: 'Mobile App'
    },
    {
        id: 8,
        image: 'https://source.unsplash.com/random/800x624',
        title: 'Project Invitation 2',
        date: 'May 21st, 2022',
        tag: 'Backend Development'
    }, {
        id: 7,
        image: 'https://source.unsplash.com/random/800x613',
        title: 'Project Invitation 1',
        date: 'Apr 5th, 2022',
        tag: 'Mobile App'
    },
    {
        id: 8,
        image: 'https://source.unsplash.com/random/800x614',
        title: 'Project Invitation 2',
        date: 'May 21st, 2022',
        tag: 'Backend Development'
    }, {
        id: 7,
        image: 'https://source.unsplash.com/random/800x633',
        title: 'Project Invitation 1',
        date: 'Apr 5th, 2022',
        tag: 'Mobile App'
    },
    {
        id: 8,
        image: 'https://source.unsplash.com/random/800x634',
        title: 'Project Invitation 2',
        date: 'May 21st, 2022',
        tag: 'Backend Development'
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
                        <SwiperSlide key={index} style={{width: 'auto'}}>
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
                        <SwiperSlide key={index} style={{width: 'auto'}}>
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
                <h2 className="text-5xl text-[#B573EE] mb-4">Project Invitations</h2>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={'auto'}
                    centeredSlides={false}
                    className="mySwiper"
                >
                    {invitations.map((project, index) => (
                        <SwiperSlide key={index} style={{width: 'auto'}}>
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
