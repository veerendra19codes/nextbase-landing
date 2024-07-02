import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import AnimatedShinyText from '@/components/magicui/animated-shiny-text'
import { CheckIcon, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from '@/components/ui/button';


const Hero = () => {
    return (
        <div className="hero flex flex-col gap-4 justify-center px-4 lg:px-0 items-start lg:items-center overflow-x-hidden py-24">


            <div className="z-10 flex items-center justify-center">
                <div
                    className={cn(
                        "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                    )}
                >
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span>✨ Introducing</span>
                        <ArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyText>
                </div>
            </div>

            <div className="heading text-2xl lg:text-5xl font-semibold">Nextbase Ultimate Landing Page</div>

            <div className="paragraph text-xl text-gray-500 w-[900px] lg:text-center dark:text-gray-400">Welcome to Nextbase Ultimate Landing Page: Your Gateway to Innovation. Discover the Future of Excellence and Elevate Your Experience</div>

            <div className="hero-buttons flex flex-col md:flex-row gap-4 my-4">

                <Button className="flex gap-2 itemc-center justify-center w-[200px]">Log in <ArrowRight size={20} /></Button>

                <Button className="flex gap-2 itemc-center justify-center bg-gray-100 text-black w-[200px] dark:bg-gray-800 dark:text-white">Learn More <ChevronRight size={20} /></Button>

            </div>

            <Image src="/images/hero.png" alt="hero-image" width={1100} height={1100} className="border-none" />
        </div>
    )
}

export default Hero
