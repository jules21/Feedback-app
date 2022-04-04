import FeedbackList from "./components/FeedbackList";
import Header from "./components/layout/header";
import { FeedbackProvider } from "./contexts/FeedbackContext";
function App(){
return (
    <>
        <FeedbackProvider>
        <Header/>
        <div className="container">
        <FeedbackList/>
        </div>
        </FeedbackProvider>
    </>
)
}
export default App;