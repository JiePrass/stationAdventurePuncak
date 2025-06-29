"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTA() {
    return (
        <section className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <Image
                src="/cta.jpg" // Pastikan file ada di public/images
                alt="Station Adventure Puncak"
                fill
                className="object-cover object-center z-0"
                priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* Content */}
            <div className="relative z-20 text-center px-6 max-w-2xl text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Jelajahi Alam Bebas di Station Adventure Puncak
                </h2>
                <p className="text-lg md:text-xl mb-6">
                    Rasakan pengalaman offroad, trekking, dan wisata alam seru bersama kami!
                </p>
                <div className="flex gap-4 justify-center">
                    <Button asChild variant="secondary" className="bg-black text-white">
                        <Link href="#paket">
                            Pesan Sekarang
                        </Link>
                    </Button>
                    <Button asChild variant="secondary" className="bg-white text-black">
                        <Link href="#paket">
                            Lihat Paket Wisata
                        </Link>
                    </Button>
                </div>

            </div>
        </section>
    )
}
