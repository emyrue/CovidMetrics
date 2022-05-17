import React from 'react';
import { useDispatch } from 'react-redux';
import getStats from './redux/getFromAPI';
import './App.css';
import Home from './pages/Home';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    getStats('', dispatch);
  }, []);
  return (
    <Home />
  );
}

export default App;
