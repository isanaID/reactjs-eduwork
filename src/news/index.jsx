import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./NewsComponent/search";
import GetNews from "./NewsComponent/getNews";
import NavComponent from "../component/NavComponent";
import { Container } from "react-bootstrap";

export default class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: 'indonesia',
            articles: []
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
    render() {
        return (
            <div>
            <div>
            <NavComponent />
            </div>
            
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
