import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddSubscriber from './components/AddSubscriber';
import ViewSubscriber from './components/ViewSubscriber';
import SearchSubscriber from './components/SearchSubscriber';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddSubscriber/>}/>
      <Route path="/view" element={<ViewSubscriber/>}/>
      <Route path="/search" element={<SearchSubscriber/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
