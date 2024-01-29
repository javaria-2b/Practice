import React from 'react'
import Navbar from './views/Header'
import Footer from './views/Footer'

function Layout({children}:{children:React.ReactNode}) {
  return (
<div>
    <Navbar/>
    {children}
    <Footer/>
</div>  
)
}

export default Layout