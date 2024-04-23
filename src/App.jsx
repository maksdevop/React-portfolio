import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import Home from './components/page/Home';
import Projects from './components/page/Projects';
import About from './components/page/About';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SingleProject from './components/page/SingleProject';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects/:slug" element={<SingleProject />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
