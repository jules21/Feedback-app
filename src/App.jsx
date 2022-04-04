import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/layout/header";
import { FeedbackProvider } from "./contexts/FeedbackContext";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FeedbackForm from "./components/FeedbackForm";
function App(){
return (
    <>
        <FeedbackProvider>
        <Header/>
        <div className="container">
            <FeedbackStats/>
            <FeedbackForm/> 
        <FeedbackList/>
        </div>
        <ToastContainer/>
        </FeedbackProvider>
    </>
)
}
export default App;