import React from 'react'
import Help from './Help'
import Contact from './Contact'

const Last = () => {
  return (
    <main className="relative isolate">
      {/* Section 1: gives 200vh of scroll space while the child sticks */}
      <section className="relative h-[200vh]">
        <div className="sticky top-0 h-screen z-10">
          {/* Make sure the inner has a solid bg so overlap is visible */}
          <div className="h-full bg-[#EBD1FE] ">
            <Help />
          </div>
        </div>
      </section>

      {/* Section 2: pulled up so it starts overlapping Section 1 */}
      <section className="relative h-[200vh] -mt-[100vh]">
        <div className="sticky top-0 h-screen z-20">
          <div className="h-full bg-[#FEF9EF] ">
            <Contact />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Last
