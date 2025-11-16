import React from 'react'

export const EventComponent = () => {
    const handleClick=()=>{
          alert("Button Clicked")
    }
    const handleChanged=(e)=>{
        console.log(e.target.value)
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Form Submitted")
    }
  return (
    <>
    <h3>EventComponent Created DAY-3</h3>
    <button onClick={handleClick}
    onMouseEnter={()=>{console.log("Mouse Entered")}}>Click Me</button>

    <input type="text" onChange={handleChanged} placeholder='Type something' />
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='hello' />
        <button type='submit'>Submit</button>
    </form>

    </>
  )
}
