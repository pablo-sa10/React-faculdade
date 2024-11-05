import { useEffect, useState } from "react";
import './contador.css'

function Contador() {
    return (<div className="div-principal">
        <div className="div-head">
            <div className="div-total">
                <h1>Total</h1>
                <div className="total">0</div>
            </div>
            <div className="refresh-button">
                <button>Refresh</button>
            </div>
        </div>
        <div className="div-pessoas">
            <div>
        homem
            </div>
            <div>
        mulher
            </div>
        </div>
    </div>
    );
}

export default Contador;