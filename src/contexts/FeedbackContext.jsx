import {createContext, useEffect, useState} from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([]);
    
    useEffect(() => {
        getFeedback();
    },[])


    const getFeedback = async () => {
        const response =  await fetch('/feedback');
        const feedback = await response.json();
        setFeedback(feedback);
    }

    return <FeedbackContext.Provider value={{
        feedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext;