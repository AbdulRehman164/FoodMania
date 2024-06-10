import babel from '../assets/img/babel.png';
import css from '../assets/img/css.png';
import js from '../assets/img/js.png';
import parcel from '../assets/img/parcel.avif';
import react from '../assets/img/react.png';
import html from '../assets/img/html.png';
import foodmania from '../assets/img/foodmania.jpg';
import { useEffect, useState } from 'react';

const About = () => {
    const [isVisible, setIsvisible] = useState(false);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log(entry, 'entry');
                entry?.target?.classList?.add('animate-scroll');
                setIsvisible(true);
            }
        });
    });
    useEffect(() => {
        const aboutChilds = document.querySelectorAll('.about-child');
        aboutChilds.forEach((child) => observer.observe(child));
    });

    return (
        <div className="flex-1 px-36 py-20 flex flex-col gap-48">
            <div className="flex gap-10 about-child">
                <img
                    src={foodmania}
                    alt="foodmania"
                    className="h-[26rem] min-w-80 rounded"
                />
                <div className="pr-40 flex flex-col items-start gap-2">
                    <h1 className="text-3xl font-bold">About Us</h1>
                    <h2 className="font-bold text-lg text-orange-400">
                        Foodmania
                    </h2>
                    <p className="font-medium font-sans text-justify">
                        At FoodMania, our mission is to make discovering and
                        ordering food from the best restaurants effortless and
                        enjoyable. Using real-time updates and comprehensive
                        listings, we provide a seamless, user-friendly
                        experience. With a wide variety of cuisines and
                        restaurants to choose from, FoodMania brings a world of
                        flavors right to your doorstep. Join us and explore a
                        diverse culinary landscape with just a few clicks.
                    </p>
                    <button className="font-semibold text-white bg-orange-400 px-4 py-1 rounded-lg hover:outline hover:outline-1 hover:outline-orange-400 hover:bg-white hover:text-orange-400 transition-all">
                        Join
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-center gap-20 about-child">
                <h2 className="text-center text-4xl font-bold">
                    Built with Modren Technology
                </h2>
                <div className="flex gap-10">
                    <img src={html} alt="html" className="h-24 w-24" />
                    <img src={css} alt="css" className="h-24 w-24" />
                    <img src={js} alt="js" className="h-24 w-24" />
                    <img src={react} alt="react" className="h-24 w-24" />
                    <img src={parcel} alt="parcel" className="h-24 w-24" />
                    <img src={babel} alt="babel" className="h-24 w-24" />
                </div>
            </div>
            <div className="flex flex-col gap-12 about-child">
                <h2 className="text-center text-4xl font-bold">
                    Discover the FoodMania Advantage
                </h2>
                <div className="flex gap-5 flex-wrap justify-around">
                    <div className=" w-80">
                        <h3 className="text-xl font-bold">Wide Selection</h3>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Omnis assumenda modi veritatis, sunt maxime
                            unde totam harum accusamus impedit nobis doloremque.
                            Dolore unde, animi exercitationem ad beatae dolorem
                            rem! Voluptatibus!
                        </p>
                    </div>
                    <div className=" w-80 ">
                        <h3 className="text-xl font-bold">Real-Time Updates</h3>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Omnis assumenda modi veritatis, sunt maxime
                            unde totam harum accusamus impedit nobis doloremque.
                            Dolore unde, animi exercitationem ad beatae dolorem
                            rem! Voluptatibus!
                        </p>
                    </div>
                    <div className=" w-80">
                        <h3 className="text-xl font-bold">
                            User-Friendly Experience
                        </h3>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Omnis assumenda modi veritatis, sunt maxime
                            unde totam harum accusamus impedit nobis doloremque.
                            Dolore unde, animi exercitationem ad beatae dolorem
                            rem! Voluptatibus!
                        </p>
                    </div>
                    <div className=" w-80 ">
                        <h3 className="text-xl font-bold">Reliable Delivery</h3>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Omnis assumenda modi veritatis, sunt maxime
                            unde totam harum accusamus impedit nobis doloremque.
                            Dolore unde, animi exercitationem ad beatae dolorem
                            rem! Voluptatibus!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
