import 'normalize.css';
import { Header } from './components/header/Header';
import './App.scss';
import { Dashboard } from './components/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MealBuilder } from './components/MealBuilder/MealBuilder';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/meal/:id?' element={<MealBuilder/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
