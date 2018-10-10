import React from 'react'

import './Input.css'

const input = props => {
  let inputElement = null

  switch (props.elementType) {
    case ('input'):
      inputElement = <input 
        className='InputElement' 
        {...props.elementConfig} 
        value={props.value}
        onChange={props.onChange} />
      break
    case ('textarea'):
      inputElement = <textarea 
        className='InputElement' 
        {...props.elementConfig} 
        value={props.value}
        onChange={props.onChange} />
      break
    case ('select'):
      const options = props.elementConfig.options.map(option => {
        return (
          <option key={option.value} value={option.value}>
            {option.displayValue}
          </option>)
      })
      inputElement = <select
        className='InputElement'
        value={props.value}
        onChange={props.onChange}>{options}</select>
      break
    default:
      inputElement = null
  }

  return (
    <div className='Input'>
      <label className='InputLabel'>{props.label}</label>
      {inputElement}
    </div>
  )
}

export default input