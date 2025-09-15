import '../css/processo.css'

import CardProcesso from './CardProcesso.jsx'
import imagemPesquisa from '../imgs/processo-pesquisa.svg'
import imagemDesign from '../imgs/processo-design.svg'
import imagemDesenvolvimento from '../imgs/processo-desenvolvimento.svg'
import imagemEntrega from '../imgs/processo-entrega.svg'


function Processo() {
    return (
        <section className="s-processo" id="workflow">
            <div className="container">
                <div className="processo-title" data-aos="fade-up">
                    <h2>Meu processo de trabalho</h2>
                    <div className="cards">
                    <CardProcesso
                    aosDelay="100"
                    img={imagemPesquisa}
                    titulo="Pesquisa"
                    texto="Analiso negócio e concorrentes para identificar necessidades reais e alinhar o design aos objetivos."
                    numero="01"
                    />
                    <CardProcesso
                    aosDelay="200"
                    img={imagemDesign}
                    titulo="Design"
                    texto="Crio fluxos, wireframes e interfaces visuais focadas em clareza, usabilidade e consistência."
                    numero="02"
                    />
                    <CardProcesso
                    aosDelay="300"
                    img={imagemDesenvolvimento}
                    titulo="Desenvolvimento"
                    texto="Transformo o design em interfaces reais, garantindo fidelidade visual e eficiência no desenvolvimento."
                    numero="03"
                    />
                    <CardProcesso
                    aosDelay="400"
                    img={imagemEntrega}
                    titulo="Entrega"
                    texto="Entrego o projeto finalizado com toda a documentação necessária, garantindo clareza e prontidão."
                    numero="04"
                    />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Processo;