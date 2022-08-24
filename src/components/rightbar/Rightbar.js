import "./rightbar.css"
import { Users } from "../../DummyData.js";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assests/handmade-explosion-gift-box-500x500.webp" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Mohit  Agarwal</b> and <b>3 others friends</b> have a birthday today.</span>
        </div>
        <img src="/assests/youtube-ads-how-to-start-1200.webp" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} friends={u} />
          ))}
        </ul>
      </>
    )
  }
  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Informmation</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Kolkata</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Howrah</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Age:</span>
            <span className="rightbarInfoValue">20</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="/assests/profile/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Tushar Agarwal</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assests/profile/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Talex Durden</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assests/profile/4.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Dora Hawks</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assests/profile/5.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Thomas Holden</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assests/profile/6.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Shirley Beauchamp</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assests/profile/7.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Mohit Agarwal</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  )
}
