import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Input = ({type, name, placeholder, className, onChange}) => {
    return (
        <div>
        <label>
            
        </label><input type={type} name={name} placeholder={placeholder} className={className} onChange={e => onChange(e.target.value)}/>
        <br />
        </div>
    )
}

export default class Search extends React.Component {
    state = {
        search: ''
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="d-flex">
                    <Input type="text" name="search" placeholder="Search..." onChange={value => this.setState({search: value})} />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}
