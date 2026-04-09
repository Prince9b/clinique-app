import React from 'react'
import Navbar from '@/composents/home/navbar'
import Footer from '@/composents/home/footer'
import MapCart from './map'

export default function Index() {
  return (
    <div>
        <Navbar />
        <MapCart/>
        <br />
        <Footer />
    </div>
  )
}

