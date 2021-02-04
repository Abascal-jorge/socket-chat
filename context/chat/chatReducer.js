import { MOSTRANDO_INFORMACION } from "../../type";

export default (state, action) => {
    switch (action.type) {
        case MOSTRANDO_INFORMACION:
            return{
                ...state,
                datos: action.payload
            }
        default:
            return;
    }
};
