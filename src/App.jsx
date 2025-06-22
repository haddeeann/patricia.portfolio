import Sidebar from './components/Sidebar';
import Skills from './sections/Skills';
import Timeline from './sections/Timeline';
import Portfolio from './sections/Portfolio';

function App() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row">

            {/* Sidebar */}
            <div className="w-full md:w-1/4 p-4">
                <Sidebar />
            </div>

            {/* Main Content */}
            <main className="flex-1 p-4 space-y-8">
                <Portfolio />
                <Skills />
                <Timeline />
            </main>
        </div>
    );
}

export default App;
