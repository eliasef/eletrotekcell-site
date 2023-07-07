import React from 'react';
import '../styles/cards.css';
import { FiSmartphone } from 'react-icons/fi';
import { FaBatteryQuarter } from 'react-icons/fa';
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2'

function Cards() {
    return (
        <main className='cards' id='servicos'>
            <section className='card c1'>
                <FiSmartphone />
                <h3>Troca de tela ou display</h3>
                <span>Trocamos vidros e display, instalamos películas de vidro temperado, plástico, gel silicone e líquida.</span>
            </section>
            <section className='card c2'>
                <FaBatteryQuarter />
                <h3>Troca de bateria</h3>
                <span>Suporte técnico que garante a qualidade da sua bateria com preço justo.</span>
            </section>
            <section className='card c3'>
                <HiOutlineWrenchScrewdriver />
                <h3>Reparo de computadores e celulares</h3>
                <span>Nossa equipe é especializada em conserto de celulares e também computadores, por isso temos uma Assistência Técnica preparada para ajudar você!</span>
            </section>
        </main>
    )
}

export default Cards
