import { IoIosCheckmarkCircle } from "react-icons/io";

const features__cards = [
  {
    id: 1,
    title: "Layered security",
    subtitle: "With layered security, we ensure the safety of every unit we provide"
  },
  {
    id: 2,
    title: "Quality control of each part",
    subtitle: "Every unit you send in checked carefully for every detal"
  },
  {
    id: 3,
    title: "Reliable customer service",
    subtitle: "Our customer service is avalable 24 hours a week, with qualified people"
  },
  {
    id: 4,
    title: "Maintenance manual book",
    subtitle: "We provide a guidebook that can be used to ensure maximum card"
  },
  {
    id: 5,
    title: "Delivered safely",
    subtitle: "Every unit we send arrives safely and quickly, without any obstacles or chame"
  },
  {
    id: 6,
    title: "Based on artificial intelligence",
    subtitle: "You can control and view each unit from your phone, It's very easy to use"
  },
]

const FeaturesSection = () => {
  return (
    <section className='bg-[#F2F4F4] py-20 px-25 flex flex-col items-center justify-center gap-20'>
      <h2 className='text-center text-3xl w-100'>
        We offer quality,
        <span className='ml-2 text-gray-400'>with the best materials and service</span>
      </h2>
      <div className='grid grid-cols-3 bg-white gap-10 p-8'>
        {
          features__cards.map((item) => {
            const { id, title, subtitle } = item
            return (
              <div key={id}>
                <IoIosCheckmarkCircle className="text-green-500 text-3xl mb-5" />
                <h3 className="text-[1.2rem] font-semibold">{title}</h3>
                <p className="text-[.9rem]">{subtitle}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default FeaturesSection;