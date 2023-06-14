'use client'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Card from '../../components/card'
import { useEffect } from 'react'


export default function Series() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap');
    }, []);


  return (<>
      <Header></Header>
      <main className='container'>
        <div >
          <h1>Pelis</h1>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}
