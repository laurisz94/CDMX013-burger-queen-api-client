import React from 'react';

const BotonesMesero = ({cambiarMenu}) => {
    return(
        <div className="botones-container">
           <button className="botones" onClick={cambiarMenu} value="desayuno"
            name="desayuno" type="submit">Desayunos</button>
           <button className="botones" onClick={cambiarMenu} value="comida" name="comida" type="submit">Comida</button>
        </div>
    );
}
export default BotonesMesero;