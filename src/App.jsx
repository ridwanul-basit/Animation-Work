import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import FirstScroll from './Components/FirstScroll'
import SecondScroll from './Components/SecondScroll'
import ThirdScroll from './Components/ThirdScroll'
import ScrollStack, { ScrollStackItem } from './Components/ScrollStack'
import ThirdSlide from './Components/Thirdslide'
import TwoRowSlide from './Components/TwoRowSlide'
import Events from './Components/Events'
import Help from './Components/Help'
import Contact from './Components/Contact'
import Last from './Components/Last'
import Footer from './Components/Footer'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    
    <div >
      <ScrollStack>
      <ScrollStackItem>
        <SecondScroll></SecondScroll>
      </ScrollStackItem>
      <ScrollStackItem>
        <FirstScroll></FirstScroll>
      </ScrollStackItem>
      <ScrollStackItem>
         <ThirdScroll></ThirdScroll>
      </ScrollStackItem>
    </ScrollStack>

    </div>
    <ThirdSlide></ThirdSlide>
    <TwoRowSlide></TwoRowSlide>
     <Events></Events>
     {/* <Help></Help>
     <Contact></Contact> */}
     <Last></Last>
     <Footer></Footer>

    
    
   
   
     
    </>
  )
}

export default App
