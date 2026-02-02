import React, { useEffect, useState } from 'react';
import images from '../constant/images';

const slides = [
    {
        image: images.h1,
        text: (
            <>
                Nous donnons vie à votre vision <br />
                à travers des espaces verts uniques
            </>
        ),
    },
    {
        image: images.h3,
        text: (
            <>
                De l’idée à la réalité, <br />
                nous créons des espaces verts sur mesure
            </>
        ),
    },
];

const H1 = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`
                        absolute inset-0
                        flex items-center justify-center text-center
                        transition-opacity duration-1000
                        ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}
                    `}
                    style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Text */}
                    <h1 className="
                        relative z-10
                        max-w-4xl
                        text-white
                        text-4xl md:text-6xl
                        font-bold
                        leading-tight
                        px-6
                    ">
                        {slide.text}
                    </h1>
                </div>
            ))}

            {/* Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`
                            w-3 h-3 rounded-full
                            transition-all
                            ${current === index
                                ? "bg-green-500 scale-125"
                                : "bg-white/50"}
                        `}
                    />
                ))}
            </div>
        </section>
    );
};

export default H1;
