import {useState} from 'react'

function LikeButton() {
    const [like , setLike] = useState(false)
  return (
<>

<button onClick={() => setLike(!like) }>
    {like ? "❤liked" : "🤍like"} 
</button>


</>
  )
}

export default LikeButton
