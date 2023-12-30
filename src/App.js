// import { Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockData from './components/StockData';
import StockCard from './components/StockCard';

function App() {
  return (
    // <Container>
    <div className="container">
      <h2><b style={{ color: 'red' }}>Welcome to Stock Tracker</b></h2>
      <StockCard />
      <StockData />
    </div>
    // </Container>


  );
}

export default App;