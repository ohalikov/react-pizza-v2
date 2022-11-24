import './App.css';
import './scss/app.scss';
import Content from './components/Content';
import Header from './components/Header';

function counterF() {
  return 5 + 5;
}

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Content />
      {counterF()}
    </div>
  );
}

export default App;
