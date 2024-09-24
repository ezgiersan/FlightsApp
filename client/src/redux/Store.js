import { configureStore } from '@reduxjs/toolkit';
import {getReducer} from './reducer/getReducer';
import { postReducer } from './reducer/postReducer';

const store = configureStore({
    reducer: {
        allAirlines: getReducer("airlines"),
        allFlights: getReducer("flights"),
        saveFlight: postReducer("save-flight"),
        myFlights: getReducer("my-flights")
    }
});

export default store;
