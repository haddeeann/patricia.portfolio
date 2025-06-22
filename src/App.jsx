import Sidebar from './components/Sidebar';
import Skills from './sections/Skills';
import Timeline from './sections/Timeline';
import Portfolio from './sections/Portfolio';

function App() {
    return (
        <div className="min-h-full flex">
            <Sidebar/>
            <main className="flex-1">
                <Portfolio/>
                <Skills/>
                <Timeline/>
            </main>
        </div>
    );
}

export default App;
