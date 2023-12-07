import React from 'react';
import Navbar from './Navbar';
import PC from '../img/pc.jpg'
import '../styles/iphone.css'
import { BsWhatsapp } from 'react-icons/bs';
import Footer from './Footer';

function Computador() {

    return (
        <div>
            <Navbar />
            <div class="container-apple">
                <img className='img-phone' width={350} src={PC} alt="Iphone" />
                <div className='sobre'>
                    Os computadores são uma parte integrante de nossas vidas cotidianas. Desde a sua criação, <br></br>eles têm sido um facilitador em nossas vidas, nos ajudando em diversas tarefas  e oferecendo <br></br>recursos para a solução de problemas.
                    <br></br><br></br>
                    Foi em 1939 que o primeiro computador mecânico surgiu, desenvolvido por John Atanasoff e<br></br> Clifford Berry. Em seguida, veio o primeiro computador eletrônico, o ENIAC, em 1945. Desde então,<br></br> muitas marcas e modelos surgiram, incluindo a IBM, Dell, HP, Acer, Asus, Lenovo, Applee muito mais. <br></br> As marcas diferem em tamanho, preço, recursos, design e qualidade.
                    <br></br><br></br>
                    Alguns dos modelos mais populares incluem o MacBook Air, MacBook Pro, HP Specter x360, Dell XPS 13, <br></br> Asus Zenbook, Lenovo ThinkPad X1, Surface Laptop, Chromebook e muito mais. A evolução dos <br></br> computadores foi surpreendente ao longo dos anos,  <br></br>e a tecnologia continua a crescer em ritmo acelerado.
                </div>
            </div>
            <button className='btn-apple'><a href="https://wa.me/5585988113939" target="noreffer">Conserto de Computador</a> <BsWhatsapp /> </button>
            <div className='text-iphone'>
                <h2><span>Modelos</span> <br></br>
                    Modelos de Computador
                </h2>
                <p>Veja abaixo qual <strong>Computador ou Notebook</strong> (seja Windows, Linux ou Mac) <br></br>é o seu e entre em contato conosco.
                    Temos uma <strong>Assistência Técnica</strong> preparada para ajudar você!</p>
            </div>

            <ul className='iphone-models'>
                <li>Conserto de computador Dell</li>
                <li>Conserto de computador HP</li>
                <li>Conserto de computador Lenovo</li>
                <li>Conserto de computador Asus</li>
                <li>Conserto de computador Acer</li>
                <li>Conserto de computador Apple</li>
                <li>Conserto de computador Samsung</li>
                <li>Conserto de computador Sony</li>
                <li>Conserto de computador Toshiba</li>
                <li>Conserto de computador LG</li>
                <li>Conserto de computador MSI</li>
                <li>Conserto de computador Alienware</li>
                <li>Conserto de computador Gateway</li>
                <li>Conserto de computador Fujitsu</li>
                <li>Conserto de computador Compaq</li>
            </ul>

            <div className='manutencoes'>

                <p>
                    Todos estes modelos de <strong>computadores</strong> são capazes de oferecer um conjunto diferente de recursos para os <br></br>usuários,  variando desde sistemas operacionais até especificações técnicas. Cada modelo tem suas <br></br>vantagens e desvantagens, e quando surge um problema, é importante procurar uma assistência<br></br> técnica <strong>confiável</strong> e experiente para solucionar o problema.
                </p>

                <h2>
                    Conserto de Computador
                </h2>
                <p>Quando se trata de manutenção de <strong>computadores</strong>, é importante garantir que o seu dispositivo <br></br>esteja funcionando perfeitamente para garantir sua <strong>longevidade</strong> e melhorar sua <strong>experiência</strong> de uso.<br></br><br></br>

                    Em uma assistência técnica de computadores, a manutenção pode incluir <strong>limpeza física do <br></br>dispositivo, atualização de drivers, verificação de vírus e malware, limpeza de arquivos<br></br> desnecessários </strong>e muitos outros recursos para garantir a melhor experiência para o usuário.<br></br><br></br>

                    Além disso, é importante manter um backup de seus arquivos para evitar a <strong>perda de dados</strong>.<br></br> A manutenção regular pode garantir que o dispositivo funcione adequadamente, evitando <br></br>problemas futuros e prolongando a vida útil do dispositivo. Na assistência técnica, técnicos <br></br>qualificados estão disponíveis para ajudar os usuários a garantir que <br></br>seus computadores estejam <strong>funcionando de forma ideal</strong>.
                </p>

                <button className='btn-apple'><a href="https://wa.me/85986026767" target="noreffer">Conserto de Computador</a> <BsWhatsapp /> </button>

            </div>
            <Footer />
        </div>
    )
}

export default Computador;
