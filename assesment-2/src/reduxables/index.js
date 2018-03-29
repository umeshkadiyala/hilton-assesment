import Reduxable from '../newreduxables'
import _ from 'lodash'

class CounterReduxable extends Reduxable {
  constructor(props) {
    super({adult:1,child:0,isChecked:false, isCheckBoxShow: true, ...props})
  }

  static reducers = {
    handleselectchangeadult:  function(state,value) {
      return {
        ...state,
        adult: value
      }
	},
	handleselectchangechild:  function(state,value) {
      return {
        ...state,
        child: value
      };
	},
  handleselectchangecheckbox:  function(state,object) {
      let count = state.count;
      let storeCounter = _.keys(object.store.getState()).length;
      let difference = storeCounter - count;

      if( count > 0 && !object.store.getState()['counter' + (count - 1)].isChecked && object.value){
        return {
          ...state,
          child:0,
          adult:1,
          isChecked: false
        };  
      }
      if(!object.value){

        for (let i = count+1; i <= storeCounter ; i++ ) {
          let currentState = object.store.getState()['counter'+i];
            object.store.getState('counter')['counter'+i] = {
              ...currentState,
              child:0,
              adult:1,
              isChecked:false
            };

        }  
      }
      if(!object.value){
        return {
          ...state,
          child:0,
          adult:1,
          isChecked: object.value
        };   
      }
      
      return {
        ...state,
        isChecked: object.value
      };
  }
  }
}

export default CounterReduxable
