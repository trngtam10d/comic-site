import React, { useEffect, useRef, useState } from "react";
import * as Framer from "framer-motion";

const LazyImage = ({
    src,
    alt,
    isAnimated = true,
    transition,
    animate,
    initial,
    className,
}) => {
    const imgRef = useRef(null);
    const [imgSrc, setImgSrc] = useState();

    useEffect(() => {
        const options = {
            threshold: 0,
            root: null,
            rootMargin: "0px",
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setImgSrc(src);
        }, options);

        if (imgRef.current) observer.observe(imgRef.current);

        return () => observer.disconnect();
    }, [imgRef, src]);

    return (
        <Framer.motion.img
            className={className}
            src={imgSrc}
            alt={alt}
            ref={imgRef}
            animate={isAnimated && animate}
            transition={isAnimated && transition}
            initial={isAnimated && initial}
        />
    );
};

export default LazyImage;