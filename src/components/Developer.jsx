import React, {useEffect, useRef} from "react";
import {useAnimations, useFBX, useGLTF} from "@react-three/drei";
import {
    DEVELOPER_CLAPPING_ANIMATION_PATH,
    DEVELOPER_IDLE_ANIMATION_PATH,
    DEVELOPER_MODEL_PATH,
    DEVELOPER_SALUTE_ANIMATION_PATH, DEVELOPER_VICTORY_ANIMATION_PATH
} from "../constants/components.js";

const Developer = ({ animationName = 'idle', ...props }) => {
    const group = useRef();

    const { nodes, materials } = useGLTF(DEVELOPER_MODEL_PATH);

    const { animations: idleAnimation } = useFBX(DEVELOPER_IDLE_ANIMATION_PATH);
    const { animations: saluteAnimation } = useFBX(DEVELOPER_SALUTE_ANIMATION_PATH);
    const { animations: clappingAnimation } = useFBX(DEVELOPER_CLAPPING_ANIMATION_PATH);
    const { animations: victoryAnimation } = useFBX(DEVELOPER_VICTORY_ANIMATION_PATH);

    idleAnimation[0].name = 'idle';
    saluteAnimation[0].name = 'salute';
    clappingAnimation[0].name = 'clapping';
    victoryAnimation[0].name = 'victory';

    const { actions } = useAnimations(
        [idleAnimation[0], saluteAnimation[0], clappingAnimation[0], victoryAnimation[0]],
        group
    );

    useEffect(() => {
        actions[animationName].reset().fadeIn(0.5).play();

        return () => actions[animationName].fadeOut(0.5);
    }, [animationName]);

    return (
        <group {...props} dispose={null} ref={group}>
            <primitive object={nodes.Hips} />
            <skinnedMesh
                name="EyeLeft"
                geometry={nodes.EyeLeft.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeLeft.skeleton}
                morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
            <skinnedMesh
                name="EyeRight"
                geometry={nodes.EyeRight.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeRight.skeleton}
                morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Head"
                geometry={nodes.Wolf3D_Head.geometry}
                material={materials.Wolf3D_Skin}
                skeleton={nodes.Wolf3D_Head.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Teeth"
                geometry={nodes.Wolf3D_Teeth.geometry}
                material={materials.Wolf3D_Teeth}
                skeleton={nodes.Wolf3D_Teeth.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Hair.geometry}
                material={materials.Wolf3D_Hair}
                skeleton={nodes.Wolf3D_Hair.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Glasses.geometry}
                material={materials.Wolf3D_Glasses}
                skeleton={nodes.Wolf3D_Glasses.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Top.geometry}
                material={materials.Wolf3D_Outfit_Top}
                skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                material={materials.Wolf3D_Outfit_Bottom}
                skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Body.geometry}
                material={materials.Wolf3D_Body}
                skeleton={nodes.Wolf3D_Body.skeleton}
            />
        </group>
    );
};

useGLTF.preload(DEVELOPER_MODEL_PATH);
export default Developer;
