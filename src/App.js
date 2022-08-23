import './App.css';
import Button from './components/Button';

const buttonSetup = [
  {label: "Rock", color: "red"},
  {label: "Paper", color: "green"},
  {label: "Scissors", color: "blue"},
];

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Button {...buttonSetup[0]}/>
      <Button {...buttonSetup[1]}/>
      <Button {...buttonSetup[2]}/>
    </div>
  );
}

export default App;