'use client';

import { useRef, useState, useMemo, useEffect, SetStateAction } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Swiper as SwiperClass } from 'swiper';
import SearchInput from '../shared/searchInput';
import { Card } from '../shared/card';
import { Button } from '../ui/button';

const wisataList = [
    {
        title: 'Offroad Seru Gunung Mas',
        label: 'Petualangan',
        description: 'Rasakan sensasi offroad menyusuri perkebunan teh Gunung Mas.',
        image: '/offroad-gunungmas.jpg',
    },
    {
        title: 'Glamping Riverside Puncak',
        label: 'Keluarga',
        description: 'Nikmati pengalaman menginap di pinggir sungai dengan fasilitas modern.',
        image: '/glamping-riverside.jpg',
    },
    {
        title: 'Trekking Curug Panjang',
        label: 'Alam',
        description: 'Eksplorasi hutan dan air terjun Curug Panjang dengan pemandu lokal.',
        image: '/trekking.JPG',
    },
    {
        title: 'Outbound Team Building',
        label: 'Kelompok',
        description: 'Paket outbound seru untuk meningkatkan kekompakan tim.',
        image: '/outbond.JPG',
    },
    {
        title: 'Archery & Panahan Alam Terbuka',
        label: 'Aktivitas',
        description: 'Latih fokus dan ketangkasan dengan panahan outdoor di alam terbuka.',
        image: '/archery-puncak.jpg',
    },
    {
        title: 'ATV Adventure Jalur Hutan Pinus',
        label: 'Petualangan',
        description: 'Nikmati perjalanan seru mengendarai ATV di jalur hutan pinus.',
        image: '/atv-puncak.jpg',
    },
];

export default function PackageWisata() {
    const swiperRef = useRef<SwiperClass | null>(null);
    const [query, setQuery] = useState('');
    const [autoplay, setAutoplay] = useState(true);

    const filteredList = useMemo(() => {
        return wisataList.filter((item) =>
            `${item.title} ${item.label} ${item.description}`
                .toLowerCase()
                .includes(query.toLowerCase())
        );
    }, [query]);

    useEffect(() => {
        setAutoplay(query.trim() === '');
    }, [query]);

    return (
        <section
            className="mx-auto container py-16"
            aria-labelledby="package-heading"
        >
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <h2 id="package-heading" className="text-2xl font-semibold">
                        Jelajahi Paket Wisata
                    </h2>
                </div>
                <div className="flex items-center gap-3">
                    <SearchInput
                        placeholder="Cari Paket..."
                        onChange={(val: SetStateAction<string>) => setQuery(val)}
                    />
                    <Button asChild>
                        <Link href="/paket" aria-label="Lihat semua paket wisata">
                            Lihat Semua
                        </Link>
                    </Button>
                </div>
            </div>

            <Swiper
                modules={[Autoplay]}
                loop={filteredList.length > 1}
                autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                key={filteredList.length}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 4, spaceBetween: 24 },
                }}
            >
                {filteredList.length > 0 ? (
                    filteredList.map((paket, index) => (
                        <SwiperSlide key={index}>
                            <Card data={paket} />
                        </SwiperSlide>
                    ))
                ) : (
                    <div className="text-center col-span-full py-20 text-gray-500 text-sm">
                        Tidak ada paket yang sesuai dengan pencarianmu.
                    </div>
                )}
            </Swiper>

            <div className="mt-8 flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-0 items-center">
                <div className="md:flex items-center gap-2 hidden col-span-7">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
                        aria-label="Sebelumnya"
                        title="Slide sebelumnya"
                    >
                        <ArrowLeft size={18} />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
                        aria-label="Berikutnya"
                        title="Slide berikutnya"
                    >
                        <ArrowRight size={18} />
                    </button>
                </div>
                <p className="text-sm text-gray-500 text-center md:text-end col-span-5">
                    Station Adventure Puncak menyediakan berbagai kegiatan wisata petualangan
                    yang menawarkan pengalaman seru di alam terbuka.
                </p>
            </div>
        </section>
    );
}
