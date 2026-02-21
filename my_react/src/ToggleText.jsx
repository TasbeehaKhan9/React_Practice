import {useState} from 'react'

function ToggleText() {
    const [isVisible , setIsVisible] = useState(false)
  return (
<>

<button onClick={() => setIsVisible(!isVisible) }>
    {isVisible ? "Hide" : "Show"} Text
</button>

    {isVisible && <p>this is secret</p>} 

</>
  )
}

export default ToggleText
