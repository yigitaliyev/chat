import "./post.css"
import { MoreVert } from "@mui/icons-material";

function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="./rasmlar/1.jpg" alt="" srcset="" />
                        <span className="postUsername">Yigitaliyev Bekzod</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! Its my first post:</span>
                    <img className="postImg" src="./rasmlar/5.webp" alt="" srcset="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="./rasmlar/like.png" alt="" srcset="" />
                        <img className="likeIcon" src="./rasmlar/heart.jpg" alt="" srcset="" />
                        <span className="postLikeCounter">32 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommitText">9 commits</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;