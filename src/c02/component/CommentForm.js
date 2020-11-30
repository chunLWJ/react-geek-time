import {useRef} from "react";
import PropTypes from 'prop-types'

export function CommentForm(props){

    let addComment = function (event) {
        event.preventDefault()
        if (textarea.current.value !== "") {
            props.commentAdd(textarea.current.value)
            textarea.current.value = ""
        }

    }
    const textarea = useRef(null)
    return (
        <div className="comment-form">
            <form onSubmit={addComment}>
                <textarea ref={textarea} style={{display: 'block', width: '100%'}} cols="30" rows="10"></textarea>
                <button type={"submit"}>Submit</button>
            </form>
        </div>
    )
}

CommentForm.propTypes = {
    commentAdd: PropTypes.func.isRequired
}
