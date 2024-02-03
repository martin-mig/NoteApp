import logo from './logo.svg';
import './App.css';
import './style.css'
import { RouterPrincipal } from './routers/RouterPrincipal';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
/*import { PanelAdd } from './components/PanelAdd';
import { PanelCard } from './components/PanelCard';
*/

function App() {
  return (
    <div className='layout'>
     {/* <Header/>
      <PanelAdd/>
      <PanelCard/>
      <Footer/>
  */}
    <Header/>
    <RouterPrincipal/>
    <Footer/>

    </div>
  );
}

export default App;
