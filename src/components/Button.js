import React from "react";
import './Button.css'
const STYLES =[
    'btn--primary',
    'btn--outline'
]
const SIZES=[
    'btn--medium',
    'btn--large'
]
export const Button =({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize


})=>{
    const checkButtonStyles= STYLES.includes(buttonStyle)? buttonStyle : STYLES[0]
    const checkButtonSizes= SIZES.includes(buttonSize)? buttonSize : SIZES[0]
    return(
        <button className={`btn ${checkButtonStyles} ${checkButtonSizes}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}