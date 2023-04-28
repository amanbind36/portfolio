import React from 'react'
import Banner from '../autoSlider/Multi'
import {Routes, Route} from "react-router-dom"
import About from '../About/About'
import Contact from '../contact/Contact'
import Education from '../education/Education'
import Skills from '../skill/Skills'
import Appa from '../project/Project'

const AllRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/appa' element={<Appa/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/education' element={<Education/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        
    </Routes>
      
    </div>
  )
}

export default AllRoutes
