import React from 'react'
import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const  FeedbackProvider = ({children}) => {

    const [feedback, setFeedback ] = useState([
        {
            id: 1,
            text: 'This is a feedback item 1',
            rating:  10
        },
        {
            id: 2,
            text: 'This is a feedback item 2',
            rating:  2
        },
        {
            id: 3,
            text: 'This is a feedback item 3',
            rating:  4
        },
        {
            id: 3,
            text: 'This is a feedback item 4',
            rating:  10
        },
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const deleteFeedback = (id) => {
        if(window.confirm('are you sure you want to delete')){
            setFeedback(feedback.filter((item)=> item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const updateFeedback = (id, updItem) => {
        //TEST
        // feedback.map((item) => {
        //     item.id === id ? console.log({...item,...updItem} ): console.log(item )
        // })
        
        // {...item, ...updItem} ....item is updated with updItem
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item ))
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

