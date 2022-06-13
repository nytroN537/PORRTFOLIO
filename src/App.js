
import './App.css';

function App() {
  return (
    <>
    <body>
      <section>
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


    </body>
    </>
  );
}

export default App;
