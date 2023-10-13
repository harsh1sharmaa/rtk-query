import {createStore} from 'redux'

import {rootreducer} from './rootreducer';
const reducer=()=>{
    return 100;
}
export const store = createStore(rootreducer)