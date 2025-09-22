import BannerButton from '../ui/BannerButton'
import { BannerHighlightCard } from '../ui/BannerHighlightCard'

const company_stats = [
    { id: 1, value: "6 mil", text: "The company's annual net income" },
    { id: 2, value: "315", text: "Projects completed worlwide" },
    { id: 1, value: "120K", text: "Employees work in all parts of the world" },
]

export const Banner = () => {
    return (
        <section>
            <div className="w-full relative h-[600px]">
                <img
                    src="/img/banner.jpg"
                    alt="banner-img"
                    loading="lazy"
                    className="w-full object-cover rounded-3xl absolute top-0 left-0 h-full"
                />

                <div className="w-full h-full absolute top-0 left-0 rounded-3xl z-[99] bg-[rgba(0,0,0,.4)] flex items-center">

                    <BannerHighlightCard
                        adding_style={'absolute top-20 right-50'}
                    />
                    <div className="p-10 text-white">
                        <small>#1 Energy Provider in the world</small>

                        <h2 className="text-5xl my-4 font-bold w-80">New Energy for the Future</h2>

                        <div className="mt-6 flex gap-5">
                            <BannerButton text={"Get in touch"} />
                            <BannerButton text={"Our services"} />
                        </div>

                    </div>

                    <div className="bg-white absolute bottom-0 right-0 flex gap-6 w-[600px] px-8 py-10 rounded-tl-3xl">
                        {
                            company_stats.map((item) => {
                                const { id, value, text } = item
                                return (
                                    <div key={id} className="text-center">
                                        <span className="text-3xl my-2 block font-semibold">{value}</span>
                                        <p>{text}</p>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </div>
            <div className="mb-10"></div>
        </section>
    )
}
