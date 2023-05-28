import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"

function TopBar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Lamasacial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Qidirish..." className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                       <Person />
                       <span className="topbarIconBadge">1</span>     
                    </div>
                    <div className="topbarIconItem">
                       <Chat />
                       <span className="topbarIconBadge">2</span>     
                    </div>
                    <div className="topbarIconItem">
                       <Notifications />
                       <span className="topbarIconBadge">3</span>     
                    </div>
                </div>
                <img src="/rasmlar/1.jpg" alt="" className="topbarImg" />
            </div>
        </div>
    )
}
export default TopBar;