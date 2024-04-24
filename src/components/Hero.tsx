import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {animateRotation} from "../utils/animation.ts";

const Hero = () => {
    useGSAP(() => {
        // Disable scrolling
        document.body.style.overflow = 'hidden';

        // create sequence animation
        const tl = gsap.timeline();

        // Animate logo
        animateRotation("#logo");

        // animate job name
        tl.fromTo('.job', {
            x: -50,
            opacity: 0
        }, {
            x: 0,
            duration: 0.5,
            opacity: 1,
            delay: 0.5
        });

        // animate contact button
        tl.fromTo("#contact", {
            y: 10,
            opacity: 0
        }, {
            y: 0,
            duration: 0.5,
            opacity: 1,
            delay: 1
        })

        // animate bio description
        tl.fromTo("#quote", {
            y: 20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            onComplete: () => {
                document.body.style.overflow = 'auto';
            }
        })
    }, []);

    return (
        <section className={"py-60 px-7 w-full"}>
            {/* TODO: Add logo */}
            <div id={"logo"} className={"absolute right-1/2 top-1/4"}>Logo Here</div>

            <div className={"flex justify-between gap-80"}>
                <div className={"flex flex-col gap-4"}>
                    <p className={"text-xl"}>
                        I'm a
                    </p>
                    <h1 className={"text-8xl font-extrabold job tracking-tighter"}>
                        SOFTWARE
                    </h1>
                    <h1 className={"text-8xl font-extrabold job tracking-tighter"}>
                        ENGINEER
                    </h1>
                </div>
                <div className={"flex flex-col gap-4"}>
                    {/* Hero description */}
                    <p id={"quote"} className={"indent-40 uppercase font-medium text-3xl"}>
                        I'm a Developer based in Indonesian. I have experience in various programming languages, frameworks, and tools. I'm looking for opportunities to grow as a developer and contribute to exciting projects.
                    </p>

                    {/* Contact section */}
                    <div id={"contact"} className={"text-end"}>
                        <button>
                            CONTACT ME
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;