"use client";

import { ModeToggle } from '@/components/toggle-theme'
import Image from 'next/image'
import React, { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

export default function Navbar() {
    const [mobileNav, setMobileNav] = useState(false);
    const links = [
        {
            id: 1,
            name: "Docs",
            link: "",
        },
        {
            id: 2,
            name: "Blog",
            link: "",
        },
        {
            id: 3,
            name: "Changelog",
            link: "",
        },
        {
            id: 4,
            name: "Roadmap",
            link: "",
        },
    ]
    return (
        <>
            <div className="hidden lg:block">


                <div className="w-full flex justify-between items-center px-2 py-[4px] shadow-lg">
                    <div className="logo flex justify-center items-center gap-2">
                        <Image src="/logos/nextbase-light-logo.png" alt="logo" width={100} height={100} className="size-8" />
                        <p className="font-bold text-xl">Nextbase</p>
                    </div>

                    <div className="menu flex justify-center items-center gap-8 text-gray-500 text-sm dark:text-gray-400">
                        {links.map((l) => {
                            return (
                                <div key={l.id}>{l.name}</div>
                            )
                        })}
                    </div>

                    <div className="login flex justify-center items-center gap-8">
                        <ModeToggle />
                        <button className="login bg-black py-[8px] px-12 rounded-md text-white flex gap-4 text-sm items-center dark:bg-white dark:text-black font-semibold">Log in <ArrowRight size={16} /></button>
                    </div>
                </div>
            </div>


            {/* mobile navbar   */}
            {!mobileNav &&
                <div className="lg:hidden mobile-navbar w-full flex justify-between items-center px-2 py-1 shadow-lg">
                    <Menu onClick={() => setMobileNav(!mobileNav)} />
                    <ModeToggle />
                </div>
            }

            {mobileNav && <div className="mobile-nav-menu w-full h-screen bg-opacity-50">
                <div className="w-[70%] bg-white dark:bg-black h-screen flex flex-col justify-start items-start pl-4 gap-4">
                    <X onClick={() => setMobileNav(!mobileNav)} className="fixed top-4 right-4" />
                    <div className="logo w-full flex justify-start items-center gap-2 mt-8">
                        <Image src="/logos/nextbase-light-logo.png" alt="logo" width={100} height={100} className="size-6" />
                        <p className="font-bold text-md">Nextbase</p>
                    </div>
                    <div className="menu flex flex-col justify-start items-start gap-4 text-sm pl-4">
                        {links.map((l) => {
                            return (
                                <div key={l.id}>{l.name}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
            }

        </>
    )
}
