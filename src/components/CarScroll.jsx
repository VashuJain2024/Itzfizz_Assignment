import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function CarScroll() {
    const containerRef = useRef(null);
    const carRef = useRef(null);
    const textRef = useRef(null);

    useLayoutEffect(() => {
        const container = containerRef.current;
        const car = carRef.current;
        const text = textRef.current;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: "+=2000",
                    scrub: 0.5,
                    pin: true,
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
            <div className="absolute top-[35%] left-0 w-full h-[200px] bg-[#1e1e1e]">
                <div
                    ref={textRef}
                    className="absolute inset-0 w-full h-full bg-[#45db7d] flex justify-center items-center overflow-hidden z-10 whitespace-nowrap"
                    style={{
                        clipPath: "inset(0% 95% 0% 0%)",
                    }}
                >
                    <span className="text-[#111] text-9xl font-bold tracking-wider pr-14">
                        WELCOME ITZFIZZ
                    </span>
                </div>
                <div
                    ref={carRef}
                    className="absolute top-[25px] left-[40px] z-20"
                >
                    <img
                        src="/src/assets/car.webp"
                        alt="car"
                        className="h-[150px] w-[350px] object-contain scale-y-[1.3] scale-x-[1.4]"
                    />
                </div>
            </div>
        </section>
    );
}