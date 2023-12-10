import Sidebar from './components/Sidebar';
import Skills from './components/Skills';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className='container'>
      <Sidebar />

      <div className='bar'>
        <Skills className='box' />
        <Timeline className='box' />
      </div>
    </div>
  );
}

export default App;
