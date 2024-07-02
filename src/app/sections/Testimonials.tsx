import MarqueeDemo from "@/components/marguee-demo"

const Testimonials = () => {
    return (
        <div className="testimonial flex flex-col justify-center items-start lg:items-center gap-4 bg-gray-100 dark:bg-gray-800 pt-24 ">
            <div className="heading text-4xl font-semibold px-4 lg:px-0">Don&apos;t take our words for it</div>

            <div className="paragraph text-xl text-start lg:text-center text-gray-500 dark:text-gray-400 w-[900px] lg:px-16 px-4">Hear what our satisfied customers have to say about Nextbase
            </div>

            <div className="reviews w-full">
                <MarqueeDemo />
            </div>
        </div>
    )
}

export default Testimonials
