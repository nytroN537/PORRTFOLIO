
import './App.css';


function App() {
  return (
    <>
      <body>


        <header>
          <div className=''>
            <nav>
              <ul>
                <li>
                  <a href='#'>
                    INICIO
                  </a>
                </li>
                <li>
                  <a href='#' className='curricl'>
                    CURRICULO
                  </a>
                </li>
                <li>
                  <a href='#'>
                    CONTATO
                  </a>
                </li>
              </ul>
            </nav>
          </div>

        </header>

        <div className='containerF'>
          <div className='gitH'>
            <img src=''></img>
          </div>
        </div>


        <section className='section-1'>

          <div className='texTm'>
            <h1><span className='hashT'>#</span></h1>
            <h1 className='text1'>Ola,<br></br>
              Me chamo <span className='corT'>Rafael</span><br></br>
              Sou um estudande de Front-End</h1>
          </div>
          <div className='btn1'>
            <button href='#'>Quero Conhece-lo</button>
          </div>

        </section>


        <section className='section-2'>

          <div className='container-1'>

            <div className='sobrE'>
              <h1 className='title1'><span className='hashT'>#</span> <span className='corP'>Sobre mim</span></h1><br></br>
              <h1 className='text2'><span className='corP'>Meu nome e Rafael Moura, tenho 19 anos e sou estudante de programacao. Meu inicio da programacao foi em 2021 onde tive o primeiro contato com a logica da programacao em sala de aula.
                Comecei a me interessar na area e descobrir coisas que somente a tecnologia consegue fazer, tenho vontade de aprender mais e mais ate conseguir fazer um trabalho onde eu ou alguma equipe mude a vida das pessoas para sempre.</span></h1>
            </div>

          </div>

          <div className='container-2'>

            <div className='sobrE'>
              <h1 className='title1'><span className='hashT'>#</span> <span className='corP'>Extra</span></h1><br></br>
              <h1 className='text2'><span className='corP'>Gosto muito de DESIGN em geral, usei photshop no inicio como uma brincadeira e hoje gosto muito desse programa em geral tenho muito para aprender a como fazer um design bem feito ou a nivel profissional.</span></h1>
            </div>

          </div>


        </section>

        <section className='section-3'>

          <div className='container-3'>
            <h1 className='title2'><span className='hashT'>#</span> <span className='corP'>Habilidades</span></h1><br></br>
          </div>



        </section>


      </body>
    </>
  );
}

export default App;
