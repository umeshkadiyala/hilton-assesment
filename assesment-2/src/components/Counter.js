import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  static propTypes = {
    value: PropTypes.object,
    handleSelectChangeAdult: PropTypes.func.isRequired,
    handleSelectChangeChild: PropTypes.func.isRequired,
    handleSelectChangeCheckBox: PropTypes.func
  }

  handleChangeAdult = (event) => {
     this.props.handleSelectChangeAdult(event.target.value);
  }
  handleChangeChild = (event) => {
     this.props.handleSelectChangeChild(event.target.value);
  }
  handleCheckBox = (event) => {

     this.props.handleSelectChangeCheckBox({
      value: event.target.checked,
      store: this.props.store
    });
  }

  render() {
    const { value} = this.props
    
    return (
      <div className = {"room-based " + (value.isChecked ? 'is-room-checked' : 'inactive-mode')}>
        <div>
          {'Room '} {value.count} {'   '}
          {value.isCheckBoxShow &&
            <input type="checkbox" onChange={this.handleCheckBox} checked={value.isChecked} />
          }
        </div>
        <div className={"width-50"}>
          {'Adults: (18+)'}

          <select onChange={this.handleChangeAdult} disabled={!value.isChecked} value={value.adult}>
              <option value="1">1</option>
              <option value="2">2</option>
          </select>
        </div>
        <div className={"width-50"}>
          {'   Children: (0-17)'}

          <select onChange={this.handleChangeChild} disabled={!value.isChecked} value={value.child}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
          </select>
        </div>
       
      </div>
    )
  }
}

export default Counter
