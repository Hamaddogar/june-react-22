import { createStore } from 'redux'
  import {login_Reduceds} from '../Store/Reducers/login_Reducers'

 export  const  store = createStore(login_Reduceds);
