import { FaHiking } from "react-icons/fa";
import { GiBigWave, GiCampingTent, GiJeep } from "react-icons/gi";
import Image from "next/image";

export function AboutSection() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-12 items-center justify-center mx-auto container gap-6 px-4 md:px-0">
            {/* Logo & Label */}
            <div className="relative md:col-span-5 pb-8">
                <div className="absolute bottom-0 flex text-sm items-center space-x-2">
                    <p className="font-light text-lg">/</p>
                    <p className="font-semibold">Station Adventure Puncak</p>
                </div>
                <span className="bg-foreground text-white px-2.5 py-1.5 text-sm font-semibold rounded-full absolute top-0">Tentang Kami</span>
                <div className="w-full h-64 relative flex justify-center">
                    <Image
                        src="/logo.png"
                        alt="Station Adventure"
                        fill
                        priority
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Text & Icon */}
            <div className="md:col-span-7">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
                    Menyatu dengan Alam di Jantung Puncak
                </h2>
                <p className="mt-4 md:text-lg text-gray-500">
                    Station Adventure Puncak adalah destinasi petualangan alam yang menawarkan pengalaman tak terlupakan. Dari trekking menantang, camping seru, rafting di sungai deras, hingga offroad ekstrem semua dipandu oleh tim profesional dengan standar keselamatan tinggi.
                </p>

                <div className="mt-6 flex gap-3">
                    {/* Ikon berdempetan */}
                    <div className="flex -space-x-3 text-white">
                        <div className="bg-foreground rounded-full shadow p-2 text-2xl border-2 border-white">
                            <GiBigWave title="Rafting" />
                        </div>
                        <div className="bg-foreground rounded-full shadow p-2 text-2xl border-2 border-white">
                            <FaHiking title="Trekking" />
                        </div>
                        <div className="bg-foreground rounded-full shadow p-2 text-2xl border-2 border-white">
                            <GiCampingTent title="Camping" />
                        </div>
                        <div className="bg-foreground rounded-full shadow p-2 text-2xl border-2 border-white">
                            <GiJeep title="Offroad" />
                        </div>
                    </div>

                    <p className="text-sm hidden md:inline text-gray-500 max-w-sm sm:ml-3 mt-2 sm:mt-0">
                        Jelajahi sisi liar Puncak bersama kami — penuh tantangan, aman, dan menyenangkan.
                    </p>
                </div>
            </div>
        </section>
    );
}
