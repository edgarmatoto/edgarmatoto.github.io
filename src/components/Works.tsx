import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {animateRotationScroll, fadeIn} from "../utils/animation.ts";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
    const scrollTrigger = (element: gsap.DOMTarget): object => {
        return {
            trigger: element,
            toggleActions: 'restart reverse restart reverse',
            start: 'top 80%',
        }
    }

    useGSAP(() => {
        animateRotationScroll("#worksIcon");

        // loop through all work
        for (let i = 0; i < 4; i++) {
            fadeIn(`.work-${i+1}`, {
                scrollTrigger: scrollTrigger(`.work-${i+1}`),
                stagger: 0.1,
            });
        }
    })

    return (
        <section className={"py-48 px-52 flex flex-col gap-16"}>
            {/*Works section header*/}
            <div className={"flex gap-4"}>
                {/* TODO: place some icon */}
                <div id={"worksIcon"}>Icons</div>
                <h1 className={"uppercase text-2xl font-medium"}>My works</h1>
            </div>

            {/*right side works*/}
            <div className={"flex flex-col gap-20"}>
                <div className={"flex items-center gap-4"}>
                    {/* work desc */}
                    <div className={"flex flex-col"}>
                        <h2 className={"work-1"}>Lorem Ipsum</h2>
                        <p className={"work-1"}>Lorem ipsum dolor sit amet.</p>
                    </div>

                    {/*work image*/}
                    <img className={"bg-stone-500 work-1"} width={500} height={250} src="" alt=""/>
                </div>

                <div className={"flex items-center gap-4"}>
                    {/*work image*/}
                    <img className={"bg-stone-500 work-2"} width={500} height={250} src="" alt=""/>

                    {/* work desc */}
                    <div className={"flex flex-col"}>
                        <h2 className={"work-2"}>Lorem Ipsum</h2>
                        <p className={"work-2"}>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>

            {/*left side works*/}
            <div className={"flex flex-col items-end gap-20"} >
                <div className={"flex items-center gap-4"}>
                    {/* work desc */}
                    <div className={"flex flex-col"}>
                        <h2 className={"work-3"}>Lorem Ipsum</h2>
                        <p className={"work-3"}>Lorem ipsum dolor sit amet.</p>
                    </div>

                    {/*work image*/}
                    <img className={"bg-stone-500 work-3"} width={500} height={250} src="" alt=""/>
                </div>

                <div className={"flex items-center gap-4"}>
                    {/*work image*/}
                    <img className={"bg-stone-500 work-4"} width={500} height={250} src="" alt=""/>

                    {/* work desc */}
                    <div className={"flex flex-col"}>
                        <h2 className={"work-4"}>Lorem Ipsum</h2>
                        <p className={"work-4"}>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;
