import { useEffect, useState } from "react";

function Api() {
  const [resource, setResource] = useState("posts");

  function handleClickPost() {
    setResource("posts");
    alert("Post Data Fetched Successfully");
  }

  function handleClickComment() {
    setResource("comments");
    alert("Comment Data Fetched Successfully");
  }

  function handleClickUser() {
    setResource("users");
    alert("User Data Fetched Successfully");
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [resource]);

  return (
    <div className="api">
      <div className="api-btn-group">
        <button className="btn-primary" onClick={handleClickPost}>📄 Posts</button>
        <button className="btn-success" onClick={handleClickComment}>💬 Comments</button>
        <button className="btn-iris" onClick={handleClickUser}>👤 Users</button>
      </div>
    </div>
  );
}
export default Api;
