import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Cards from './Cards';
import Servicos from './Servicos';
import SobreNos from './SobreNos';
import Footer from './Footer';
import Copy from './Copy';

function Home() {
  return (
    <div>
        <Navbar />
        <Banner />
        <Cards />
        <Servicos />
        <SobreNos />
        <Footer />
        <Copy />
    </div>
  )
}

export default Home;