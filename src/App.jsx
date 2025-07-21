import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
function App() {

  const [formularioEstaVisivel, setFromularioEstaVisivel] = useState(true);

return(
  
  <>
  <Perfil nome="samuel Silva dos Santos" endereco="https://github.com/SamuellSSantos.png"/>


  {formularioEstaVisivel && (
    <Formulario/>
  )}
  <button onClick={()=> setFromularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button>
  </>
  
)
}


export default App
