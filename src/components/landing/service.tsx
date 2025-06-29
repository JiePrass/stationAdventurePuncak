import Image from "next/image"
import SearchInput from "../shared/searchInput"
import Link from "next/link"

export function ServiceSection() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-12 min-h-screen gap-4 mx-auto container px-4 md:px-0">
            <div className="md:col-span-8 flex flex-col gap-4">
                {/* Top Card */}
                <div className="flex flex-col gap-6">
                    {/* Top Card Row */}
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Card 1 */}
                        <div className="relative w-full h-72 rounded-xl overflow-hidden shadow">
                            <Image
                                src="/outbond.JPG"
                                alt="Outbound"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
                                <h2 className="text-xl font-semibold mb-2 text-white">Outbound Seru</h2>
                                <p className="text-sm text-white">Bangun kekompakan dan semangat tim dengan beragam aktivitas menyenangkan di alam terbuka.</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative w-full h-72 rounded-xl overflow-hidden shadow">
                            <Image
                                src="/family-gathering.jpg"
                                alt="Family Gathering"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
                                <h2 className="text-xl font-semibold mb-2 text-white">Family Gathering</h2>
                                <p className="text-sm text-white">Ciptakan momen tak terlupakan bersama keluarga dengan berbagai aktivitas seru di alam bebas.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Card */}
                <div className="bg-white rounded-2xl flex flex-col md:flex-row items-center justify-between shadow-md overflow-hidden">
                    {/* Konten kiri */}
                    <div className="flex flex-col items-start p-6 space-y-4 w-full md:w-1/2">
                        <h2 className="text-2xl font-bold text-gray-800">Petualangan Menunggumu</h2>
                        <p className="text-sm text-gray-700">
                            Temukan sensasi eksplorasi alam yang tak terlupakan. Mulai dari hiking, camping, hingga arung jeram — semua ada dalam satu paket seru!
                        </p>
                        <div className="flex space-x-4 mt-2">
                            <Link
                                href="/"
                                className="bg-foreground font-semibold whitespace-nowrap text-white px-4 py-2 rounded-full text-sm"
                            >
                                Pilih Petualanganmu!
                            </Link>
                            <Link
                                href="/"
                                className="border border-foreground text-foreground font-semibold whitespace-nowrap px-4 py-2 rounded-full text-sm"
                            >
                                Hubungi Kami
                            </Link>
                        </div>
                    </div>

                    {/* Gambar kanan */}
                    <div className="relative w-full md:w-1/2 h-84">
                        <Image
                            src="/adventure.jpg"
                            alt="Petualangan Alam"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-white z-10" />
                    </div>
                </div>
            </div>

            {/* Right Card */}
            <div className="md:col-span-4 bg-white rounded-2xl overflow-hidden shadow-md flex flex-col justify-between">
                <div className="p-6 pt-12 text-center">
                    <h2 className="text-2xl font-semibold mb-2">Jelajahi Paket Wisata</h2>
                    <p className="text-sm text-gray-600">
                        Temukan berbagai pilihan paket wisata menarik yang sesuai dengan kebutuhanmu — dari petualangan ekstrem hingga relaksasi keluarga.
                    </p>
                    <SearchInput placeholder="Cari Paket..." className="w-full my-4" />
                </div>
                <div className="relative h-64 md:h-full">
                    <Image
                        src="/jelajahi.jpeg"
                        alt="Paket Wisata"
                        fill
                        className="object-cover mix-blend-multiply"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-70% from-transparent to-white" />
                </div>
            </div>
        </section>
    )
}
