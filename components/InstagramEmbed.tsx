"use client";

import { useEffect, useState, useRef } from "react";

interface InstagramEmbedProps {
    url: string;
}

export default function InstagramEmbed({ url }: InstagramEmbedProps) {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" } // Load a bit before it comes into view
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        // Load Instagram embed script if not already present
        const existingScript = document.getElementById("instagram-embed-script");
        if (!existingScript) {
            const script = document.createElement("script");
            script.id = "instagram-embed-script";
            script.src = "//www.instagram.com/embed.js";
            script.async = true;
            document.body.appendChild(script);
        }

        // Re-process embeds after a short delay to ensure DOM is ready
        const timer = setTimeout(() => {
            if ((window as any).instgrm) {
                (window as any).instgrm.Embeds.process();
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [url, isVisible]);

    // Ensure URL ends with / if it doesn't
    const embedUrl = url.endsWith("/") ? url : `${url}/`;

    return (
        <div ref={containerRef} className="flex justify-center w-full overflow-hidden rounded-xl bg-gray-50 p-1 md:p-4 min-h-[450px]">
            {isVisible ? (
                <blockquote
                    className="instagram-media w-full"
                    data-instgrm-captioned
                    data-instgrm-permalink={embedUrl}
                    data-instgrm-version="14"
                    style={{
                        background: "#FFF",
                        border: "0",
                        borderRadius: "3px",
                        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                        margin: "1px",
                        maxWidth: "540px",
                        minWidth: "326px",
                        padding: "0",
                        width: "calc(100% - 2px)",
                    }}
                >
                    <div style={{ padding: "16px" }}>
                        <a
                            href={embedUrl}
                            style={{
                                background: "#FFFFFF",
                                lineHeight: "0",
                                padding: "0 0",
                                textAlign: "center",
                                textDecoration: "none",
                                width: "100%",
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {/* Placeholder content while loading */}
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-gray-200 rounded-full mb-4 animate-pulse"></div>
                                <div className="h-4 bg-gray-200 w-48 rounded mb-2 animate-pulse"></div>
                                <div className="h-4 bg-gray-200 w-32 rounded animate-pulse"></div>
                            </div>
                        </a>
                    </div>
                </blockquote>
            ) : (
                /* Static Placeholder while not in view */
                <div className="w-full max-w-[540px] bg-white border border-gray-100 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-4">
                        <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-amber-400 to-amber-600 opacity-20"></div>
                    </div>
                    <div className="h-4 bg-gray-100 w-40 rounded mb-3"></div>
                    <div className="h-3 bg-gray-50 w-24 rounded mb-6"></div>
                    <div className="w-full space-y-3">
                        <div className="h-32 bg-gray-50 rounded-lg w-full"></div>
                        <div className="h-10 bg-gray-100 rounded-lg w-full"></div>
                    </div>
                </div>
            )}
        </div>
    );
}
