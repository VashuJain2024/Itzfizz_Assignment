import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import carImage from "../assets/car.webp";
import Card from "./Card";

gsap.registerPlugin(ScrollTrigger);

export default function CarScroll() {
    const containerRef = useRef(null);
    const carRef = useRef(null);
    const textRef = useRef(null);
    const cardRef1 = useRef(null);
    const cardRef2 = useRef(null);
    const cardRef3 = useRef(null);
    const cardRef4 = useRef(null);

    useLayoutEffect(() => {
        const container = containerRef.current;
        const car = carRef.current;
        const text = textRef.current;
        const card1 = cardRef1.current;
        const card2 = cardRef2.current;
        const card3 = cardRef3.current;
        const card4 = cardRef4.current;

        const ctx = gsap.context(() => {
            gsap.set([card1, card2, card3, card4], {
                autoAlpha: 0,
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: "+=2000",
                    scrub: 0.5,
                    pin: true,
                    invalidateOnRefresh: true,
                },
            });

            tl.to(
                car,
                {
                    x: 1400,
                    ease: "none",
                    duration: 0.5,
                },
                0
            );

            tl.to(
                text,
                {
                    clipPath: "inset(0% 3% 0% 0%)",
                    ease: "none",
                    duration: 0.5,
                },
                0
            );

            tl.to(card1, { autoAlpha: 1, ease: "none", duration: 0.3 }, 0.15);
            tl.to(card3, { autoAlpha: 1, ease: "none", duration: 0.3 }, 0.25);
            tl.to(card2, { autoAlpha: 1, ease: "none", duration: 0.3 }, 0.30);
            tl.to(card4, { autoAlpha: 1, ease: "none", duration: 0.3 }, 0.35);
        }, container);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen bg-[#d1d1d1] overflow-hidden"
        >
            <Card title="Increase in pick up point use" number="58" bgColor="#eef542" top="5%" right="28%" textColor="#111" ref={cardRef1} />
            <Card title="Increase in pick up point use" number="27" bgColor="#333" top="5%" right="5%" textColor="#fff" ref={cardRef2} />
            <div className="absolute top-[35%] left-0 w-full h-[200px] bg-[#1e1e1e]">
                <div
                    ref={textRef}
                    className="absolute inset-0 w-full h-full bg-[#45db7d] flex justify-center items-center overflow-hidden z-10 whitespace-nowrap"
                    style={{
                        clipPath: "inset(0% 95% 0% 0%)",
                    }}
                >
                    <span className="text-[#111] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider pr-14 select-none">
                        WELCOME ITZFIZZ
                    </span>
                </div>
                <div
                    ref={carRef}
                    className="absolute top-[25px] left-[10px] z-20"
                >
                    <img
                        src={carImage}
                        alt="car"
                        className="h-[150px] w-[350px] object-contain scale-y-[1.3] scale-x-[1.2]"
                    />
                </div>
            </div>
            <Card title="Decreased in customer phone calls" number="23" bgColor="#6ac9ff" top="70%" right="35%" textColor="#111" ref={cardRef3} />
            <Card title="Decreased in customer phone calls" number="40" bgColor="#fa7328" top="70%" right="12.5%" textColor="#111" ref={cardRef4} />
        </section>
    );
}