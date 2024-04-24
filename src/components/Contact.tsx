import {useGSAP} from "@gsap/react";
import {animateFooter} from "../utils/animation.ts";

const Contact = () => {
    useGSAP(() => {
        animateFooter();
    }, []);

    return (
        <section id={"contactSection"} className={"px-7 pt-28 w-full h-screen"}>
            <div className={"flex h-full"}>
                <div className={"h-full flex flex-col justify-end text-8xl font-bold tracking-tighter connect"}>
                    <h1 className={"uppercase"}>Let's</h1>
                    <h1 className={"uppercase"}>connect</h1>
                </div>

                <div className={"w-full"}>
                    <div className={"flex flex-col h-full justify-between"}>
                        {/* Interests section */}
                        <div className={"flex flex-col uppercase"}>
                            <p className={"text-3xl font-medium interest"}>
                                I'M ALWAYS INTERESTED ABOUT
                            </p>

                            <div className={"flex flex-col pt-4 text-[#F5EEE6] gap-3"}>
                                <div className={"flex gap-2 relative right-24"}>
                                    <button className={"interest-item"}>frontend development</button>
                                    <button className={"interest-item"}>automation</button>
                                </div>
                                <div className={"flex gap-2 relative right-9"}>
                                    <button className={"interest-item"}>cryptocurrency</button>
                                    <button className={"interest-item"}>bot development</button>
                                </div>
                                <div className={"flex gap-2 relative right-24"}>
                                    <button className={"interest-item"}>backend development</button>
                                    <button className={"interest-item"}>blockchain</button>
                                </div>
                                <div className={"flex gap-2 relative left-8 max-w-min"}>
                                    <button className={"interest-item"}>pizza</button>
                                    <button className={"interest-item"}>boorgir</button>
                                </div>
                            </div>
                        </div>


                        {/* Contact section */}
                        <div className={"pl-10 flex flex-col"}>
                            {/* Contact me button */}
                            <div className={"flex items-center gap-4 p-4"}>
                                <p className={"text-3xl font-medium footer-contact"}>ARE YOU MINDING A PROJECT?</p>
                                <button
                                    className={"bg-white text-black footer-contact"}>contact
                                    me
                                </button>
                            </div>

                            {/* Social Footer */}
                            <div
                                className={"flex justify-between gap-4 text-xl font-medium p-4 border-t border-zinc-500"}>
                                <div className={"flex gap-8"}>
                                    <a href="/" className={"footer-item"}>LINKEDIN</a>
                                    <a href="/" className={"footer-item"}>GITHUB</a>
                                    <a href="/" className={"footer-item"}>INSTAGRAM</a>
                                    <a href="/" className={"footer-item"}>TWITTER</a>
                                </div>

                                {/* all web version and credit */}
                                <div className={"flex gap-4"}>
                                    <a href="https://v1-edgarmatoto.vercel.app/" target={"_blank"} className={"footer-item"}>v1</a>
                                    <a href="/" className={"footer-item"}>credit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
