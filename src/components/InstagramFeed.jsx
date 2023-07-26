import Feed from "react-instagram-authless-feed";

function InstagramFeed() {
  return (
    <>
      <Feed
        username="bodybuildingandbs"
        className="Feed"
        classNameLoading="Loading"
        limit="6"
      />
    </>
  );
}

export default InstagramFeed;
