// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header
        title="Welcome To React"
      />
      <Header 
        title="This is some coolk stuff we are doing."
      />
    </div>
  );
}

export default App;
