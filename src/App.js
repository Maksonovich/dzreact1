import MainHeader from "./components/MainHeader/MainHeader"; 
import './styles/style.scss'
import Main from './components/Main/Main' 

const App = ()=>{
  return (
    <>
      <MainHeader/>
      <main>
      <Main/>
      </main>
    </>
  );
}

export default App;
