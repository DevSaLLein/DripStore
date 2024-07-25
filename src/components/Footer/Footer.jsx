import footerLogo from "./../../../public/svgs/logo-footer.svg";
import fbkLogo from "./../../../public/svgs/facebook.svg";
import instaLogo from "./../../../public/svgs/instagram.svg";
import ttLogo from "./../../../public/svgs/twitter.svg";

import "./Footer.css";

export function Footer() {
    return (
        <footer className="footer">
            {/* div geral */}
            <div className="geral">
                <div className="container">
                    {/* div das logos */}
                    <div className="dig-logo">
                        <img src={footerLogo} alt="Logo Digital Store" />
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Odio mollitia temporibus modi est qui distinctio!
                        </p>
                        <div className="redesLogo">
                            <img src={fbkLogo} alt="Logo Facebook" />
                            <img src={instaLogo} alt="Logo Instagram" />
                            <img src={ttLogo} alt="Logo Twitter" />
                        </div>
                    </div>
                    {/* div das logos */}
                    {/* div das informações */}
                    <div className="container-infos">

                        <div className="listainfos1">
                            <h3>Informação</h3>
                            <ul>
                                <li>Sobre Drip Store</li>
                                <li>Segurança</li>
                                <li>Wishlist</li>
                                <li>Blog</li>
                                <li>Trabalhe conosco</li>
                                <li>Meus Pedidos</li>
                            </ul>
                        </div>

                        <div className="listainfos2">
                            <h3>Categorias</h3>
                            <ul>
                                <li>Camisetas</li>
                                <li>Calças</li>
                                <li>Bonés</li>
                                <li>Headphones</li>
                                <li>Tênis</li>
                            </ul>
                        </div>

                        <div className="listainfos3">
                            <h3>Contato</h3>
                            <ul>
                                <p>
                                    Av. Santos Dumont, 1510 - 1 andar - Aldeota,
                                    Fortaleza - CE, 60150-161
                                </p>
                                <li>(85) 3051-3411</li>
                            </ul>
                        </div>
                    </div>
                    {/* div das informações */}
                </div>
                {/* div da linha de baixo */}
                <div className="digcoll">
                    <hr />
                    <p>@ 2022 Digital College</p>
                </div>
                {/* div da linha de baixo */}
            </div>
            {/* div geral */}
        </footer>
    );
}
