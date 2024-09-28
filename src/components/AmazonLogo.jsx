import React, { useRef } from "react";
import { Float, useAnimations, useGLTF } from "@react-three/drei";
import {AMAZON_LOGO_GLB_PATH} from "../constants/components.js";

const AmazonLogo = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
      AMAZON_LOGO_GLB_PATH,
    true
  );
  const { actions, mixer } = useAnimations(animations, group);

  return (
    <Float floatIntensity={2}>
      <group name="Scene" ref={group} {...props}>
        <group scale={0.7}>
          <mesh
            name="Cube039"
            castShadow
            receiveShadow
            geometry={nodes.Cube039.geometry}
            material={materials["Material.001"]}
          >
            <mesh
              name="Cube040"
              castShadow
              receiveShadow
              geometry={nodes.Cube040.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              name="Plane018"
              castShadow
              receiveShadow
              geometry={nodes.Plane018.geometry}
              material={materials["Material.003"]}
              position={[0.04, 0.657, -0.131]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.29, 0.459, 0.257]}
            >
              <mesh
                name="Plane019"
                castShadow
                receiveShadow
                geometry={nodes.Plane019.geometry}
                material={materials["Material.004"]}
                position={[0, -0.073, 0]}
              />
            </mesh>
            <mesh
              name="Plane020"
              castShadow
              receiveShadow
              geometry={nodes.Plane020.geometry}
              material={materials["Material.005"]}
              position={[0.034, -0.142, -0.188]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[-0.05, -0.053, -0.05]}
            />
          </mesh>
        </group>
      </group>
    </Float>
  );
};

useGLTF.preload(AMAZON_LOGO_GLB_PATH);
export default AmazonLogo;
