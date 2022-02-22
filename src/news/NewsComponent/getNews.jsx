import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const Input = ({type, name, placeholder, className, onChange}) => {
    return (
        <div>
        <label>
            
        </label><input type={type} name={name} placeholder={placeholder} className={className} onChange={e => onChange(e.target.value)}/>
        <br />
        </div>
    )
}

const api = axios.create({
    baseURL: "https://newsapi.org/v2/",
    headers: {
        "X-Api-Key": "de5ca3f710ee45f58da58be47433cba8"
    }
});

export default class GetNews extends React.Component {
    state = {
        search: 'indonesia',
        articles: []
    }

    handleSubmit = event => {
        event.preventDefault();
    }
    constructor(props) {
        super(props);
        api.get(`everything?q=${this.state.search}&sortBy=publishedAt&apiKey=de5ca3f710ee45f58da58be47433cba8`)
        .then(res => {
            console.log(res.data.articles);
        })
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