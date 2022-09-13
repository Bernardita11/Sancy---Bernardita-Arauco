import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
//import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <>
    <NavBar/>
    {/*<ItemListContainer greeting={"¡Bienvenido a nuestra App!"}/>*/}
    <ItemDetailContainer/>
    </>
  );
}

export default App;
