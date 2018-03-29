import React from 'react'
import ReactDOM from 'react-dom'
import Reduxable, { createStore } from './newreduxables'
import Counter from './components/Counter'
import CounterReduxable from './reduxables'

const setRoomState = localStorage.getItem("roomState") ? JSON.parse(localStorage.getItem("roomState")) : {
  counter1:{isCheckBoxShow:false, isChecked:true, adult: 1, count:1},
  counter2: {count:2},
  counter3: {count:3},
  counter4: {count:4} 
};

const counter1 = new CounterReduxable(setRoomState.counter1);
const counter2 = new CounterReduxable(setRoomState.counter2)
const counter3 = new CounterReduxable(setRoomState.counter3)
const counter4 = new CounterReduxable(setRoomState.counter4)
const store = createStore(
  new Reduxable({
    counter1,
    counter2,
    counter3,
    counter4
  }),
)

const rootEl = document.getElementById('root')

const submit = () => {
  store.getState('counter');
  window.localStorage.setItem('roomState', JSON.stringify(store.getState('counter')) );
}



const render = () =>
  ReactDOM.render(
    <div>
      <div className={"room-based-container"}>
        <Counter
          value={counter1.state}
          store={store}
          handleSelectChangeCheckBox={counter2.reducers.handleselectchangecheckbox}
          handleSelectChangeAdult={counter1.reducers.handleselectchangeadult}
          handleSelectChangeChild={counter1.reducers.handleselectchangechild}
        />
        <Counter
          value={counter2.state}
          store={store}
          handleSelectChangeAdult={counter2.reducers.handleselectchangeadult}
          handleSelectChangeChild={counter2.reducers.handleselectchangechild}
          handleSelectChangeCheckBox={counter2.reducers.handleselectchangecheckbox}
        />
        <Counter
          value={counter3.state}
          store={store}
          handleSelectChangeAdult={counter3.reducers.handleselectchangeadult}
          handleSelectChangeChild={counter3.reducers.handleselectchangechild}
          handleSelectChangeCheckBox={counter3.reducers.handleselectchangecheckbox}
        />
        <Counter
          value={counter4.state}
          store={store}
          handleSelectChangeAdult={counter4.reducers.handleselectchangeadult}
          handleSelectChangeChild={counter4.reducers.handleselectchangechild}
          handleSelectChangeCheckBox={counter4.reducers.handleselectchangecheckbox}
        />
      </div>
      <div className={"inline-block"}>
      <button  className="submit" onClick={submit}>Submit</button>
      </div>

    </div>,
    rootEl,
  )

render()
store.subscribe(render)
