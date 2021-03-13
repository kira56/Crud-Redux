import { combineReducers } from 'redux';
import productosReducer from '../reducers/productosreducer';
import alertaReducer from '../reducers/alertaReducer';

export default combineReducers({
    productos: productosReducer,
    alerta: alertaReducer
});
