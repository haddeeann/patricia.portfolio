import Sidebar from './components/Sidebar';
import Skills from './sections/Skills';
import Timeline from './sections/Timeline';
import Portfolio from './sections/Portfolio';
import { Button } from '@/components/ui/button';

function App() {
  return (
      <div className='container'>
          <Sidebar/>
          <div className="flex justify-center items-center h-screen bg-background">
              <Button variant="default">Styled ShadCN Button</Button>
          </div>
          <div className='bar'>
              <Portfolio className='box'/>
              <Skills className='box'/>
              <Timeline className='box'/>
          </div>
      </div>
  );
}

export default App;
