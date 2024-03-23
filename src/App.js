import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ListPage } from './pages/listPage';
import { Homepage } from './pages/homepage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/listPage" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  )
  
}
