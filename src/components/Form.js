import React, { Component }  from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



class Form extends Component { 
    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date()
        };
      }
     
      handleChange = (date) => {
        this.setState({
          startDate: date
        });
      }

    render () {
        return (
    <div>
        <DatePicker
    selected={this.state.startDate}
    onChange={this.handleChange}/> 
    <br/> <br/> <br/>
            <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Aircraft
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button">MQ1B</button>
            <button class="dropdown-item" type="button">MQ9</button>
            <button class="dropdown-item" type="button">Avenger</button>
            <button class="dropdown-item" type="button">Tail</button>
        </div>
        </div>
        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <div class="input-group-text">
            <input type="checkbox" aria-label="Checkbox for following text input"/>
            </div>
        </div>
        <input type="text" class="form-control" aria-label="Text input with checkbox"/>
        </div>
    </div>
        )
    }
}

export default Form

