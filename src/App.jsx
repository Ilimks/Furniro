import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Main"
import Shop from "./Pages/Shop/Shop"
import Contact from "./Pages/Contact/Contact"
import NotFound from "./Pages/NotFound/NotFound"
import { Route, Routes, Link } from "react-router-dom"; 

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default App;