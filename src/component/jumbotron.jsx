import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../sass/style.scss';

export default class Jumbotron extends React.Component {
    render () {
        return (
            <div className="p-5 mb-4 bg-light rounded-3 jumbotron">
            <div className="container py-5 text-center">
              <p className="fs-5 fst-italic mt-5">Full Stack Developer</p>
              <h1 className="display-4">Wibisana Putra Setyanegara</h1>
              <form href="#contact">
              <button className="btn border border-dark btn-sm mt-5 shadow-sm text-white px-3 py-2">Contact Me</button>
              </form>
            </div>
          </div>
        )
}
}