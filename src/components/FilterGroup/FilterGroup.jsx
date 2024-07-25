import "./FilterGroup.css";

export function FilterGroup() {
    return (
        <aside>
            <div className="side">
                <div className="filtroprods">

                    <h4 className="dcima">Filtrar por</h4>

                    <hr className="linha" />

                    <div className="markas">
                        <h4>Marka</h4>

                        <form>
                            <div className="addi">
                                <input type="checkbox" id="addidas" value="ADDIDAS" />
                                <label htmlFor="addidas">Addidas</label>
                            </div>

                            <div className="ciaga">
                                <input type="checkbox" id="calenciga" value="CALENCIAGA" />
                                <label htmlFor="calenciaga">Calenciaga</label>
                            </div>

                            <div className="wiss">
                                <input type="checkbox" id="k-swiss" value="K-SWISS" />
                                <label htmlFor="k-swiss">K-Swiss</label>
                            </div>

                            <div className="like">
                                <input type="checkbox" id="nike" value="NIKE" />
                                <label htmlFor="nike">Nike</label>
                            </div>

                            <div className="juma">
                                <input type="checkbox" id="puma" value="PUMA" />
                                <label htmlFor="puma">Puma</label>
                            </div>

                        </form>
                    </div>

                    <div className="catingoria">
                        <h4>Categoria</h4>

                        <form>
                            <div className="sportez">
                                <input type="checkbox" id="esporte-e-lazer" value="ESPORTES-E-LAZER" />
                                <label htmlFor="esporte-e-lazer">Esportes e lazer</label>
                            </div>

                            <div className="casa">
                                <input type="checkbox" id="casual" value="CASUAL" />
                                <label htmlFor="casual">Casual</label>
                            </div>

                            <div className="util">
                                <input type="checkbox" id="utilitario" value="UTILITARIO" />
                                <label htmlFor="utilitario">Utilitário</label>
                            </div>

                            <div className="racha">
                                <input type="checkbox" id="corrida" value="CORRIDA" />
                                <label htmlFor="corrida">Corrida</label>
                            </div>
                        </form>
                    </div>

                    <div className="gen">
                        <h4>Gênero</h4>

                        <form>
                            <div className="masc">
                                <input type="checkbox" id="masculino" value="MASCULINO" />
                                <label htmlFor="masculino">Masculino</label>
                            </div>

                            <div className="femea">
                                <input type="checkbox" id="feminino" value="FEMININO" />
                                <label htmlFor="feminino">Feminino</label>
                            </div>

                            <div className="unisex">
                                <input type="checkbox" id="unisex" value="UNISEX" />
                                <label htmlFor="unisex">Unisex</label>
                            </div>
                        </form>
                    </div>

                    <div className="stado">
                        <h4>Estado</h4>

                        <form>
                            <div className="nuevo">
                                <input type="radio" id="novo" value="NOVO" />
                                <label htmlFor="novo">Novo</label>
                            </div>

                            <div className="vei">
                                <input type="radio" id="usado" value="USADO" />
                                <label htmlFor="usado">Usado</label>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </aside>
    );
}