const customer_list = [
  { id: 1, text: "Customer" },
  { id: 2, text: "Customer" },
  { id: 3, text: "Customer" },
  { id: 4, text: "Customer" },
  { id: 5, text: "Customer" },
]

export const CustomerSection = () => {
  return (
    <section className='px-20'>
      <div className='flex gap-8 mb-10'>
        <h2 className='text-4xl w-1/2'>Focusing on quality,
          <span className='text-gray-500 ml-2'>we maintain customer trust</span>
        </h2>
        <p className='w-1/2 text-gray-800'>
          We ensure that every installation we build has strict quality checks. Sustainable solutions for an environmentally friendly and renewable future.
        </p>
      </div>
      <div className='flex justify-center mt-20'>
        {
          customer_list.map((item) => {
            const { id, text } = item
            return (
              <div
                key={id}
                className='h-[180px] w-[180px] shadow-lg rounded-full grid place-items-center bg-[#F2F4F4] hover:bg-white group'
              >
                <span className='text-[1.2rem] group-hover:text-green-500'>
                  {text} {id}
                </span>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
