import Toolbar from './toolbar';
import Editor from './editor';
import Viewer from './viewer';

function App() {
  return (
    <div className="app">
      <div className="wrapper">
          <header>
              REACT EDITOR
          </header>
          <div className="container">
              <Toolbar />
              <Editor />
              <Viewer />
          </div>
      </div>
    </div>
  );
}

export default App;
