import Sidebar from './components/Sidebar';
import Skills from './sections/Skills';
import Timeline from './sections/Timeline';
import Portfolio from './sections/Portfolio';

function App() {
  return (
      <div className='container'>
          <Sidebar/>
          <div className='bar'>
              <Portfolio className='box'/>
              <Skills className='box'/>
              <Timeline className='box'/>
          </div>
      </div>
  );
}

export default App;
