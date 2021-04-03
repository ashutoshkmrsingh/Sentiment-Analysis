import React, { Component } from 'react';
import './button.css';

class Button extends Component {
    state = {
        isClicked: false
    }

    buttonClickHandler = (event) => {
        console.log('button clicked');

        this.props.function();
    }

    render() {
        return(
            <div className='button' onClick={ this.buttonClickHandler }>
                <p className='button-text'>{ this.props.text }</p>
            </div>
        );
    }
}

export default Button;