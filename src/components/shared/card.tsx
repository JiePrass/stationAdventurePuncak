import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CardData = {
    title: string;
    label: string;
    description: string;
    image: string;
};

type Props = {
    data: CardData;
};

export function Card({ data }: Props) {
    return (
        <article
            className="min-w-[250px] md:min-w-[280px] h-92 md:rounded-2xl overflow-hidden relative group shadow hover:shadow-lg transition-all duration-300"
            aria-label={`Paket wisata: ${data.title}`}
        >
            <Image
                src={data.image}
                alt={`Gambar ${data.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-115"
                loading="lazy"
            />

            {/* Overlay: Top gradient + Vignette */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(ellipse at center, transparent 10%, rgba(0,0,0,0.5) 100%)`,
                    }}
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end">
                <span
                    className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full w-fit text-white mb-2"
                    aria-hidden="true"
                >
                    {data.label}
                </span>
                <h3 className="text-lg font-semibold text-white">{data.title}</h3>
                <p className="text-sm text-white opacity-80">{data.description}</p>
            </div>

            <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow opacity-0 group-hover:opacity-100 transition">
                <Link
                    href="/paket"
                    aria-label={`Lihat detail paket ${data.title}`}
                    title={`Lihat detail ${data.title}`}
                >
                    <ArrowRight className="w-4 h-4 -rotate-45" />
                </Link>
            </div>
        </article>
    );
}
