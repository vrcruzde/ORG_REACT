
import { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg/Index';
import Equipo from './components/Equipo/Equipo';
import Footer from './components/Footer/Index';


function App() {

  const [mostrarFormulario, actualizarMOstrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
        nombre: "Victor Cruz",
        puesto:"Estudiente",
        foto:"https://github.com/vrcruzde.png",
        equipo:"Front End"
}])

  //Ternario: siempre lleva la condicion ? semuetra : no semuestra
  const cambiarMostrar =() =>{
      actualizarMOstrar(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    // spread operator: crea copia de valores actuales y agregamos el colaborador
    actualizarColaboradores([...colaboradores , colaborador])
  }

  //Lista de equipos
  const equipos = [
    {
      titulo:"Programación",
      colorprimario:"#57C278",
      colorsecundario:"#D9F7E9"
    },
    {
      titulo:"Front End",
      colorprimario:"#82CFFA",
      colorsecundario:"#E8F8FF"
    },
    {
      titulo:"Data Science",
      colorprimario:"#A6D157",
      colorsecundario:"#F0F8E2"
    },
    {
      titulo:"Devops",
      colorprimario:"#E06B69",
      colorsecundario:"#FDE7E8"
    },
    {
      titulo:"UX y Diseño",
      colorprimario:"#DB6EBF",
      colorsecundario:"#FAE9F5"
    },
    {
      titulo:"Móvil",
      colorprimario:"#FFBA05",
      colorsecundario:"#FFF5D9"
    },
    {
      titulo:"Innovación y Gestión",
      colorprimario:"#FF8A29",
      colorsecundario:"#FFEEDF"
    }
    
  ]

  return (
    <div>
      <Header />
      {mostrarFormulario === true ? 
        <Formulario equipos={
          equipos.map((equipo)=>equipo.titulo)}
          registrarColaborador= {registrarColaborador}
          
        /> : <div></div>  /* Ternario*/}   


      {/*mostrarFormulario && <Formulario />    //Cortocircuito*/}   
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo) => 
        <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        />)
      }

      <Footer />

    </div>
  );
}

export default App;
