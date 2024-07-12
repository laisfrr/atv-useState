//eventos são ações que acontecem na interface, podem ser provocadas pelo usuário.
//manipulador de evento(handle)-->uma resposta ao evento
//onmouseenter --> quando passar o mouse

function Eventos() {
  function handleClick() {
    alert('Voce clicou')
  }

  return (
    <section>
      <button onClick={handleClick}>Clique aqui</button>
      <button onClick={() => alert('clicou novamente')}>
        Clique novamente
      </button>
    </section>
  )
}

export default Eventos
