import PropTypes from 'prop-types'
export function CommentItem(props){
    const {author, content} = props.comment
    return (
        <div className="comment-item">
            <span className="avatar"></span>
            <a href="#">{author}</a>
            <p>{content}</p>
        </div>
    )
}
CommentItem.propTypes = {
    comment: PropTypes.object.isRequired
}
