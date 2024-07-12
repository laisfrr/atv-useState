import { useState } from 'react'

function Conversor() {
  const [celsius, setCelsius] = useState(0)
  const [temperatura, setTemperatura] = useState(0)
  function handleCelsius(evento) {
    const input = evento.target
    const valor = input.value
    setCelsius(valor)
  }
  function handleConverter(evento) {
    const resultado = celsius * 1.8 + 32
    setTemperatura(resultado)
  }

  return (
    <section>
      <hr />
      <h1>Conversor de Temperatura</h1>
      <label htmlFor="temp-celsius">Temperatura em Celsius:</label>
      <input
        id="temp-celsius"
        type="number"
        placeholder="celsius"
        onChange={handleCelsius}
      />
      <button onClick={handleConverter}>Converter</button>

      <h4>A Temperatura em Fahrenheit é: {temperatura} °F</h4>
    </section>
  )
}

export default Conversor
