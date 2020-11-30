import './CommentBox.css'
import {useState} from "react";
import {CommentList} from "./component/CommentList";
import {CommentForm} from "./component/CommentForm";

const _comments = [
    {
        author: "内特",
        content: "你好 React! 这是一个示例评论。",
    },
    { author: "凯文", content: "你好 Redux!" },
    { author: "布德", content: "你好 Rekit!" },
];
const authors = ["内特","凯文","布德"]
// component
export function CommentBox(){
    const [comments,setComments] = useState(_comments)
    let commentAdd = function(content){
        console.log(Math.floor(Math.random() * authors.length))
        setComments([...comments,{
            author: authors[Math.floor(Math.random() * authors.length)],
            content
        }])
    }

    return (
        <div className="comment-box">
            <h1>评论({comments.length})</h1>
            <CommentList comments={comments} />
            <CommentForm commentAdd={commentAdd} />
        </div>
    )
}
