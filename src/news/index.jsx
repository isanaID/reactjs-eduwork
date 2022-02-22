import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./NewsComponent/search";
import GetNews from "./NewsComponent/getNews";

export default class News extends React.Component {
    state = {
        search: 'indonesia',
        articles: []
    }

    render() {
        return (
            <div>
             <GetNews />
            </div>
        )
    }
}
