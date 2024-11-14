import { Routes, Route } from 'react-router-dom';
import Home from '../home/Home';
import About from '../About';
import Body from '../body/Body';



function RouterForPage() {
    return (
        <>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/body" element={<Body />} />

            </Routes>


        </>
    )
};


export default RouterForPage;