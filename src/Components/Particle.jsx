import React from "react";
import Particles from "react-particles";
import {loadFull} from "tsparticles";
import {Container} from "../pages/index/style";

function Particle() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const particlesLoadded = (container) => {
    console.log(container);
  };
  return (
    <Container>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoadded}
        options={{
          background: {
            color: {
              value: "#121216",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#88A",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 0.3,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: {min: 0.3, max: 3},
            },
          },
          detectRetina: true,
        }}
      />
    </Container>
  );
}
export default Particle;
