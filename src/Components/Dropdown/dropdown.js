import React, { Component } from 'react';
import './dropdown.css';
// import drop from '../../assets/dropdown.png';

class Dropdown extends Component {
    state = {
        options : [
            {value: 'default', title: 'default'},
            {value: 'mobile', title: 'Mobile'},
            {value: 'food', title: 'Food'},
            {value: 'cloth', title: 'Cloth'},
        ],
        default: 'default',
    }

    dropdownHandler = (event) => {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className='dropdown-wrapper'>
                <select 
                    className='dropdown' 
                    value={ this.state.default }
                    onChange={ this.dropdownHandler }>
                    {
                        this.state.options.map((option, index) => {
                            return <option 
                                        className='dropdown-text' 
                                        value={ option.value } 
                                        key={ index }>
                                        { option.title }
                                    </option>
                        })
                    }
                </select>
            </div>
        );
    }
}

export default Dropdown;