import {FaTimes, FaEdit} from 'react-icons/fa'
import React from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import { useContext } from 'react'
import FeedbackContext, { FeedbackProvider } from '../context/FeedbackContext'

function FeedbackItem({item}) {
    const {deleteFeedback, editFeedback } = useContext(FeedbackContext)
    return (
        <Card >
            <div className="num-display">{ item.rating } </div>
            <button class='delete'>
                <FaTimes onClick={()=>deleteFeedback(item.id)} color='purple' />
            </button>
            <button class='edit' onClick={()=>editFeedback(item)}>
                <FaEdit color='purple'></FaEdit>
            </button>
            <div className="text-display">{item.text}</div>
            <button >Click</button>
        </Card>
    )
}
FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem