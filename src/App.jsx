// javascript extend : escrever código html dentro de um arquivo js

// import Titulo from './components/Titulo'
// import Mensagem from './components/Mensagem'
// import Eventos from './components/Eventos'
// import Contador from './components/Contador'
// import Abas from './components/Abas'
// import Carrosel from './components/Carrosel'
// import CalculadoraImc from './components/CalculadoraImc'
import Conversor from './components/Conversor'
import Post from './components/Post'
import { img1, img2, img3, img4 } from './components/Post'

function App() {
  return (
    <main>
      <section className="container-app">
        <Post titulo="imagem 1" descricao="descricao" imagem={img1} />
        <Post titulo="imagem 2" descricao="descricao" imagem={img2} />
        <Post titulo="imagem 3" descricao="descricao" imagem={img3} />
        <Post titulo="imagem 4" descricao="descricao" imagem={img4} />
      </section>

      <Conversor />

      {/* <CalculadoraImc /> */}
      {/* <Carrosel /> */}
      {/* <Abas /> */}
      {/* <Contador valorInicial={10} />
      <Contador valorInicial={20} /> */}
      {/* <Eventos />
      <Titulo />
      <Mensagem />
      <Mensagem />
      <Mensagem />
      <Mensagem /> */}
    </main>
  )
}

export default App
