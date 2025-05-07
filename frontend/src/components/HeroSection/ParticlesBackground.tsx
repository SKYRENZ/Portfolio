import React from "react";
import Particles from "./Particles";

const ParticlesBackground: React.FC = () => {
  return (
    <Particles
      particleColors={["#00ffff", "#ffffff"]}
      particleCount={200}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={100}
      moveParticlesOnHover={true}
      alphaParticles={false}
      disableRotation={false}
    />
  );
};

export default ParticlesBackground;