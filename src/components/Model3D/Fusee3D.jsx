/* eslint-disable react/no-unknown-property */
import { useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Fusee3D() {
    const gltf = useLoader(GLTFLoader, '/Model3D/Fusee.glb');
    const fusee = gltf.scene;
    const fuseeRef = useRef(null)
    fusee.position.set(0, -3, -4);
    fusee.scale.set(0.4, 0.4, 0.4); 
    fusee.rotation.z = -Math.PI / 8;

    useFrame(()=> {
        if(fuseeRef.current) {
            fusee.rotation.y += 0.02
        }
    })

    return(
        <group ref={fuseeRef}>
            <primitive object={gltf.scene} />
        </group>
    );
}
