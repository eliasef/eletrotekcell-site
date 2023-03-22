import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Cards from './Cards';
import Servicos from './Servicos';
import SobreNos from './SobreNos';
import Footer from './Footer';

function Home() {
  return (
    <div>
        <Navbar />
        <Banner />
        <Cards />
        <Servicos />
        <SobreNos />
        <Footer />
    </div>
  )
}

export default Home;