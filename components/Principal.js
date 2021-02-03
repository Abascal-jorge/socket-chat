import React, { useState } from 'react';
import styled from "@emotion/styled";
import axios from "axios";

const Mensajes = styled.div`
    h2{
        text-align: center;
    }
    form{
        padding: 10px;
        border-radius: 10px;
    }
    form div{
        display: flex;
        margin-bottom: 20px;
        align-items: center;
        label{
            flex-basis: 30%;
            font-weight: bold;
        }

        input, textarea{
            flex: 1;
        }

        textarea{
            height: 150px;
        }
    }

    form  input[type="submit"]{
        width: 100%;
        border: none;
        padding: 10px;
        outline: none;
        background-color: blue;
        color: white;
        font-weight: bold;
        font-size: 1.4rem;
    }
    
    input[type="text"], textarea{
        outline: none;
        appearance: none;
        border: 1px solid gray;
        border-radius: 10px;
        padding: 10px;
    }
`;


const Principal = () => {

    const [datos, setDatos] = useState({});
    
    const consultarAPI = async () => {
        try {
            const url = `http://localhost:4000/usuario`;
            const resultado = await axios.get(url);
            setDatos(resultado);   
        }catch (error) {
            console.log(error);
        }
    }

    consultarAPI();

    return ( 
        <div className="contenedor">
            <Mensajes>
                <h2>Iniciar Conversacion</h2>
                <form>
                    <div>
                        <label htmlFor="mensaje">Mensajes</label>
                        <textarea id="mensaje">

                        </textarea>
                    </div>
                    <div>
                        <label htmlFor="usuario">Nombre usuario</label>
                        <input type="text" id="usuario" />
                    </div>
                    <div>
                        <label htmlFor="usuario">Nombre usuario</label>
                        <input type="text" id="usuario" />
                    </div>
                    <input type="submit" value="Enviar mensaje"/>
                </form>
            </Mensajes>
        </div>
     );
}
 
export default Principal;