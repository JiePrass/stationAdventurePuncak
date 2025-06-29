"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useState } from "react"
import {
    FaBars, FaTimes, FaHome, FaBoxOpen, FaPhone,
    FaChevronRight, FaChevronDown
} from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

    const navItems = [
        { href: "/", label: "Beranda", icon: <FaHome size={16} /> },
        { href: "#tentang", label: "Tentang", icon: <FaBoxOpen size={16} /> },
        { href: "#cta", label: "Kontak", icon: <FaPhone size={16} /> },
    ]

    const paketItems = [
        { href: "#trekking", label: "Trekking" },
        { href: "#offroad", label: "Offroad" },
        { href: "#outbond", label: "Outbond" },
        { href: "#rafting", label: "Rafting" },
    ]

    return (
        <header className="container py-4 mx-auto" >
            <div className="flex items-center justify-between mx-6 md:mx-0 py-4">
                <Link href="/" className="text-lg font-semibold flex items-center gap-2">
                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                    <span>Station Adventure Puncak</span>
                </Link>

                <button className="md:hidden text-foreground" onClick={toggleMenu} aria-label="Toggle menu">
                    <FaBars size={24} />
                </button>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center space-x-4 relative">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "px-3 py-1 text-sm rounded-md hover:text-primary transition font-semibold",
                                pathname === item.href
                                    ? "bg-primary text-white rounded-full"
                                    : "text-foreground"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* Dropdown Paket */}
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center px-3 py-1 text-sm rounded-md hover:text-primary transition font-semibold text-foreground"
                        >
                            Paket <FaChevronDown className="ml-1 mt-1 w-3 h-3" />
                        </button>
                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.ul
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute mt-2 right-0 bg-white rounded-md shadow-lg overflow-hidden z-50"
                                >
                                    {paketItems.map((sub) => (
                                        <li key={sub.href}>
                                            <Link
                                                href={sub.href}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                {sub.label}
                                            </Link>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>
                </nav>
            </div>

            {/* Mobile nav */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/40 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                        />

                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed inset-y-0 right-0 w-72 bg-neutral-900 text-white z-50 shadow-lg p-6 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-center pb-4 mb-4 border-b border-b-white/50">
                                    <span className="text-xl font-semibold">Menu</span>
                                    <button onClick={toggleMenu}><FaTimes size={24} /></button>
                                </div>

                                <nav className="flex flex-col gap-2">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={cn("flex items-center rounded font-medium justify-between px-2.5 py-1.5 transition", pathname === item.href
                                                ? "bg-primary text-white"
                                                : "hover:bg-primary text-white")}
                                        >
                                            <span>{item.label}</span>
                                        </Link>
                                    ))}

                                    {/* Paket Dropdown di Mobile */}
                                    <div>
                                        <button
                                            onClick={toggleDropdown}
                                            className="w-full flex items-center justify-between text-left px-2.5 py-1.5 transition hover:text-primary"
                                        >
                                            <span className="flex items-center gap-2 font-medium">
                                                Paket
                                            </span>
                                            {isDropdownOpen ? (
                                                <FaChevronDown className="w-4 h-4 text-gray-400" />
                                            ) : (
                                                <FaChevronRight className="w-4 h-4 text-gray-400" />
                                            )}
                                        </button>
                                        <AnimatePresence>
                                            {isDropdownOpen && (
                                                <motion.ul
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="pl-4 mt-2 space-y-2 text-sm"
                                                >
                                                    {paketItems.map((sub) => (
                                                        <li key={sub.href}>
                                                            <Link href={sub.href} className="block hover:text-primary">
                                                                {sub.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </motion.ul>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </nav>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </header>
    )
}