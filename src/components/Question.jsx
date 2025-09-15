import '../css/faq.css';
import arrowIcon from '../imgs/icon-pergunta.svg';

function Question({ question, answer, isOpen, onClick }) {

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <div className="faq-question" onClick={onClick}>
                <div className="question-title">
                    <h4 className="pergunta">{question}</h4>
                    <img 
                        src={arrowIcon} 
                        alt="Ícone de seta" 
                        className={`arrow ${isOpen ? 'open' : ''}`} 
                    />
                </div>
            </div>
            <div className="faq-resposta"><p className='resposta'>{answer}</p></div>
        </div>
    );
}

export default Question;
