import Post from "../post/post";
import Share from "../share/share";
import "./feed.css"

function Feed(){
    return(
        <div className="feed">
            <div className="feedWrapper">
                 <Share />
                 <Post />
                 <Post />
                 <Post />
                 <Post />
                 <Post />
                 <Post />
                 <Post />
                 <Post />
            </div>
        </div>
    )
}
export default Feed;