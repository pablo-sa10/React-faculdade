import { useEffect, useState } from "react";
import './contador.css'

function Contador() {


    const [totalPessoas, setTotalPessoas] = useState(0);
    const [men, setMen] = useState(0);
    const [women, setWomen] = useState(0);

    function addMan() {
        setMen(prevMen => prevMen + 1);
        setTotalPessoas(prevTotal => prevTotal + 1);
    }

    function removeMan() {
        setMen(prevMen => (prevMen > 0 ? prevMen - 1 : 0));
        setTotalPessoas(prevTotal => (prevTotal > 0 ? prevTotal - 1 : 0));
    }

    function addWoman() {
        setWomen(prevWomen => prevWomen + 1);
        setTotalPessoas(prevTotal => prevTotal + 1);
    }

    function removeWoman() {
        setWomen(prevWomen => (prevWomen > 0 ? prevWomen - 1 : 0));
        setTotalPessoas(prevTotal => (prevTotal > 0 ? prevTotal - 1 : 0));
    }

    return (<div className="div-principal">
        <div className="div-head">
            <div className="div-total">
                <h1>Total</h1>
                <div id="total" className="total">{totalPessoas}</div>
            </div>
            <div className="refresh-button">
                <button>Refresh</button>
            </div>
        </div>
        <div className="div-pessoas">
            <div id="div-homem">
                <h3>Homem</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-gender-male" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8" />
                </svg>
                <div className="div-btns">
                    <button onClick={addMan} id="add-man" className="btn-add">+</button>
                    <button onClick={removeMan} id="remove-man" className="btn-remove">-</button>
                </div>
                <div className="total-sexo">
                    <div id="total-man" className="total">{men}</div>
                </div>
            </div>
            <div id="div-mulher">
                <h3>Mulher</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-gender-female" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5" />
                </svg>
                <div className="div-btns">
                    <button onClick={addWoman} id="add-woman" className="btn-add">+</button>
                    <button onClick={removeWoman} id="remove-woman" className="btn-remove">-</button>
                </div>
                <div className="total-sexo">
                    <div id="total-woman" className="total">{women}</div>
                </div>
            </div>
        </div>
    </div>
    );

}

export default Contador;