import { FaHiking } from "react-icons/fa";
import { GiBigWave, GiCampingTent, GiJeep } from "react-icons/gi";
import Image from "next/image";

export function AboutSection() {
    return (
        <section
            className="grid grid-cols-1 md:grid-cols-12 items-center justify-center mx-auto container gap-6 px-4 md:px-0 py-16"
            aria-labelledby="about-heading"
        >
            {/* Logo & Label */}
            <div className="relative md:col-span-5 pb-8">
                <span
                    className="bg-foreground text-white px-2.5 py-1.5 text-sm font-semibold rounded-full absolute top-0"
                    id="about-heading"
                >
                    Tentang Kami
                </span>

                <div className="w-full h-64 relative flex justify-center">
                    <Image
                        src="/logo.png"
                        alt="Logo Station Adventure Puncak"
                        fill
                        priority
                        className="object-contain"
                    />
                </div>

                <div className="absolute bottom-0 flex text-sm items-center space-x-2">
                    <p className="font-light text-lg" aria-hidden="true">
                        /
                    </p>
                    <p className="font-semibold">Station Adventure Puncak</p>
                </div>
            </div>

            {/* Text & Icon */}
            <div className="md:col-span-7">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground leading-snug">
                    Menyatu dengan Alam di Jantung Puncak
                </h2>
                <p className="mt-4 md:text-lg text-subtle">
                    Station Adventure Puncak adalah destinasi petualangan alam yang
                    menawarkan pengalaman tak terlupakan. Dari trekking menantang,
                    camping seru, rafting di sungai deras, hingga offroad ekstrem —
                    semua dipandu oleh tim profesional dengan standar keselamatan tinggi.
                </p>

                <div className="mt-6 flex gap-3 items-start">
                    {/* Ikon */}
                    <div
                        className="flex -space-x-3 text-white"
                        aria-label="Fitur kegiatan wisata"
                    >
                        <div
                            className="bg-foreground rounded-full shadow p-2 text-2xl border-2 border-white"
                            title="Rafting"
                            aria-label="Rafting"
                        >
                            <GiBigWave />
                        </div>
                        <div
                            className="bg-foreground rounded-full shadow p-2 text-2xl border-2 border-white"
                            title="Trekking"
                            aria-label="Trekking"
                        >
                            <FaHiking />
                        </div>
                        <div
                            className="bg-foreground rounded-full shadow p-2 text-2xl border-2 border-white"
                            title="Camping"
                            aria-label="Camping"
                        >
                            <GiCampingTent />
                        </div>
                        <div
                            className="bg-foreground rounded-full shadow p-2 text-2xl border-2 border-white"
                            title="Offroad"
                            aria-label="Offroad"
                        >
                            <GiJeep />
                        </div>
                    </div>

                    <p className="text-sm hidden md:inline text-subtle max-w-sm sm:ml-3 mt-2 sm:mt-0">
                        Jelajahi sisi liar Puncak bersama kami — penuh tantangan, aman, dan
                        menyenangkan.
                    </p>
                </div>
            </div>
        </section>
    );
}
