import React from 'react'

const Contact = () => {
  return (
    <div className='p-10 bg-[#FEF9EF]'>
      <div >
        <h1 className="text-7xl font-bold text-[#5E362C]">Get In Touch</h1>
        <p className="text-xl text-[#5E362C] my-6">
          Reach Out or Volunteer With Us
        </p>
      </div>

        <div className="mt-16">
        <form className="grid grid-cols-2 gap-4 w-full ">
          {/* First Name */}
          <div>
            <label className="block text-[#5E362C] font-semibold mb-2">First Name *</label>
            <input
            //   type="text"
            //   placeholder="Enter first name"
              className="w-full p-2  border border-[#5E362C] focus:outline-none focus:ring-2 focus:ring-[#5E362C]"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-[#5E362C] font-semibold mb-2">Last Name *</label>
            <input
              type="text"
            //   placeholder="Enter last name"
              className="w-full p-2  border border-[#5E362C] focus:outline-none focus:ring-2 focus:ring-[#5E362C]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#5E362C] font-semibold mb-2">Email *</label>
            <input
              type="email"
            //   placeholder="Enter email"
              className="w-full p-2  border border-[#5E362C] focus:outline-none focus:ring-2 focus:ring-[#5E362C]"
            />
          </div>

          {/* Interested In */}
          <div>
            <label className="block text-[#5E362C] font-semibold mb-2">Interested In</label>
            <select
              className="w-full p-2  border border-[#5E362C] focus:outline-none focus:ring-2 focus:ring-[#5E362C]"
            >
              <option value=""></option>
              <option value="donation">Interested in an activity</option>
              <option value="volunteering">I would like to volunteer</option>
            </select>
          </div>
          {/* Message Box (spans 2 columns) */}
          <div className="col-span-2">
            <label className="block text-[#5E362C] font-semibold mb-2">
              Message
            </label>
            <textarea
              rows="3"
              className="w-full p-2 border border-[#5E362C] focus:outline-none focus:ring-2 focus:ring-[#5E362C]"
            //   placeholder="Write your message here..."
            ></textarea>
          </div>


          {/* Submit Button (spanning 2 columns) */}
          <div className="col-span-1  mt-6">
            <button
              type="submit"
              className="bg-[#5E362C]  w-full text-white px-10 py-2 rounded-3xl text-xl font-semibold hover:bg-white hover:text-[#5E362C]  transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Contact
