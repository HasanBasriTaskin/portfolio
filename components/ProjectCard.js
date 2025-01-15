'use client';
import Image from "next/image";
import { useState } from 'react';

export default function ProjectCard({ title, description, technologies, imageUrl, projectUrl }) {
    const [isHovered, setIsHovered] = useState(false);

    const getImageSource = () => {
        if (title === "Portfolio Sitesi") return "/portfolio-site2.png";
        if (title === "Yakında") return "/comingsoon.png";
        return imageUrl;
    };

    return (
        <div
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={getImageSource()}
                    alt={title}
                    width={800}
                    height={600}
                    className={`w-full object-cover transition-transform duration-[2s] ease-in-out ${title === "Portfolio Sitesi" && isHovered ? "translate-y-[calc(-100%+256px)]" : ""
                        }`}
                    style={{
                        objectFit: 'cover',
                        objectPosition: getImageSource() === "/comingsoon.png" ? 'center' : 'top',
                        height: title === "Portfolio Sitesi" ? '200%' : '100%',
                    }}
                    priority={title === "Portfolio Sitesi"}
                />
            </div>
            <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <a
                    href={projectUrl}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                >
                    Projeyi İncele →
                </a>
            </div>
        </div>
    );
} 