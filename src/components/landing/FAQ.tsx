"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
    {
        question: "Apa itu Station Adventure Puncak?",
        answer: "Station Adventure Puncak adalah layanan wisata outdoor seperti offroad, trekking, dan aktivitas alam lainnya yang berlokasi di kawasan Puncak.",
    },
    {
        question: "Apakah saya perlu reservasi sebelum datang?",
        answer: "Ya, kami sangat menyarankan untuk melakukan reservasi terlebih dahulu agar pengalaman Anda lebih nyaman dan terorganisir.",
    },
    {
        question: "Apa saja jenis paket wisata yang tersedia?",
        answer: "Kami menyediakan berbagai paket seperti offroad, camping, trekking, dan family adventure yang bisa disesuaikan dengan kebutuhan Anda.",
    },
    {
        question: "Apakah kegiatan aman untuk anak-anak?",
        answer: "Tentu! Kami memiliki paket khusus keluarga dengan aktivitas ramah anak dan pengawasan ketat oleh tim profesional.",
    },
    {
        question: "Berapa biaya paket termurah?",
        answer: "Biaya paket mulai dari Rp150.000 per orang, tergantung jenis aktivitas dan fasilitas yang dipilih.",
    },
    {
        question: "Apakah tersedia fasilitas penginapan?",
        answer: "Ya, kami menyediakan beberapa pilihan penginapan seperti glamping dan tenda camping lengkap dengan fasilitas dasar.",
    },
    {
        question: "Bagaimana jika terjadi hujan saat kegiatan?",
        answer: "Kami memiliki rencana cadangan untuk setiap aktivitas dan akan mengutamakan keselamatan pengunjung dalam kondisi cuaca ekstrem.",
    },
]

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setActiveIndex(prev => (prev === index ? null : index))
    }

    return (
        <div className="relative py-20 overflow-hidden">
                <motion.div
                    className="absolute left-[-80px] w-72 h-72 rounded-full bg-primary opacity-30 blur-3xl z-0"
                    animate={{ y: [0, 200, 0], x: [0, 100, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-[100px] right-[-80px] w-72 h-72 rounded-full bg-orange-400 opacity-30 blur-3xl z-0"
                    animate={{ y: [0, 200, 0], x: [0, -100, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
            <section className="container mx-auto relative px-6 md:px-0 z-10">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative z-10">
                    Pertanyaan yang Sering Diajukan
                </h2>

                <div className="space-y-4 max-w-3xl mx-auto relative z-10">
                    {faqs.map((faq, index) => {
                        const isOpen = index === activeIndex

                        return (
                            <div
                                key={index}
                                className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between px-5 py-4 text-left text-lg font-medium hover:bg-gray-50 transition"
                                >
                                    {faq.question}
                                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-5 pb-4 pt-0 text-gray-600 text-base">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}
