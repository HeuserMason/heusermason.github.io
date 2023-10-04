import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HeaderFooterLayout from "./components/HeaderFooterLayout";
import Landing from "./pages/Landing";

const App = () => {

    return (
        
        <BrowserRouter>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                limit={5}
                newestOnTop
                closeOnClick
                pauseOnFocusLoss
                pauseOnHover
                theme="light"
            />
            <Routes>
                <Route element={<HeaderFooterLayout />}>
                    <Route path="/" exact element={<Landing />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;