import React from 'react'

export default function InputField(props : any) {
  return (
    <div>
      <input type={props.inputType} name={props.name} onBlur={props.focusoff}  onChange={props.change} ></input>
      </div>
  )
}
