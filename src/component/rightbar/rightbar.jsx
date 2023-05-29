import "./rightbar.css"

function Rightbar() {
    return (
        <div className="rightbar">
            <div className="righbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="./rasmlar/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Polo Faster</b> and <b>3 other</b> have a birhday today
                    </span>
                </div>
                <img className="rightbarAd" src="./rasmlar/birhday.jpg" alt="" srcset="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                       <div className="rightbarProfileImgContainer">
                         <img className="rightbarProfileImg" src="" alt="" srcset="" />
                       </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Rightbar;