import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../DummyData.js";
import { useState } from "react";
export default function Post({post}) {

    const [like,setLike]=useState(post.like)
    const [isLiked,setIsLiked]=useState(false)
    
    const likeHandler=()=>{
        setLike(isLiked? like-1:like+1)
        setIsLiked(!isLiked)
}

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u)=>u.id===post?.userId)[0].profilePicture} alt="" className="postProfileImg" />
                        <span className="postUsername">{Users.filter((u)=>u.id===post?.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assests/download.png" alt="" className="likeIcon" onClick={likeHandler}/>
                        <img src="/assests/download (1).png" alt="" className="likeIcon" onClick={likeHandler}/>
                        <span className="postLikeCounter">{like} likes</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
