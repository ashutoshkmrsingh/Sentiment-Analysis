import React, { Component } from 'react';
import './editor.css';

class Editor extends Component {
    state = {
        value : '',
    }

    readInput = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div className='editor'>
                <textarea type='text' className='input' placeholder='Enter text here. . .' onChange={ this.readInput }/>
            </div>
        );
    }
}

export default Editor;