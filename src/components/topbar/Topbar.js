import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Link} from "react-router-dom";


export default function Topbar() {
    
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Socialize</span>
            </div>
            <div className="topbarCenter">
                <div className="SearchBar">
                    <SearchIcon className="searchicon"/>
                    <input placeholder="Search for freinds, videos or post" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarlinks">
                    <span className="topbarLink" ><Link to="/profile">Homepage</Link></span>
                    <span className="topbarLink" ><Link to="/">Timeline</Link></span>
                    <span className="topbarLink" ><Link to="/login">Login</Link></span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonIcon/>
                        <div className="topbarIconBadge">
                            1
                        </div>
                    </div>
                    <div className="topbarIconItem">
                        <ChatIcon/>
                        <div className="topbarIconBadge">
                            2
                        </div>
                    </div>
                    <div className="topbarIconItem">
                        <NotificationsIcon/>
                        <div className="topbarIconBadge">
                            1
                        </div>
                    </div>
                    <img src="/assests/profile/photo-1497316730643-415fac54a2af.avif" alt="" className="topbarImg"/>
                </div>
            </div>
        </div>
    )
}
