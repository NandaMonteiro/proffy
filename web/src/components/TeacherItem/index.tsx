import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem () {
    return( 
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/16133098?s=460&u=83003d201f99e2ca403f1ee9998ddc5e6882768d&v=4" alt="Fernanda"/>
                    <div>
                        <strong>Fernanda Alves</strong>
                        <span>Química</span>
                    </div>
                
                </header>
                
                    <p>
                        Lorem ipsum accumsan ullamcorper posuere iaculis,
                        <br/><br/>
                        inceptos tincidunt ac potenti. fermentum cubilia suspendisse facilisis eleifend, 
                        sed curabitur suscipit nullam lobortis, vehicula dolor morbi. imperdiet vehicula
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="WhatsApp"/>
                            Entrar em contato
                        </button>
                    </footer>
            
        </article>
    );
}

export default TeacherItem;