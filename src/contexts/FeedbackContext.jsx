import {createContext, useEffect, useState} from 'react';
import { toast } from 'react-toastify';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([]);
    const [feedbackToEdit, setFeedbackToEdit] = useState({
        item:{},
        edit:false
    });
    
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
       await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(feedback)
        })
        toast('Feedback added successfully',{
            position: "bottom-right",
            hideProgressBar: true,
        })
        getFeedback();
    }
    const editFeedback = (feedback) => {
        setFeedbackToEdit({item:feedback, edit:true})
    }
    const updateFeedback = async (id, feedback) => {
        // console.log(id, feedback);
        const response = await fetch(`/feedback/${id}`, {
            method:'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(feedback)
        })
        getFeedback();
    }
    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        feedbackToEdit
    }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext;