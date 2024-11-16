import './App.css'
import AppProduct from './components/AppProduct/AppProduct'
import ComponentCounter from './components/ComponentCounter/ComponentCounter'
import ComponentUseEffect from './components/ComponentUseEffect/ComponentUseEffect'
import FormComponent from './components/FormComponent/FormComponent'
import Componente from './components/PrimerComponente/Componente'

function App() {

  return (
    <>
      <h1>Etapa Componentes</h1>
      <Componente text='Primer Componente react con props' style='#4ff' fontSize={6}/>
      <Componente text='Primer Componente con distinto prop' style='#ff4' fontSize={4}/>
      <Componente text='Primer Componente react con props' style='#f4f' />
      <h1>Etapa Hook UseState</h1>
      <ComponentCounter/>
      <h1>Etapa Hook UseEffect</h1>
      <ComponentUseEffect/>
      <h1>Etapa Custom Form</h1>
      <FormComponent/>
      <h1>Etapa APP</h1>
      <AppProduct/>
    </>
  )
}

export default App
