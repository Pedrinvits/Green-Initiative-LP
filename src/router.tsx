import { BrowserRouter , Route, Routes } from 'react-router-dom'
import { Pricing } from './Pages/Precing';
import { Home } from './Pages/Home';
import { SignUp } from './Pages/SignUp';
export const Router = () => {
    return (
        <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/SignUp" element={<SignUp/>}></Route>
              <Route path="/Pricing" element={<Pricing/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
    );
}


