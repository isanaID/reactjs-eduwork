import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import GetNews from "./NewsComponent/getNews";
import NavComponent from "../component/NavComponent";
import { Container, Form, Button } from "react-bootstrap";
import swal from "sweetalert";

export default class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: 'indonesia',
            articles: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const search = e.target.elements.search.value;
        this.setState({search: search});
        if(search === "") {
            swal("Oops!", "Please enter a search", "error");
        }
    }

    componentDidMount() {
        axios.get(`https://newsapi.org/v2/everything?q=${this.state.search}&sortBy=publishedAt&apiKey=de5ca3f710ee45f58da58be47433cba8`)
        .then(res => {
            return res.data.articles;
        })
        .then(articles => {
            this.setState({articles: articles});
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.search !== this.state.search) {
            axios.get(`https://newsapi.org/v2/everything?q=${this.state.search}&sortBy=publishedAt&apiKey=de5ca3f710ee45f58da58be47433cba8`)
            .then(res => {
                return res.data.articles;
            })
            .then(articles => {
                this.setState({articles: articles});
            })
        }
    }

    render() {
        return (
            <div>
            <div>
            <NavComponent />
            </div>
            <br />
            <br />
            <br />
            <br />
            <Container>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="search">
                    <Form.Control type="text" placeholder="search" />
                </Form.Group>
                    <Button type="submit" variant="primary">Search</Button>
            </Form>
            </Container>
            <Container>
                <div className="row  d-flex justify-content-evenly">
                        {this.state.articles.map(article => {
                            return (
                                <div className="col mt-3 mb-3">
                                <GetNews 
                                author={article.author}
                                title={article.title}
                                img={article.urlToImage}
                                published={article.publishedAt}
                                description={article.description}
                                url={article.url} />
                                </div>
                            )
                        })}
                </div>
            </Container>
            </div>
        )
    }
}
