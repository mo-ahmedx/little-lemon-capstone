export default function TestimonialCard({
  userName,
  userRate,
  userImg,
  userComment,
}) {
  return (
    <div className="userCard">
      <p className="rating">Rating: {userRate}</p>

      <div className="userInfo">
        <img src={userImg} alt="user" />
        <h4>{userName}</h4>
      </div>

      <p className="comment">{userComment}</p>
    </div>
  );
}