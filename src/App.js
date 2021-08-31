
import './App.css';
import PersonCard from './components/MyNewComponent';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age={45} hair_color="Black" />
      <PersonCard firstName="John" lastName="Smith" age={88} hair_color="Brown" />
      <PersonCard firstName="Millard" lastName="Fillmore" age={50} hair_color="Brown" />
      <PersonCard firstName="Maria" lastName="Smith" age={62} hair_color="Brown" />
    </div>
  );
}

export default App;
