
import React from 'react'

const Helmet = (props) => {

  document.title = 'Solar Panel and CCTV Services -' + props.title;
  return (
    <div className='w-100'>{props.children}</div>
  )
}

export default Helmet