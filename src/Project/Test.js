import React, { Component } from 'react'
import Particles from 'react-particles-js'

class Test extends Component {
    constructor() {
        super();
    
        this.state = {
          phoneParticles: 25,
          phoneGrab: 200,
          tabletParticles: 25,
          tabletGrab: 300,
          desktopParticles: 25,
          desktopGrab: 300
        };
      }

    render(){
        return(
            <Particles
          className="intro-animation"
          params={{
            particles: {
              number: {
                value:
                  window.innerWidth >= 1024
                    ? this.state.desktopParticles
                    : window.innerWidth <= 480
                      ? this.state.phoneParticles
                      : window.innerWidth > 480 && window.innerWidth < 1024
                        ? this.state.tabletParticles
                        : null,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: '#48F908'
              },
              shape: {
                type: 'triangle',
                stroke: {
                  width: 0,
                  color: '#F508F9'
                },
                polygon: {
                  nb_sides: 7
                },
                image: {
                  src: 'img/github.svg',
                  width: 500,
                  height: 500
                }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#061f55',
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 4,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'grab'
                },
                onclick: {
                  enable: true,
                  mode: 'push'
                },
                resize: true
              },
              modes: {
                grab: {
                  distance:
                    window.innerWidth >= 1024
                      ? this.state.desktopGrab
                      : window.innerWidth <= 480
                        ? this.state.phoneGrab
                        : window.innerWidth > 480 && window.innerWidth < 1024
                          ? this.state.tabletGrab
                          : null,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                }
              }
            },
            retina_detect: true
          }}
        />
        )
    }
}

export default Test