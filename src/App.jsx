import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/layout/header";
import { FeedbackProvider } from "./contexts/FeedbackContext";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutLink from "./components/AboutLink";
function App(){
return (
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={
           <FeedbackProvider>
                
                <div className="container">
                    <FeedbackStats/>
                    <FeedbackForm/> 
                <FeedbackList/>
                <AboutLink/>
                </div>
                <ToastContainer/>
            </FeedbackProvider>
            } />
            <Route path="/about" element={<AboutPage/>} />
        </Routes>
    </Router>
)
}
export default App;