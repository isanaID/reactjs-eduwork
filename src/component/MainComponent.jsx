import React from 'react';

class MainComponent extends React.Component {
    render () {
        return (
            <div class="container text-center">
            <h2>My Bio</h2>
            <img class="selfphoto" src="240.png" alt=""></img>
            <p class="fs-bold"> Halo, perkenalkan nama saya {this.props.name}, saya sedang berkuliah di Universitas Negeri Jakarta. sekarang saya sedang mempelajari ReactJS dikelas MERN </p>
            <div class="social-media">
              <a href="https://www.facebook.com/isanaid"><img src="https://cdn.icon-icons.com/icons2/2566/PNG/512/facebook_icon_153518.png" alt=""></img></a>
              <a href="https://www.instagram.com/isana.id/"><img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt=""></img></a>
              <a href="https://www.linkedin.com/in/isanawib/"><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" alt=""></img></a>
          </div>
          </div>
        )
    }
}

export default MainComponent;