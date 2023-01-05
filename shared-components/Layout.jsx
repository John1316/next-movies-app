import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout(props) {
  return <>

    <Navbar />
    <div className="container">
        
        <main>{props.children}</main>
    </div>
    <Footer />
  </>

}
