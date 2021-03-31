import './App.css';
import Header from './components/Header/Header';
import Section from './components/sections/Section';

function App() {
  return (
    <div className="App">
      <Header />
      <Section bg_src={'/images/section1.jpg'}/>
      {/* <img src="/images/1.jpg" alt="Ring"/> */}
    </div>
  );
}

export default App;
