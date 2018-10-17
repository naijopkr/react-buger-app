import React from 'react'

const buildControl = props => (
  <div className='BuildControl'>
    <div className='Label'>{props.label}</div>
    <button 
     disabled={props.disabledButton}
     onClick={() => props.onRemove(props.label)} 
     className='Less'>
      Less
    </button>
    <button 
     onClick={() => props.onAdd(props.label)} 
     className='More'>
      More
    </button>
  </div>
)

export default buildControl