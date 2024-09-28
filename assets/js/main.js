document.addEventListener("DOMContentLoaded", function() {
    // Initialize SweetScroll
    new SweetScroll({});

    // Initialize particlesJS
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 50, // Number of particles
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff" // Particle color set to white
            },
            shape: {
                type: "circle", // Particle shape
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.7, // Opacity of particles
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3, // Size of particles (smaller)
                random: true,
                anim: {
                    enable: false,
                    speed: 19,
                    size_min: 1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff", // Change line color to white
                opacity: 0.5, // Line opacity
                width: 1 // Line width
            },
            move: {
                enable: true,
                speed: 2, // Slower speed (change this value to adjust speed)
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse" // Particles will repulse when hovered over
                },
                onclick: {
                    enable: true,
                    mode: "push" // Added push mode on click
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
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
        retina_detect: true
    });
}, false);
