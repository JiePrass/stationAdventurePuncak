"use client"

import Link from "next/link"
import Image from "next/image"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa"
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai"

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-8 pb-12" aria-label="Informasi Footer Station Adventure Puncak">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Kiri: Logo & Tagline */}
                <div className="flex flex-col gap-4 md:justify-between items-center md:items-start text-center md:text-left">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="Logo Station Adventure Puncak - Wisata Petualangan di Puncak Bogor"
                            width={48}
                            height={48}
                        />
                        <h1 className="text-white font-bold text-lg">Station Adventure Puncak</h1>
                    </div>
                    <h2 className="text-gray-300 text-2xl leading-tight">
                        Petualangan Seru di Tengah Alam Pegunungan Puncak
                    </h2>
                    <p className="text-gray-400 text-sm">
                        Menyediakan pengalaman wisata outdoor terbaik di Puncak seperti offroad, glamping riverside, trekking, ATV, hingga outbound untuk keluarga & perusahaan.
                    </p>
                    <p className="mt-4 hidden md:inline text-gray-500 text-xs">
                        &copy; {new Date().getFullYear()} Station Adventure Puncak. Seluruh hak cipta dilindungi.
                    </p>
                </div>

                {/* Kanan: Menu & Info */}
                <div className="flex flex-col gap-8">
                    {/* Navigasi */}
                    <nav className="flex flex-wrap justify-center md:justify-end gap-2 text-sm" aria-label="Navigasi Footer">
                        <Link href="/" className="bg-white text-foreground font-semibold px-3 py-1 border rounded-full">Beranda</Link>
                        <Link href="/paket" className="text-white px-3 py-1 border rounded-full">Paket</Link>
                        <Link href="/artikel" className="text-white px-3 py-1 border rounded-full">Artikel</Link>
                        <Link href="/kontak" className="text-white px-3 py-1 border rounded-full">Kontak</Link>
                    </nav>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-4 md:gap-8">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-gray-500 text-sm font-semibold">Lokasi Kami</h3>
                            <address className="not-italic text-white text-sm leading-relaxed">
                                Tugu Selatan, Cisarua, Kabupaten Bogor, Jawa Barat 16750, Indonesia
                            </address>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3 className="text-gray-500 text-sm font-semibold">Layanan Unggulan</h3>
                            <p className="text-white text-sm">
                                Offroad, Glamping Riverside, Trekking, ATV, Panahan & Outbound Team Building.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3 className="text-gray-500 text-sm font-semibold">Hubungi Kami</h3>
                            <p className="text-white text-sm">
                                <a href="https://wa.me/6281389599499" className="hover:underline">
                                    +62 813-8959-9499
                                </a>
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3 className="text-gray-500 text-sm font-semibold">Ikuti Kami</h3>
                            <div className="flex items-center gap-4">
                                <Link href="/" className="text-white" aria-label="Facebook">
                                    <FaFacebookSquare size={28} />
                                </Link>
                                <Link href="/" className="text-white" aria-label="Instagram">
                                    <AiFillInstagram size={30} />
                                </Link>
                                <Link href="/" className="text-white" aria-label="TikTok">
                                    <AiFillTikTok size={30} />
                                </Link>
                                <Link href="/" className="text-white" aria-label="X (Twitter)">
                                    <FaSquareXTwitter size={28} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Mobile */}
                <p className="mt-4 md:hidden text-gray-500 text-xs text-center">
                    &copy; {new Date().getFullYear()} Station Adventure Puncak. Seluruh hak cipta dilindungi.
                </p>
            </div>
        </footer>
    )
}
