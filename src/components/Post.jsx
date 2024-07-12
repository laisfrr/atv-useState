import { useState } from 'react'
import './Post.css'

export const img1 =
  'https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
export const img2 =
  'https://images.unsplash.com/photo-1720370225485-386b9793c61d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8'
export const img3 =
  'https://plus.unsplash.com/premium_photo-1720380988505-6fa41e99e53e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D'
export const img4 =
  'https://images.unsplash.com/photo-1719300368274-9efe9c6b2d37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D'

function Post(props) {
  const [curtir, setCurtir] = useState(false)

  function handleCurtirDescurtir() {
    setCurtir(!curtir)
  }

  return (
    <section className="post-container">
      <h1>{props.titulo}</h1>
      {curtir && <img className="like-icone" src="./like.svg" alt="" />}
      <article className="post-imagem">
        <img src={props.imagem} alt="" />
        <p>{props.descricao}</p>
        <div className="post-curtir">
          <p>Curtidas:{curtir ? 1 : 0}</p>
          <button onClick={handleCurtirDescurtir}>
            {curtir ? 'Descurtir' : 'Curtir'}
          </button>
        </div>
      </article>
    </section>
  )
}

export default Post
