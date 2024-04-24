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

export const fadeIn = (element: gsap.DOMTarget, toProps?: gsap.AnimationVars) => {
    gsap.fromTo(element, {
        y: 20,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        ease: "power2.inOut",
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

export const animateRotationScroll = (element: gsap.DOMTarget) => {
    gsap.to(element, {
        rotate: 360,
        scrollTrigger: {
            trigger: element,
            toggleActions: 'start reverse resume reverse',
            start: 'top 100%',
            end: 'top 0%',
            scrub: true
        },
    });
}

export const animateRotation = (element: gsap.DOMTarget) => {
    gsap.to(element, {
        rotate: 360,
        duration: 2,
        repeat: -1,
        ease: "none",
    });
}

export const animateFooter = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.connect',
            toggleActions: 'restart reverse restart reverse',
            start: 'top 85%',
        },
    });

    tl.fromTo('.connect', {
        x: -50,
        opacity: 0
    }, {
        x: 0,
        duration: 0.5,
        opacity: 1,
        delay: 0.5,
    });

    tl.fromTo(".interest", {
        opacity: 0
    }, {
        ease: "power2.inOut",
        opacity: 1
    });

    tl.fromTo(".interest-item", {
        y: 30,
        opacity: 0,
    }, {
        y: 0,
        duration: 1,
        opacity: 1,
        ease: "power2.inOut",
        stagger: 0.1
    }, "-=0.5");

    tl.fromTo(".footer-contact", {
        y: 30,
        opacity: 0,
    }, {
        y: 0,
        duration: 1,
        opacity: 1,
        ease: "power2.inOut",
        stagger: 0.5
    }, "<0.5");

    tl.fromTo(".footer-item", {
        y: 30,
        opacity: 0,
    }, {
        y: 0,
        duration: 1,
        opacity: 1,
        ease: "power2.inOut",
        stagger: 0.1
    }, "-=80%")
}