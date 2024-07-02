import { OrbitingCirclesDemo } from "@/components/orbiting-circles-demo"
import { cn } from "@/lib/utils"
import AnimatedShinyText from "@/components/magicui/animated-shiny-text"
import { ArrowRight } from "lucide-react"

const Integration = () => {
    return (
        <div className="integration flex flex-col justify-center items-start  lg:items-center gap-4 py-24 px-4 lg:px-0">

            {/* animated-shimy-text button (magicui) */}
            <div className="z-10 flex items-center justify-center">
                <div
                    className={cn(
                        "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                    )}
                >
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span>✨ Integration</span>
                        <ArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyText>
                </div>
            </div>

            <div className="heading text-4xl font-semibold">Master Integration like Pros</div>

            <div className="paragraph text-xl text-start lg:text-center text-gray-500 dark:text-gray-400 w-[900px] lg:px-16">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda atque perferendis, sunt reiciendis ut id sint aliquam iste ipsam praesentium!
            </div>

            <OrbitingCirclesDemo />
        </div>
    )
}

export default Integration
