"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTA() {
    return (
        <section
            className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden"
            aria-labelledby="cta-heading"
        >
            {/* Background Image */}
            <Image
                src="/cta.jpg"
                alt="Aktivitas offroad dan petualangan alam di Station Adventure Puncak"
                fill
                className="object-cover object-center z-0"
                priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* Content */}
            <div className="relative z-20 text-center px-6 max-w-2xl text-white">
                <h2
                    id="cta-heading"
                    className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                >
                    Petualangan Outdoor Terbaik di Puncak
                </h2>
                <p className="text-lg md:text-xl mb-6">
                    Temukan pengalaman wisata alam tak terlupakan — mulai dari offroad ekstrem, trekking menyusuri hutan, hingga rafting seru bersama tim profesional kami.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button asChild>
                        <Link href="#paket">
                            Pesan Sekarang
                        </Link>
                    </Button>
                    <Button asChild variant="secondary">
                        <Link href="#paket">
                            Lihat Paket Wisata
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
