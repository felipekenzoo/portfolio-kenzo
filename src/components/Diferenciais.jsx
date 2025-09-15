import '../css/diferenciais.css'
import CardDiferenciais from './CardDiferencial.jsx';

import iconeFrontEnd from '../imgs/icon-frontend.svg';
import iconeDev from '../imgs/icon-dev.svg';
import iconeDetails from '../imgs/icon-details.svg';
import iconeDesign from '../imgs/icon-figma.svg';
import iconeEquipe from '../imgs/icon-equipe.svg';
import iconePerformance from '../imgs/icon-performance.svg';

function Diferenciais() {
    return (
        <>
            <section className="s-diferenciais" id="diferenciais">
                <div className="container">
                    <div className="diferenciais-title" >
                        <h2 data-aos="fade-up" aosDelay="100" >Meus diferenciais</h2>
                        <p data-aos="fade-up" aosDelay="200">Do código ao design, desenvolvo interfaces que combinam performance, usabilidade e uma <strong>experiência envolvente.</strong></p>
                    </div>
                <div className="grid-cards">    
                    <CardDiferenciais
                    aosDelay="100"
                    imagem={iconeFrontEnd}
                    titulo="Além do front-end"
                    texto = "Integro código e design para criar interfaces intuitivas e eficientes."
                    />
                    <CardDiferenciais
                    aosDelay="200"
                    imagem={iconeDesign}
                    titulo="Experiência em UI/UX"
                    texto = "Possuo conhecimentos em Figma, prototipação e arquitetura da informação."
                    />
                    <CardDiferenciais
                    aosDelay="300"
                    imagem={iconeEquipe}
                    titulo="Trabalho em equipe"
                    texto = "Tenho vivência com Scrum e colaboração em ambientes ágeis."
                    />
                    <CardDiferenciais
                    aosDelay="400"
                    imagem={iconeDev}
                    titulo="Desenvolvimento sólido"
                    texto = "HTML, CSS, Javascript e React aplicados com foco em performance e boas práticas."
                    />
                    <CardDiferenciais
                    aosDelay="500"
                    imagem={iconePerformance}
                    titulo="Performance e resultados"
                    texto = "Páginas otimizadas, rápidas e preparadas para converter visitantes em clientes."
                    />
                    <CardDiferenciais
                    aosDelay="600"
                    imagem={iconeDetails}
                    titulo="Atenção aos detalhes"
                    texto = "Cada elemento é pensado para oferecer uma experiência marcante."
                    />
                </div>
                </div>
            </section>
        </>
    )
}

export default Diferenciais;
