
import React, { useEffect, useRef, useState} from 'react'
import {useFrame} from 'react-three-fiber'

interface props {
   action: string,
}
const Cube = ({action}: props) => {
    
    const mesh = useRef<THREE.Mesh>(null);

    const [boxColor, setBoxColor] = useState('wheat');
    let speed = 0.005;

    useEffect(() => {
        if (action === 'stop')
            setBoxColor('#b22222');
        else
            setBoxColor('')
    },[action])

    useFrame(() => {

        if (boxColor !== '#b22222')
        {
            const themerClassList = document.getElementById('themer')!.classList;
            if (themerClassList.contains('light') && boxColor !== ('#2a2b31'))
                setBoxColor('#2a2b31')
            if (themerClassList.contains('dark') && boxColor !== '#f5deb3')
                setBoxColor('#f5deb3')
        }

       if (mesh.current) 
       {
        
            if (action === 'reverse')
                mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += 0.005; 
            else if (action === 'slow')
                mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z -= 0.002; 
            else if (action === 'stop')
            {
                if (speed > 0)
                {
                    speed = speed - 0.00005;
                    mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z -= speed;
                }              
            }     
            else
                mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z -= 0.005; 

       }
    })
    
    return(
        <mesh ref={mesh} position={[0,0,0]}>
            <boxBufferGeometry attach="geometry" args={[3,3,3]}/>
            <meshBasicMaterial wireframe attach="material" color={boxColor} />
        </mesh>
    )
}

export default Cube;