//mudanca de estado
//para que um numero mude o componente precisa renderizar novamente
//estado->variavel especial que vai sincronizar as mudancas na tela
//para definir um estado --> useState
//useState --> estado,funcao para alterar o estado
import './Contador.css'
import { useState } from 'react'
// ou function Contador({valorInicial=0,batata})  desestruturar a props/ dar valor padrao
function Contador(props) {
  const [numero, setNumero] = useState(props.valorInicial) // valor inicial do estado
  function handleIncrement() {
    setNumero(numero + 1)
  }

  function handleDecrement() {
    if (numero > 0) {
      setNumero(numero - 1)
    }
  }

  function handleIncrement100() {
    setNumero(numero + 100)
  }

  function handleZerar() {
    setNumero(0)
  }

  return (
    <section>
      <h2 className={numero % 2 == 0 ? 'par' : 'impar'}>Contagem: {numero}</h2>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
      <button onClick={handleIncrement100}>+100</button>
      <button onClick={handleZerar}>zerar</button>
    </section>
  )
}

export default Contador
