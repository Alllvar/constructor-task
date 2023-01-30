import Toolbar from './toolbar';
import Editor from './editor';
import Viewer from './viewer';

function App() {
  return (
    <div className="app">
      <header>
        REACT EDITOR
      </header>
      <div className="container">
        <Toolbar />
        <Editor />
        <Viewer />
      </div>
    </div>
  );
}

export default App;
