import '../css/card-diferenciais.css'

function CardDiferenciais({imagem, titulo, texto, aosDelay}) {
    return(
        <div className="card-diferenciais" data-aos="fade-up" data-aos-delay={aosDelay}>
            <img src={imagem} alt={titulo}/>
            <h5>{titulo}</h5>
            <p>{texto}</p>
        </div>
    )
}

export default CardDiferenciais;