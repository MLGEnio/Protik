import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper'; 
import UserCard from "../components/ui/User/Card.jsx";
import Spline from '@splinetool/react-spline';


SwiperCore.use([Navigation]);

const colors = [
    'rgba(252, 191, 4, 0.3)',  // #FCBF04
    'rgba(161, 204, 158, 0.3)', // #A1CC9E
    'rgba(45, 189, 172, 0.3)',  // #2DBDAC
    'rgba(107, 186, 190, 0.3)', // #6BBABE
    'rgba(4, 118, 132, 0.3)'    // #047684
];

const profiles = [
    {
        title: 'Software Engineer',
        description: 'Hi, I’m Bright Dumadi...',
        fullDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        image: '/path/to/image1.png',
        matchPercentage:10,
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
        matchPercentage:75,
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
        matchPercentage:75,
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
        matchPercentage:75,
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
        matchPercentage:75,
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
        matchPercentage:20,
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
        matchPercentage:75,
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
const project = {
  name: "Project X",
  date: "Jan 7th, 2022",
  description:
    "We exist to help people get answers to questions they've not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well...",
  teamSize: 500,
  interests: ["UI Design", "UX Design", "Web Dev", "Finance"],
  members: [
    {
      name: "Bright Dumadi",
      role: "Software Engineer",
      description:
        "Hi, I'm Bright Dumadi, a Software Engineer based in Chicago, Illinois...",
      interests: ["UI Design", "UX Design"],
    },
    {
      name: "Bright Dumadi",
      role: "Software Engineer",
      description:
        "Hi, I'm Bright Dumadi, a Software Engineer based in Chicago, Illinois...",
      interests: ["UI Design", "UX Design"],
    },
    {
      name: "Elvis Obi",
      role: "User Experience Designer",
      description:
        "Hi, I'm Elvis Obi, a User Experience Designer based in Abuja, Nigeria...",
      interests: ["UI Design", "UX Design"],
    },
  ],
  preferences: {
    experience: "3+ years",
    industry: "Software Development",
    education: "Bachelor's Degree",
    personalWebsite: "https://example.com",
    sideProjects: ["Project A", "Project B"],
    remote: "Yes",
    fullTime: true,
  },
  applicants: [
    {
      name: "John Doe",
      photo: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Smith",
      photo: "https://via.placeholder.com/150",
    },
    {
      name: "Alice Johnson",
      photo: "https://via.placeholder.com/150",
    },
  ],
};

const ProjectComponent = () => {
  const [filter, setFilter] = useState("");
  
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mb-44">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-2/3">
        <div className="rounded-lg overflow-hidden">
        <Spline
              scene="https://prod.spline.design/GklWSSgGgsjJ9Pqz/scene.splinecode"
            />
        </div>
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-sm text-gray-400">{project.date}</p>
            <p className="mt-2">{project.description}</p>
            <div className="flex items-center mt-4 flex-wrap gap-2">
              <span className="text-xs bg-purple-700 py-1 px-2 rounded-full">
                Ongoing
              </span>
              <span className="text-xs bg-purple-700 py-1 px-2 rounded-full">
                {project.teamSize}+ going
              </span>
              {project.interests.map((interest, index) => (
                <span
                  key={index}
                  className="text-xs bg-purple-700 py-1 px-2 rounded-full"
                >
                  {interest}
                </span>
              ))}
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="bg-purple-600 py-2 px-4 rounded-lg">
                Join Now
              </button>
              <button className="bg-gray-700 py-2 px-4 rounded-lg">
                View Event
              </button>
            </div>
          </div>

        </div>
        <div className="md:w-1/3 md:pl-4">
          <h3 className="text-lg font-semibold mb-4">Project members</h3>
          {project.members.map((member, index) => (
            <div className="bg-gray-800 p-4 rounded-lg mb-4" key={index}>
              <div className="flex items-center mb-2">
                <img
                  src="https://via.placeholder.com/40"
                  alt={member.name}
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <h4 className="text-md font-semibold">{member.name}</h4>
                  <p className="text-sm text-gray-400">{member.role}</p>
                </div>
              </div>
              <p className="text-sm">{member.description}</p>
              <div className="flex space-x-2 mt-2">
                {member.interests.map((interest, i) => (
                  <span
                    className="bg-purple-700 py-1 px-2 rounded-full text-xs"
                    key={i}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 bg-gray-800 p-4 rounded-lg w-fit">
        <h3 className="text-lg font-semibold mb-4">Preferences</h3>
        <p className="text-sm">Experience: {project.preferences.experience}</p>
        <p className="text-sm">Industry: {project.preferences.industry}</p>
        <p className="text-sm">Education: {project.preferences.education}</p>
        <p className="text-sm">
          Personal Website:{" "}
          <a
            href={project.preferences.personalWebsite}
            className="text-purple-400 underline"
          >
            {project.preferences.personalWebsite}
          </a>
        </p>
        <p className="text-sm">
          Side Projects: {project.preferences.sideProjects.join(", ")}
        </p>
        <p className="text-sm">Remote: {project.preferences.remote}</p>
        <p className="text-sm">
          Full-time/Part-time:{" "}
          {project.preferences.fullTime ? "Full-time" : "Part-time"}
        </p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Applicants</h3>
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
                isApplicant
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectComponent;
