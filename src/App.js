import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddSubscriber from './components/AddSubscriber';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddSubscriber/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
