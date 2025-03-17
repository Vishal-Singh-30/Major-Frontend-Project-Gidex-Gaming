import React from 'react'

const Button = ({src , title, id, rightIcon,  leftIcon, containerClass}) => {
  
  const handleClick = () => {
    window.open(`${src}`, "_blank");
  };
  
  return (
    <button onClick={handleClick} id={id} className={`group relative z-120 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
        {leftIcon}
        <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
            <div>
                {title}
            </div>
        </span>
        {rightIcon}
    </button>
  )
}

export default Button