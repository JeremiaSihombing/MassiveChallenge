import React from 'react'

function Card(props) {
  return (
    <a href={`/manage_${props.link}`}>
        <div className='h-[165px] w-[160px] flex flex-col justify-center items-center gap-2 rounded-2xl bg-white hover:bg-[#f3f3f3] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
            <span className='h-[80px] w-[80px] bg-[#FF9F29] rounded-full flex items-center justify-center'>
                <img src={`${props.icon}`} width={60} />
            </span>
            <p className='text-center'>
            Manage
            <br />
            {props.title}
            </p>
        </div>
    </a>
  )
}

export default Card