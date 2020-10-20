import React, { RefObject, useEffect, useRef, useState} from 'react'
import {Canvas, useFrame} from 'react-three-fiber'

import Cube from './cube'

interface props {
    action: string
}
const Slider = ({action}: props) => {

    
    const cubeRef= useRef<HTMLDivElement>(null);
    

    useEffect(() => {
       setTimeout(() => {
        if (cubeRef.current)
        {
            cubeRef.current.classList.add('right');
            setTimeout(() => {
                document.getElementById('menu')?.classList.remove('hidden');
                document.getElementById('content')?.classList.remove('hidden');
            }, 1500);
        }
       }, 500);
    })

    

    return(
        <div ref={cubeRef} className="slider">
            <Canvas className="cube" >
                <Cube action={action}/>
            </Canvas>
        </div>  
    )
}

export default Slider;