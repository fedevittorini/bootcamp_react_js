'use client'
import Header from '../components/header'
import Footer from '../components/footer'
import Card from '../components/card'
import { useEffect } from 'react'


export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])


  return (<>
      <Header></Header>
      <main className='container'>
        <div >
          <h1>Hola</h1>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit impedit tempora minus optio obcaecati corporis labore debitis blanditiis officia recusandae, temporibus molestias officiis. Voluptas magnam perspiciatis sint excepturi voluptatibus sed!</p>
        <div>
          <Card title="Audi R8" name="Auto"/>
          <Card title="BMW M5" name="Auto" />
          <Card title="Ferrari f50" name="Auto" />
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}
