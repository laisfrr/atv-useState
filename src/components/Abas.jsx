import { useState } from 'react'
import './Abas.css'

function Abas() {
  const [aba, setAba] = useState('impacto social')

  return (
    <section>
      <div className="botoes">
        <button
          className={aba === 'impacto social' ? 'ativo' : ''}
          onClick={() => setAba('impacto social')}
        >
          Impacto Social
        </button>
        <button
          className={aba === 'empregabilidade' ? 'ativo' : ''}
          onClick={() => setAba('empregabilidade')}
        >
          Empregabilidade
        </button>
        <button
          className={aba === 'tecnologico' ? 'ativo' : ''}
          onClick={() => setAba('tecnologico')}
        >
          Tecnológico
        </button>
      </div>
      {aba === 'impacto social' && (
        <section>
          <h2>Impacto Social</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quam quo tempora quibusdam ipsum ipsa voluptate rem impedit sequi
            voluptatibus, veritatis officia quod nesciunt, earum itaque!
            Tempore, voluptatibus. Quas, iure!
          </p>
        </section>
      )}
      {aba === 'empregabilidade' && (
        <section>
          <h2>Empregabilidade</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quam quo tempora quibusdam ipsum ipsa voluptate rem impedit sequi
            voluptatibus, veritatis officia quod nesciunt, earum itaque!
            Tempore, voluptatibus. Quas, iure!
          </p>
        </section>
      )}
      {aba === 'tecnologico' && (
        <section>
          <h2>Tecnologico</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quam quo tempora quibusdam ipsum ipsa voluptate rem impedit sequi
            voluptatibus, veritatis officia quod nesciunt, earum itaque!
            Tempore, voluptatibus. Quas, iure!
          </p>
        </section>
      )}
    </section>
  )
}

export default Abas
