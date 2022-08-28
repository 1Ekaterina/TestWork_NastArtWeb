import Header from './components/header/index';
import Catalog from './components/catalog/index';
import Karta from './components/karta/index';
import About from './components/about/index';
import Callback from './components/callback/index';
import Footer from './components/footer/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Catalog />
      <Karta />
      <About />
      <Callback />
      <Footer />
    </div>
  );
}

export default App;
