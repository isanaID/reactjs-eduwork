import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import NavComponent from "../component/NavComponent";
import { Container, Form, Card, Button } from "react-bootstrap";
import swal from "sweetalert";

function Newsv2() {
    const [news, setNews] = React.useState([]);
    const [search, setSearch] = React.useState("indonesia");
    
    const getNews = () => {
        axios.get(`https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=de5ca3f710ee45f58da58be47433cba8`)
        .then(res => {
            return res.data.articles;
        })
        .then(articles => {
            setNews(articles);
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const search = e.target.elements.search.value;
        setSearch(search);
        if(search === "") {
            swal("Oops!", "Please enter a search", "error");
        }
    }

    useEffect(() => {
        getNews();
    }, [search]);
    
    return (
        <div>
            <NavComponent />
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
                        {news.map(article => {
                            return (
                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={article.urlToImage} />
                                <Card.Body>
                                    <Card.Title>{article.title}</Card.Title>
                                    <Card.Text>
                                    <br/>{article.author} - {article.publishedAt}<br/><br/>{article.description}
                                    </Card.Text>
                                    <Button href={article.url} variant="primary">Read More</Button>
                                </Card.Body>
                                </Card>
                            )
                        })}
                </div>
            </Container>
        </div>
    )
}

export default Newsv2;