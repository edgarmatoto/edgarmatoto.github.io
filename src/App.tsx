import Navbar from "./components/Navbar.tsx";
import {bgImage} from "./utils";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import Works from "./components/Works.tsx";
import { CustomEase } from "gsap/CustomEase"
import Contact from "./components/Contact.tsx";
import { useLayoutEffect } from "react";

function App() {
    // scroll to top of page after a page transition.
    useLayoutEffect(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }, []);

    gsap.registerPlugin(CustomEase)

    useGSAP(() => {
        // animation for background image
        gsap.fromTo("#backgroundImage", {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            duration: 1.2,
            delay: 1,
        })
    }, [])

    return (
        <main>
            <img id={"backgroundImage"} className={"background-image"} src={bgImage} alt={"cat"}/>
            <Navbar />
            <Hero />
            <About />
            <Works />
            <Contact />
        </main>
    )
}

export default App
