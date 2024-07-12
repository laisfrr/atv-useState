import { useState } from 'react'
//onChange -->input
function CalculadoraImc() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [imc, setImc] = useState(0)

  //dentro do evento tem informacoes sobre o input
  function handlePeso(evento) {
    const input = evento.target
    const valor = input.value
    setPeso(valor)
  }

  function handleAltura(evento) {
    const input = evento.target
    const valor = input.value
    setAltura(valor)
  }

  function handleCalcular() {
    const resultado = peso / altura ** 2
    setImc(resultado)
  }

  return (
    <section>
      <h3>Calculadora Imc</h3>
      <input type="number" placeholder="Seu peso" onChange={handlePeso} />
      <input type="number" placeholder="Sua altura" onChange={handleAltura} />
      <br />
      <button onClick={handleCalcular}>Calcular</button>
      <hr />
      <h4>Seu imc é:{imc.toFixed(2)}</h4>
    </section>
  )
}

export default CalculadoraImc
