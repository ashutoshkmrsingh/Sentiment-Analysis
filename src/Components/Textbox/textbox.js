import React, { Component } from 'react';
import './textbox.css';

class Textbox extends Component {
    state = {
        text: this.props.input,
    }

    render() {
        return(
            <div className='textbox'>
            <p className='text'>{ this.state.text }</p>
            </div>
        );
    }
}

export default Textbox;