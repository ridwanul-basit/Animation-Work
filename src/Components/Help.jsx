import React from 'react'

const Help = () => {
  return (
    <div className='bg-[#EBD1FE]' >
     <div className='px-8 py-10 '>
         <div>
        <h1 className="text-7xl font-bold text-[#5E362C]">Help Us Grow</h1>
        <p className="text-xl text-[#5E362C] my-6">
          Your contribution makes a huge difference
        </p>
        <a
          className="btn w-1/7 bg-[#5E362C] text-[#EBD1FE] text-xl  rounded-3xl py-6
            hover:bg-[#EBD1FE] hover:text-[#5E362C] transition-colors duration-300"
         
        >
          Donate
        </a>
      </div>

      {/* Row with 4 columns */}
      <div className="grid grid-cols-4 gap-6 mt-32 mb-12 ">
        <div className="bg-[#5E362C] rounded-3xl p-8 shadow-md">
          <h1 className="text-8xl font-bold text-[#EBD1FE] py-3">$10</h1>
        </div>
        <div className="bg-[#5E362C] rounded-3xl p-8 shadow-md">
          <h1 className="text-8xl font-bold text-[#EBD1FE] py-3">$50</h1>
        </div>
        <div className="bg-[#5E362C] rounded-3xl p-8 shadow-md">
          <h1 className="text-8xl font-bold text-[#EBD1FE] py-3">$100</h1>
        </div>
        <div className="bg-[#5E362C] rounded-3xl p-8 shadow-md">
          <h1 className="text-8xl font-bold text-[#EBD1FE] py-3">$200</h1>
        </div>
        
      </div>
     </div>
    </div>
  )
}

export default Help
