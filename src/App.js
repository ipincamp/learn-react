import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header title="Welcome to the React Practice Module" />
      <MainContent message="Hello World dari App Component!" info="Informasi dari App Component!" />
      <Footer copyright="&copy; 2024 React Practice Module. All rights reserved." />
    </div>
  );
}

export default App;
