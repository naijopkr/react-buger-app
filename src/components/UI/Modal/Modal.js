import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import './Modal.css'

const modal = props => {
  const style = {
    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: props.show ? 1 : 0
  }

  return (
    <>
      <Backdrop show={props.show} onClick={props.modalClose} />
      <div 
       className='Modal'
       style={style} >
        {props.children}
      </div>
    </>
  )
}

export default modal