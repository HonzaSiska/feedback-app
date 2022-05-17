import React from 'react'
import { createContext, useState , useEffect} from 'react'
const FeedbackContext = createContext()

export const  FeedbackProvider = ({children}) => {
    const [isLoading, setIsloading] = useState(true)
    const [feedback, setFeedback ] = useState([
       
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(()=> {
        fetchedFeedback()
        
    }, [])

    const fetchedFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)

        const data = await response.json()
        setFeedback(data)
        setIsloading(false)

        return 
    }

    const deleteFeedback = async (id) => {
        if(window.confirm('are you sure you want to delete')){
            await fetch(`/feedback/${id}`, {
                method: 'DELETE'
            })
            setFeedback(feedback.filter((item)=> item.id !== id))
        }
    }

    const addFeedback = async (newFeedback) => {
        setIsloading(true)
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
            })

            const data = await response.json()

            setFeedback([data, ...feedback])
            setIsloading(false)
    }

    const updateFeedback = async (id, updItem) => {
        // {...item, ...updItem} ....item is updated with updItem

        const response = await fetch(`/feedback/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(updItem)
        })
        const data = await response.json()
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...data} : item ))
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
    
    return (
    <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider> 
    )
}

export default FeedbackContext

