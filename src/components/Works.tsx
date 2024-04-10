import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
    useGSAP(() => {
        gsap.to("#worksIcon", {
            rotate: 360,
            scrollTrigger: {
                trigger: "#worksIcon",
                toggleActions: 'start reverse resume reverse',
                start: 'top 100%',
                end: 'top 0%',
                scrub: true
            },
        })
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
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    {/*work image*/}
                    <img className={"bg-stone-500"} width={500} height={250} src="" alt=""/>
                </div>

                <div className={"flex items-center gap-4"}>
                    {/*work image*/}
                    <img className={"bg-stone-500"} width={500} height={250} src="" alt=""/>

                    {/* work desc */}
                    <div className={"flex flex-col"}>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>

            {/*left side works*/}
            <div className={"flex flex-col items-end gap-20 "}>
                <div className={"flex items-center gap-4"}>
                    {/* work desc */}
                    <div className={"flex flex-col"}>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    {/*work image*/}
                    <img className={"bg-stone-500"} width={500} height={250} src="" alt=""/>
                </div>

                <div className={"flex items-center gap-4"}>
                    {/*work image*/}
                    <img className={"bg-stone-500"} width={500} height={250} src="" alt=""/>

                    {/* work desc */}
                    <div className={"flex flex-col"}>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;
