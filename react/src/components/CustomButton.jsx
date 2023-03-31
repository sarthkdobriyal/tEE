import React from 'react'
import {motion} from 'framer-motion'
import {slideAnimation} from "../config/motion"
 
import state from '../store'
import { useSnapshot } from 'valtio'
import { getContrastingColor } from '../config/helpers'

const CustomButton = ({type,title,handleClick, customStyles}) => {

    const snap = useSnapshot(state)

    const generateStyles = (type) => {
        if(type === 'filled'){
            return {
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color)
            }
        }else if(type === "outline"){
            return {
                borderWidth: "1px",
                borderColor: snap.color,
                color: snap.color
            }
        }
    }

  return (
    <motion.button className={`px-2 py-1.2 flex-1 rounded-md ${customStyles}`}
            style={generateStyles(type)}
            onClick={handleClick}
            
    >
        {title}
    </motion.button>
  )
}

export default CustomButton