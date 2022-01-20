import React, { Component } from "react";
import ModalVideo from 'react-modal-video'

import about1Img from "../../../assets/images/about-1.png"
import about2Img from "../../../assets/images/about-2.png"
import {Link} from "react-router-dom";

class AboutWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

  render() {
      const {isOpen } = this.state;
    return (
       <>
           {/* ===============  About wrapper area start =============== */}
           <div className="about-wrapper mt-120">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-7 col-md-12">
                           <div className="about-wrapper-left">
                               <div className="about-img">
                                   <img src={about1Img} alt="" className="img-fluid" />
                               </div>
                               <div className="about-video">
                                   <img src={about2Img} alt="" className="img-fluid"  />
                                   <i onClick={() => this.setState({ isOpen: true })} class="flaticon-play-button-arrowhead"></i>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-5 col-md-12">
                           <div className="about-wrapper-right section-head head-left">
                               <h5>Sobre Centros de Saude</h5>
                               <p>São instituições através da qual se presta uma atenção primária de saúde a indivíduos e famílias,
                                considerando estas como elementos de uma comunidade com os seus problemas, 
                                necessidades e comportamentos".A atenção primária engloba acções de carácter preventivo, 
                                curativo (diagnóstico, tratamento e referência aos níveis diferenciados) cuidados de reabilitação 
                                (que a este nível não requerem pessoal nem material especializado) e medidas de promoção da saúde.
                                 Os Centros de Saúde possuem uma equipa de saúde chefiada por um médico e dispõem duma rede de extensões,
                                  para aproximar a prestação de cuidados das populações.</p>
                                <h5>Conteúdo funcional (Prestações)</h5>
                               <ul className="about-list">
                                   <li><i className="flaticon-double-checking" /> Atendimento à mulher</li>
                                   <li><i className="flaticon-double-checking" /> Saúde escolar</li>
                                   <li><i className="flaticon-double-checking" /> Atendimento à criança</li>
                                   <li><i className="flaticon-double-checking" /> Saúde mental</li>
                                   <li><i className="flaticon-double-checking" /> Saúde ocupacional</li>
                                   <li><i className="flaticon-double-checking" /> Saúde oral</li>
                                   <li><i className="flaticon-double-checking" /> Profilaxia das doenças evitáveis</li>
                                   <li><i className="flaticon-double-checking" /> Oftalmologia</li>
                                   <li><i className="flaticon-double-checking" /> Promoção de hábitos saudáveis</li>
                                   <li><i className="flaticon-double-checking" /> Otorrinolaringologia</li>
                                   <li><i className="flaticon-double-checking" /> Acção medico-social integrada</li>
                                   <li><i className="flaticon-double-checking" /> Reabilitação</li>
                               </ul>
                               <div className="about-wrapper-btn">
                                   <a href="https://www.minsaude.gov.cv/index.php/atencao-primaria-secundaria/centros-de-saude"className="btn-common">Consulte mais informações</a>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

           <React.Fragment>
               <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="-tJYN-eG1zk" onClose={() => this.setState({ isOpen: false })} />
           </React.Fragment>

           {/* ===============  About wrapper area end =============== */}
       </>
    );
  }
}

export default AboutWrapper;
