import '../css/cta.css'
import '../css/button.css'


function Cta() {
    return (
        <>
        <div className="s-cta" id='contato'>
            <div className="container">
                <h1 data-aos="fade-up">Vamos começar um projeto juntos?</h1>
                <p data-aos="fade-up" data-aos-delay="100">Do primeiro esboço ao código final, cada detalhe importa. Seu projeto merece ser levado ao <strong>próximo nível.</strong></p>
                <a href="mailto:felipe.sunakozawa@gmail.com" className="btn-primary" data-aos="fade-up" data-aos-delay="200">Comece um projeto</a>
            </div>
        </div>
        </>
    )
}

export default Cta;