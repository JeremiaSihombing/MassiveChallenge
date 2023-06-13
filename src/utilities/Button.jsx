import React from "react"

const Button = (props) => {
    // console.log(props)

    return (
        <button className={`w-fit px-[15px] py-[10px] ${props.color} rounded-[20px] text-white hover:bg-white hover:text-[#f48c06] hover:ring-[#f48c06]`}>{props.text}</button>
    )
}

export default Button