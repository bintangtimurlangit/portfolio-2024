"use client";

import Image from 'next/image';

import BWB from '@/public/images/bowboxpress.png';
import MK from '@/public/images/marjinkiri.png';
import WBNJ from '@/public/images/wadahberkahnusantarajaya.png';
import KMP from '@/public/images/kudamasperkasa.png';
import MAJ from '@/public/images/maroanugrahjaya.png';
import MKN from '@/public/images/marokulinernusantara.png';

import { motion } from "framer-motion";

const images = [
    { src: BWB, alt: "Bowbo Xpress Logo" },
    { src: MK, alt: "Marjin Kiri Logo" },
    { src: WBNJ, alt: "Wadah Berkah Nusantara Logo" },
    { src: KMP, alt: "Kuda Mas Perkasa Logo" },
    { src: MAJ, alt: "Maro Anugrah Jaya Logo" },
    { src: MKN, alt: "Maro Kuliner Nusantara Logo" }
];

export const LogoTicker = () => {
    return (
        <div className="bg-[#010117] text-white py-[72px] sm:py-24">
            <div className="container">
                <h2 className='text-xl text-center text-white/70'>
                    Companies I’ve collaborated with
                </h2>
                <div className="flex overflow-hidden mt-9 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#010117,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#010117,rgb(0,0,0,0))]">
                    <motion.div
                        transition={{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        initial={{ translateX: 0}}
                        animate={{ translateX: "-50%" }}
                        className="flex gap-16 flex-none items-center pr-16"
                    >
                        {images.map(({ src, alt }) => (
                            <Image
                                key={alt}
                                src={src}
                                alt={alt}
                                className={`flex-none ${alt === "Marjin Kiri Logo" ? 'h-28 w-auto' : 'h-14 w-auto'}`}
                            />
                        ))}
                        {images.map(({ src, alt }) => (
                            <Image
                                key={alt}
                                src={src}
                                alt={alt}
                                className={`flex-none ${alt === "Marjin Kiri Logo" ? 'h-28 w-auto' : 'h-14 w-auto'}`}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
