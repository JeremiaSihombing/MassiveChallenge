import React from 'react'
import Add from '../../public/icons/add.svg'

function AddButton(props) {
  return (
    <button className='flex items-center justify-center gap-2 h-[45px] w-fit bg-white hover:bg-[#f3f3f3] rounded-md p-4 border-2'>
        <img src={Add} alt="" />
        <p>Add {props.text}</p>
    </button>
  )
}

export default AddButton