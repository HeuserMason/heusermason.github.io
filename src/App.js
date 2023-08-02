import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderFooterLayout from "./components/HeaderFooterLayout";
import Landing from "./pages/Landing";

const App = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route element={<HeaderFooterLayout />}>
                    <Route path="/" exact element={<Landing />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;