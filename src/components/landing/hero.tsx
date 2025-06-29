import Image from "next/image";
import Link from "next/link";
import SearchInput from "../shared/searchInput";

export function HeroSection() {
    return (
        <section className="relative flex flex-col items-center justify-center container mx-auto pt-16">
            {/* Background image */}
            <div className="absolute inset-0 md:rounded-2xl overflow-hidden">
                <Image
                    src="/hero-rafting.jpg"
                    alt="Rafting Background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content container */}
            <div className="flex flex-col z-10 gap-4 items-center justify-center text-center px-4 max-w-xl">
                <h1 className="text-2xl md:text-4xl text-white drop-shadow-md font-bold">
                    Jelajahi Petualangan Seru di Puncak
                </h1>
                <h2 className="text-xs md:text-sm text-white/90 drop-shadow-md">
                    Station Adventure Puncak menawarkan berbagai kegiatan wisata seperti rafting, trekking, family gathering, offroad, dan lainnya. Rasakan pengalaman seru dan aman bersama tim profesional kami!
                </h2>
                <div className="flex items-center gap-2">
                    <SearchInput />
                    <Link href="/" className="bg-foreground font-semibold whitespace-nowrap text-white px-4 py-2 rounded-full text-sm">Pesan Sekarang!</Link>
                </div>
            </div>

            {/* Card Section */}
            <div className="mt-12 max-w-6xl mx-auto w-full z-10">
                <div className="bg-white rounded-t-2xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Rafting Card */}
                    <div className="relative h-64 md:h-72 rounded-lg overflow-hidden">
                        <Image
                            src="/hero-rafting.jpg"
                            alt="Rafting"
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="relative z-10 p-3 h-full flex flex-col justify-end">
                            <h3 className="font-semibold text-lg text-white">Rafting Seru</h3>
                            <p className="text-sm text-white">
                                Nikmati adrenalin saat mengarungi sungai dengan pemandu profesional.
                            </p>
                        </div>
                    </div>

                    {/* Trekking + Family */}
                    <div className="flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-4 h-32 md:h-36">
                            <div className="relative w-full h-full rounded-lg overflow-hidden">
                                <Image
                                    src="/offroad-gunungmas.jpg"
                                    alt="Trekking"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative w-full h-full rounded-lg overflow-hidden">
                                <Image
                                    src="/trekking.JPG"
                                    alt="Family Gathering"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4 flex-1">
                            <h3 className="font-semibold text-lg text-gray-900">Trekking & Gathering</h3>
                            <p className="text-sm text-muted-foreground">
                                Jelajahi hutan Puncak dan nikmati momen kebersamaan bersama keluarga besar atau rekan kerja.
                            </p>
                        </div>
                    </div>

                    {/* Offroad + Paket Kustom */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col h-full bg-white rounded-lg shadow p-4">
                            <h3 className="font-semibold text-lg text-gray-900">Offroad Adventure</h3>
                            <p className="text-sm text-muted-foreground">
                                Tantang dirimu menjelajah jalur ekstrem dengan mobil offroad yang disiapkan khusus.
                            </p>
                        </div>
                        <div className="flex flex-col h-full bg-white rounded-lg shadow p-4">
                            <h3 className="font-semibold text-lg text-gray-900">Paket Kustom</h3>
                            <p className="text-sm text-muted-foreground">
                                Kami menyediakan paket wisata yang dapat disesuaikan dengan kebutuhan acara pribadi atau perusahaan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
