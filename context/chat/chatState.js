import React, { useReducer } from 'react';
import ChatContext from "./chatContext";
import chatReducer from "./chatReducer";
import io from "socket.io-client";
import { MOSTRANDO_INFORMACION } from "../../type";
import axios from "axios";


const ChatState = ( { children } ) => {

    const initialState = {
        valor: true,
        datos: null
    };

    //State para context
    const [state, dispatch] = useReducer(chatReducer, initialState);

    const socketConexion = () => {
        const PORTServidor = `${process.env.backendURL}`;
        const socket = io(PORTServidor);
        socket.on("connect", () => {
            console.log("Conectado desde froent end");
        });
    }

    return ( 
        <ChatContext.Provider
            value={{
                datos: state.datos,
                socketConexion
            }}
        >
            { children }
        </ChatContext.Provider>
    );
}
 
export default ChatState;