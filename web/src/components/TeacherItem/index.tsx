import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import daiImg from '../../assets/images/dai.jpg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src={daiImg} alt="Daiane Crivelaro" />
        <div>
          <strong>Daiane Crivelaro</strong>
          <span>Português/Literatura/Redação</span>
        </div>
      </header>

      <p>
        Daiane Crivelaro é doutoranda em literatura pela UFF; mestra e graduada
        pela UFRJ.
        <br />
        <br />
        Hoje, atua como professora efetiva do Colégio Pedro II. Em anos
        anteriores, foi professora do CEFET-RJ, Eliezer Max, Colégio de
        Aplicação da Universidade do Estado do Rio de Janeiro, do Colégio de
        Aplicação da Universidade Federal do Rio de Janeiro e do Sistema pH de
        Ensino. Sob orientação de Stefania Chiarelli, pesquisa, atualmente, a
        escrita literária feminina e busca, com isso, trazer os estudos para o
        campo prático da educação básica.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$150,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
