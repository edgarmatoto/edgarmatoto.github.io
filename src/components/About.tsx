import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {fadeIn, fadeOutBackground} from "../utils/animation.ts";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        const scrollTrigger = (element: gsap.DOMTarget): object => {
            return {
                trigger: element,
                toggleActions: 'restart reverse restart reverse',
                start: 'top 60%',
            }
        }

        // animate background image
        fadeOutBackground("#backgroundImage", "#about", "#contactSection");

        // animate about title
        fadeIn(".about", {
            scrollTrigger: scrollTrigger(".about"),
            stagger: 1,
        });

        // animate first-line about description
        fadeIn(".about-desc-1", {
            scrollTrigger: scrollTrigger(".about-desc-1"),
        });

        // animate about description
        fadeIn(".about-desc", {
            scrollTrigger: scrollTrigger(".about-desc"),
        });
    }, [])

    return (
        <section id={"about"} className={"px-32 py-14"}>
            <div className={"flex flex-col"}>
                <h1 className={"p-0 m-0 text-6xl uppercase tracking-tighter about"}>Hello, I am Edgar</h1>
                <h2 className={"p-0 m-0 -top-3.5 relative about"}>Edgar Matoto</h2>
            </div>

            <div className={"flex justify-between items-center py-5"}>
                <div className={"text-3xl font-medium w-1/2"}>
                    <p className={"indent-40 about-desc-1"}>Lorem ipsum dolor sit amet,</p>
                    <p className={"about-desc"}>
                        consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                {/*    TODO: place a 3D Object  */}
                <h1>3D OBJECT HERE...</h1>
            </div>

        </section>
    );
};

export default About;