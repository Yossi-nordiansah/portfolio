"use client"
import { useState, useEffect } from "react";
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Project = () => {

    const [settings] = useState({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true, // ✅ tambahkan ini
        centerPadding: "0px", // ✅ dan ini
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: true,
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerMode: true,
                    centerPadding: "0px",
                },
            },
        ],
    });

    const [projects] = useState([
        {
            id: 1,
            title: 'Task Tracker',
            category: 'CRUD App',
            description: 'The Task Tracker App is a streamlined web application built with React.js designed to help users manage daily activities through features like task creation, deletion, and reminder toggling. It utilizes a component-based architecture and React Hooks (useState, useEffect) for dynamic state management, paired with JSON Server as a mock backend to simulate RESTful API interactions for data persistence',
            repo: 'https://github.com/Yossi-nordiansah/task-tracker-App',
            page: 'https://loquacious-horse-45d5f2.netlify.app/',
            img: '/images/task-tracker.png'
        },
        {
            id: 2,
            title: 'Books App',
            category: 'CRUD App',
            description: "The Books App is a modern web-based library management system built using the React.js library. For its styling, the project utilizes Tailwind CSS, ensuring a highly responsive and utility-first design approach. It leverages React's core features such as Hooks (useState, useEffect) for efficient state management and data persistence, likely integrated with LocalStorage or an external API to manage the book collection dynamically",
            repo: 'https://github.com/Yossi-nordiansah/task-tracker-App',
            page: 'https://yossi-nordiansah.github.io/books-app//',
            img: "/images/books-app.png"
        },
        {
            id: 3,
            title: 'Password Generator',
            category: 'Generate App',
            description: "The Password Generator is a functional utility application developed with React.js and styled using Tailwind CSS. This combination allows for a clean, modern interface with customized UI components. The application utilizes React's State Management to handle user preferences—such as password length and character complexity—generating secure, random strings instantly on the client side with a focus on performance and clean code",
            repo: 'https://github.com/Yossi-nordiansah/password-generator',
            page: 'https://yossi-nordiansah.github.io/password-generator/',
            img: "/images/password-generator.png"
        },
        {
            id: 4,
            title: 'Calculator',
            category: 'Calculator',
            description: "The Calculator is a re-imagined digital arithmetic tool built on the React.js framework. By using Tailwind CSS for its layout, the app achieves a sleek and responsive design that works across various screen sizes. The logic is handled through a component-based architecture, where React's Event Handling and State are used to process mathematical operations in real-time, providing a seamless and interactive user experience",
            repo: 'https://github.com/Yossi-nordiansah/kalkulator',
            page: 'https://yossi-nordiansah.github.io/kalkulator/',
            img: "/images/calculator.png"
        },
        {
            id: 5,
            title: 'Dapur Minang',
            category: 'Restaurant Landing Page',
            description: "The dapur-minang project is a culinary catalog platform developed using React.js to showcase Minangkabau's culinary heritage through a dynamic and modular interface. By leveraging component-based architecture, the application offers optimal performance and reactive data management, making it a modern and efficient web application for users",
            repo: 'https://github.com/Yossi-nordiansah/dapur-minang',
            page: 'https://yossi-nordiansah.github.io/dapur-minang/',
            img: "/images/dapurMinang.png"
        },
        {
            id: 6,
            title: 'Netflix Clone',
            category: 'Landing Page',
            description: 'The netplix project is a movie catalog application built with React.js and styled using Tailwind CSS to create a modern, responsive user interface. Unlike applications that rely on external APIs, this project focuses on managing local data efficiently to display movie lists, emphasizing precise UI design and clean component-based architecture',
            repo: 'https://github.com/Yossi-nordiansah/netplix',
            page: 'https://yossi-nordiansah.github.io/netplix/',
            img: "/images/netflix.png"
        },
        {
            id: 7,
            title: 'YN Movie',
            category: 'Information System',
            description: 'The yn_movie project is a dynamic movie search application developed using React.js and Tailwind CSS. By integrating the OMDb API via Axios, the app allows users to search for and display movie information in real-time. The use of the Lucide React library and React Hooks ensures the interface remains interactive, lightweight, and responsive across various devices',
            repo: 'https://github.com/Yossi-nordiansah/yn_movie',
            page: 'https://yossi-nordiansah.github.io/yn_movie/',
            img: "/images/ynmovie.png"
        },
        {
            id: 8,
            title: 'MetaVFest Prototype',
            category: 'Landing Page',
            description: 'The metavfest_prototypenew project is a festival management prototype application built with React.js, offering an immersive and modern user interface. Developed with Tailwind CSS for responsive design and the AOS library for dynamic scroll animations, the project provides an engaging visual experience. The integration of Lucide React ensures design consistency, while its component-based architecture allows for efficient management of the event registration flow',
            repo: 'https://github.com/Yossi-nordiansah/metavfest_prototypenew.git',
            page: 'https://metavfest-prototypenew.vercel.app/',
            img: "/images/metavfest.png"
        },
    ])

    return (
        <section className="pt-20 bg-gradient-to-b lg:min-h-screen lg:pb-0 pb-6 from-blue-950 to-blue-800 px-4">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl mb-6 font-bold text-center text-blue-300 font-poppins">Projects</h2>
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <div key={index} className="px-3 py-2 h-full">
                            <div className="group bg-[#0e1b34] border-2 transition-all duration-200 border-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full justify-between min-h-96">
                                <img src={project.img} alt={project.name} className="h-56 w-full object-cover mb-2" />
                                <div className='px-3'>
                                    <h1 className='text-white xl:text-2xl lg:text-[20px] xs:text-xl font-poppins font-bold underline mb-1 '>{project.title}</h1>
                                    <p className='font-semibold text-white font-inter'>{project.category}</p>
                                    <div className="relative mt-1 mb-2 overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-20 group-hover:max-h-[500px]">
                                         <p className='text-white font-inter text-justify pr-2'>
                                            {project.description}
                                        </p>
                                        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#0e1b34] to-transparent group-hover:opacity-0 transition-opacity duration-300 pointer-events-none"></div>
                                    </div>
                                </div>
                                <div className='flex gap-3 px-4 mb-2'>
                                    <a href={project.repo} target='_blank'>
                                        <button title='see repository' className='px-2 py-1 bg-yellow-500 border-2 rounded-md hover:bg-yellow-400'><img src="/icons/code.svg" alt="" /></button>
                                    </a>
                                    <a href={project.page} target='_blank'>
                                        <button title='visit site' className='px-2 py-1 bg-yellow-500 border-2 rounded-md hover:bg-yellow-400'><img src="/icons/external-link.svg" alt="" /></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Project;
