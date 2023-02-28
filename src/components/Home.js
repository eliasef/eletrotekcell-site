import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Cards from './Cards';
import Servicos from './Servicos';

function Home() {
  return (
    <div>
        <Navbar />
        <Banner />
        <Cards />
        <Servicos />
    </div>
  )
}

export default Home