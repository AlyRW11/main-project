import React, { Component } from 'react'
import Particles from 'react-particles-js'
import './Testing.css'

class Test extends Component {
    render() {

        return(
            <Particles className="particle-animation"
                params={{
                    particles: {
                        number: {
                            value: 100,
                            density: {
                                enable: true,
                                value_area: 1000
                            }
                        },
                        color: {
                            value: '#13cbf2'
                        },
                        shape: {
                            type: 'edge',
                            polygon: {
                                nb_sides: 7
                            },
                            image: {
                                src: 'img/github.svg',
                                width: 100,
                                height: 100
                            }
                        },
                        size: {
                            value: 5,
                            random: true,
                            anim:{
                                enable: false,
                                speed:40,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        opacity:{
                            value:0.5,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false
                            }
                        },
                        line_linked:{
                            enable: false,
                            distance: 120,
                            color: '#13cbf2',
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 6,
                            direction: 'none',
                            random: false,
                            straight: false,
                            out_mode: 'bounce',
                            bounce: true,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                            }
                        },
                        interactivity: {
                            detect_on: 'canvas',
                            events: {
                              onhover: {
                                enable: true,
                                mode: 'repulse'
                              },
                              onclick: {
                                enable: false,
                                mode: 'remove'
                              },
                              resize: true
                            },
                            modes:{
                                grab:{
                                    distance: 400,
                                    line_linked: {
                                        opacity:1
                                    }
                                },
                                bubble:{
                                    distance: 400,
                                    size: 7,
                                    opacity: 1,
                                    duration:2,
                                    speed: 3, 
                                },
                                repulse: {
                                    distance: 80,
                                    duration: 0.4
                                },
                                push: {
                                    particles_nb: 4
                                },
                                remove: {
                                    particles_nb: 2
                                }
                            }
                        },
                        retina_detect: true,
                    }
                }}/>                
        )
    }
}

export default Test