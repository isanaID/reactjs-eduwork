import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormElement from './RegisterComponent/FormElement';

export default class Register extends React.Component {
    render() {
    return (
        <div className="App">
            <FormElement />
        </div>
    )
}
}