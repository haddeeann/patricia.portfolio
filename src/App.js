import Sidebar from './components/Sidebar';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className='container'>
      <Sidebar />

      <div className='bar'>
          <Portfolio className='box'/>
        <Skills className='box' />
        <Timeline className='box' />
      </div>
    </div>
  );
}

export default App;
