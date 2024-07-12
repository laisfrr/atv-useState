import './Mensagem.css'

function Mensagem() {
  const textoTitulo = 'As Batatas'
  const nomeAutor = 'lais'
  const numero = 206
  const imagem = `https://picsum.photos/${numero}`

  return (
    <section className="mensagem-corpo">
      <h2 className="mensagem-titulo">{textoTitulo}</h2>
      <img src={imagem} alt="imagem da mensagem" />
      <p className="paragrafo">Lorem ipsum dolor sit amet.</p>
      <small>Criado por:{nomeAutor}</small>
    </section>
  )
}

export default Mensagem
