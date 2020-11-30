import PropTypes from 'prop-types'
import {CommentItem} from "./CommentItem";
export function CommentList(props){

    return (
        <div className="comment-list">
            {props.comments.map( (comment,index) => <CommentItem key={index} comment={comment} />)}
        </div>
    )
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
}
