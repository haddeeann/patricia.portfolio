import Sidebar from './components/Sidebar';

import About from './components/About';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className='container'>
      <Sidebar />

      <div className='bar'>
        <Introduction className='box' />
        <About className='box' />
        <Skills className='box' />
        <Timeline className='box' />
      </div>
    </div>
  );
}

export default App;
