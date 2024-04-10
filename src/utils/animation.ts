import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const fadeInScroll = (element: gsap.DOMTarget, toProps?: gsap.AnimationVars) => {
    gsap.fromTo(element, {
        y: 20,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: element,
            toggleActions: 'restart reverse restart reverse',
            start: 'top 60%',
        },
        ...toProps
    });
};

export const fadeOutBackground = (imgElement: gsap.DOMTarget, firstElement: gsap.DOMTarget, lastElement: gsap.DOMTarget) => {
    gsap.to(imgElement, {
        opacity: 0,
        scrollTrigger: {
            trigger: firstElement,
            toggleActions: 'restart reverse restart reverse',
            start: 'top 85%',
            end: 'top 30%',
            scrub: true,
            onLeave: () => {
                gsap.to(imgElement, {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: lastElement,
                        toggleActions: 'restart reverse restart reverse',
                        start: 'top 85%',
                        end: 'top 0%',
                        scrub: true,
                    }
                });
            },
        },
    });
}