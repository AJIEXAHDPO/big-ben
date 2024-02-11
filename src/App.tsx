import './App.css';
import { MainPage } from '@/pages/MainPage';
import { NewsPage } from './pages/Newspage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
