import Layout from './Layout'
import Safe from "react-safe"

const Home = () => (
    <Layout>
        <main>
            <div id="Sobre" className="parallax-container valign-wrapper">
                <div className="col s12 container">
                    <h2 className="header white-text"><u style={{textDecoration: "purple underline"}}>Sobre</u></h2>
                    <div className="card horizontal">
                        <div className="card-image size-screen">
                            <img src={require('./assets/jose.jpg')} alt="Washington Gomes" height="205px" />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p style={{textAlign: "justify"}}>Programador ousado com conhecimentos de Java Script e React, apaixonado por tecnologia e programação. Graduando em Análise e desenvolvimento de sistemas na UNIFIP. Busco pôr em prática o que aprendi e continuo aprendendo no mundo da programação para criar códigos inovadores para os clientes da Empresa.</p>
                            </div>
                            <div className="card-action size-screen-card">
                                <a href="https://docs.google.com/document/d/1ZIGCr82boCoVLGenQ4wIwGDBrtIA2en_/edit" className="waves-effect waves-light btn purple"><i className="material-icons left">cloud_download</i>Baixar currículo</a>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="parallax">
                    <img src={require('./assets/background.jpg')} />
                </div>
            </div>

            <div className="container" style={{marginTop: "50px"}}>   
                <div id="Skills" className="center-align">
                    <h2 className="header"><u style={{textDecoration: "purple underline"}}>Skills</u></h2>
                    <div className="row">
                        <div className="col s12 l3 separate-icon">
                            <i className="devicon-javascript-plain-wordmark really-big-icon"></i>
                        </div>
                        <div className="col s12 l3 separate-icon">
                            <i className="devicon-html5-plain-wordmark really-big-icon"></i>
                        </div>
                        <div className="col s12 l3 separate-icon">
                            <i className="devicon-css3-plain-wordmark really-big-icon"></i>
                        </div>
                       
                    </div>
                    <div className="row center-align">
                        <div className="col s12 l3 separate-icon">
                            <i className="devicon-react-original-wordmark really-big-icon"></i>
                        </div>
                         <div className="col s12 l3 separate-icon">
                            <i className="devicon-github-plain-wordmark really-big-icon"></i>
                        </div>
                        
                    </div>
 
                </div>

            </div>
            <div className="container" style={{marginTop: "120px"}}>   
                
            </div>

            <style jsx>{`
                @media screen and (max-width: 992px) {
                    .size-screen {
                        display: none;
                    }

                    .size-screen-card {
                        text-align: center;
                    }
                }

                .really-big-icon {
                    font-size: 120px;
                }

                @media screen and (max-width: 992px) {
                    .really-big-icon {
                        display: inline-block;
                        margin-top: 30px;
                    }
                }
            `}</style>

            <Safe.script>{`
                document.addEventListener('DOMContentLoaded', function() {
                    const elems = document.querySelectorAll('.parallax')
                    const instances = M.Parallax.init(elems, {})
                })
            `}</Safe.script>
        </main>
    </Layout>
)

export default Home