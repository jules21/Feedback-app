import {createContext, useEffect, useState} from 'react';
import { toast } from 'react-toastify';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([]);
    
    useEffect(() => {
        getFeedback();
    },[])


    const getFeedback = async () => {
        const response =  await fetch('/feedback?_sort=id&_order=desc');
        const feedback = await response.json();
        setFeedback(feedback);
    }
    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
            await fetch(`/feedback/${id}`, {
                method: 'DELETE'
            });
            toast.success('Feedback deleted successfully',{
                position: "bottom-right",
                hideProgressBar: true,
            });
            getFeedback();
        }
    }
    const addFeedback = async (feedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(feedback)
        })
        const AddedFeedback = await response.json()
        toast('Feedback added successfully',{
            position: "bottom-right",
            hideProgressBar: true,
        })
        getFeedback();
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext;