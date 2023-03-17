
import './App.css';
import './style/leadForm.scss'
import './style/thanksMessage.scss'
import Index from './pages';

function App() {
  return (
    //Bir den fazla sayfa ile çalıştığımız projeleri düşünürsek app klasörünü olabildiğince temiz tutmaya çalışıyorum.
    <div className="App">
        <Index/>
    </div>
  );
}

export default App;
