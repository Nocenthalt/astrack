import React from "react";
import Particles from 'react-particles-js';
import '../Styles/bg.css';

function randAni(){
  return 1 + Math.round(Math.random() * 5)
}

function Background() {
  return (
    <div>
      <Particles
      className = "bg-particles"
      params={{
        "particles": {
          "number": {
            "value": 60,
            "density": {
              "enable": true,
              "value_area": 1500
            }
          },
          "line_linked": {
            "enable": true,
            "opacity": 0.15
          },
          "move": {
            "direction": "right",
            "speed": 0.15
          },
          "size": {
            "value": 1.5
          },
          "opacity": {
            "anim": {
              "enable": true,
              "speed": randAni(),
              "opacity_min": 0.7
            }
          }
        },
        "interactivity": {
            "events": {
              "onclick": {
                "enable": true,
                "mode": "push"
              }
            },
            "modes": {
              "push": {
                "particles_nb": 1
              }
            }
        },
        "retina_detect": true
      }} />

      <div className="bg-text">
        <h1>Get today's star chart with just one click !</h1>
        <a href="/map"><button className="bg-btn" >Click here</button></a>
      </div>

    </div>
  );
}



export default Background