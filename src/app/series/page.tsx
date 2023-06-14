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
      <Header mode="dark"></Header>
      <main className='container'>
        <div >
          <h1>Series</h1>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}
