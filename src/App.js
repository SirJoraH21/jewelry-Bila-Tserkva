import './App.css';
import Header from './components/Header/Header';
import TopSection from './components/sections/TopSection/TopSection';
import WeaklyProducts from './components/sections/WeaklyProducts/WeaklyProducts';

function App() {
  return (
    <div className="App">
      <Header />
      <TopSection bg_src={'/images/section1.jpg'}/>
      <WeaklyProducts />
    </div>
  );
}

export default App;
