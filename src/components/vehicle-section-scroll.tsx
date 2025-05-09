"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface VehicleSectionScrollProps {
  title: string;
  description: string;
  imageSrc: { id: number; src: string }[];
}

export default function VehicleSectionScroll({
  title,
  description,
  imageSrc,
}: VehicleSectionScrollProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  // Use scroll progress to control image transitions
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to image index
  const imageIndex = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [0, 1, 2, 2]
  );

  // Update current image based on scroll
  useEffect(() => {
    const unsubscribe = imageIndex.onChange((value) => {
      setCurrentImage(Math.floor(value));
    });
    return () => unsubscribe();
  }, [imageIndex]);

  console.log("image", imageSrc);
  return (
    <section ref={sectionRef} className="min-h-[300vh] relative">
      <div className="sticky top-0 left-0 h-screen w-full flex items-center overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left side - Fixed content */}
            <div className="md:w-1/2 relative pl-4">
              <div className="border-l-2 border-gray-700 pl-8 py-4">
                <h2
                  className={`text-4xl md:text-5xl font-bold mb-4 text-white`}
                >
                  {title}
                </h2>
                <p className={`text-lg md:text-xl max-w-md text-gray-300`}>
                  {description}
                </p>
              </div>
            </div>

            {/* Right side - Scrolling images */}
            <div className="md:w-1/2 h-[400px] relative">
              {imageSrc.map((image, index) => (
                <motion.div
                  key={`image-${index}`}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{
                    opacity: currentImage === index ? 1 : 0,
                    y:
                      currentImage === index
                        ? 0
                        : currentImage > index
                        ? -100
                        : 100,
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={`${title} - Image ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
