import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          {/* <div className="col-md-3"> */}{" "}
          {posts.map((post) => (
            <div className="col-md-4 cssclass">{post.title}</div>
          ))}
          {/* </div> */}
        </div>
      </div>
      {/* <div className="container">
        <div className="col-md-3">
          {posts.map((post) => (
            <p> </p>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Posts;
