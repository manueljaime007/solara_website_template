import React from 'react'
import { CTAButton } from '../ui/CTAButton.jsx'
import { UnderlinedLink } from '../ui/UnderlinedLink.jsx'

const service_cards = [
  { id: 1, text: "Solar panels for home" },
  { id: 2, text: "Solar panels for industry" },
  { id: 3, text: "Solar panels for chargers" },
  { id: 4, text: "Wind power generator" },
]

export const ServicesSection = () => {
  return (
    <section className='h-[700px] py-20 px-25 flex  justify-center gap-20'>
      <div className='py-5 h-full inline-flex flex-col flex-nowrap justify-between'>

        <div>
          <h2 className='text-3xl w-100 mb-5'>
            Trusted Service,
            <span className='ml-2 text-gray-400'>for your various needs</span>
          </h2 >
          <CTAButton />
        </div>

        <ul className='grid grid-cols-2 gap-5'>
          {
            service_cards.map(item => {
              const { id, text } = item

              return (
                <li key={id} className='p-6 shadow-sm'>
                  <h3 className='text-gray-400'>0{id}</h3>
                  <p className='w-40'>{text}</p>
                  <UnderlinedLink text={"View details"}/>
                </li>
              )
            })
          }
        </ul>

      </div>
      <div className='flex-1'>
        <img
          src="/img/service_section.jpg"
          alt="service_section"
          loading='lazy'
          className='rounded-3xl h-full w-full object-cover'
        />
      </div>
    </section >
  )
}
