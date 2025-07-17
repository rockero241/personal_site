import ParallaxBackground from "../components/ParallaxBackground"
import { Astronaut } from "../components/Astronaut"
import { Float } from "@react-three/drei"
import { useMediaQuery } from "react-responsive"
import { Canvas, useFrame } from "@react-three/fiber"
import HeroText from "../components/HeroText"
import { easing } from "maath"

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853})
  return (
    <section className="flex items-start justify-center
    md:items-start md:justify-start min-h-screen overflow-hidden
    c-space">
       <HeroText />
       <ParallaxBackground />
       <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Float>
            <Astronaut 
              scale={isMobile && 0.23} 
              position={isMobile && [0, -1.5, 0]} 
            />
          </Float>
          <Rig />
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, state.mouse.y / 10, 10],
      0.075,
      delta
    );
  });
}

export default Hero