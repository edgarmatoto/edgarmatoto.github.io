import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
    useGSAP(() => {
        // create timeline
        const tl = gsap.timeline();

        // animate navbar container
        tl.fromTo("#navbar", {
            y: -80,
            opacity: 0
        }, {
            y: 0,
            duration: 0.8,
            delay: 1,
            opacity: 1
        });

        // animate navbar content
        tl.fromTo(".navbar-content", {
            y: 50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.1
        })
    }, [])

    return (
        <header id={"navbar"} className={"w-full px-6 fixed backdrop-filter backdrop-blur-sm z-10"}>
            <div className={"flex gap-6 py-6 border-b h-full"}>
                <a className={"navbar-content"} href={"/"}>Edgar Matoto</a>
                <h1 className={"navbar-content"}>DEVELOPER</h1>
                <div className={"grow gap-1 flex justify-end"}>
                    <a className={"navbar-content"} href={"/"}>works,</a>
                    <a className={"navbar-content"} href={"/"}>about,</a>
                    <a className={"navbar-content"} href={"/"}>contact</a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;