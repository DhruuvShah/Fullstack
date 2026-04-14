import { useState, useEffect } from "react";
import "../styles/ApiWork.css";
import { Alert } from "./Alert";

function ApiWork() {
  const [resource, setResource] = useState("posts");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  const handleClickPost = () => {
    setResource("posts");
    setAlertMsg("Post data Successfully fetched");
  };
  const handleClickComment = () => {
    setResource("comments");
    setAlertMsg("Comment data Successfully fetched");
  };
  const handleClickUser = () => {
    setResource("users");
    setAlertMsg("User data Successfully fetched");
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/${resource}`).then((response) => response.json()).then((json) => {
      setData(json.slice(0, 2));
      setLoading(false);
    });
  }, [resource]);

  return <div className="apiwork-container">
      <div className="apiwork-buttons">
        <button onClick={handleClickPost} className="apiwork-btn apiwork-btn-blue">Posts</button>
        <button onClick={handleClickComment} className="apiwork-btn apiwork-btn-green">Comments</button>
        <button onClick={handleClickUser} className="apiwork-btn apiwork-btn-yellow">Users</button>
      </div>

      {alertMsg && <Alert message={alertMsg} type="success" duration={3000} />}

      <div className="apiwork-content">
        {loading ? <div className="apiwork-skeleton-list">
            <div className="apiwork-skeleton-card">
              <div className="apiwork-skeleton-title" />
              <div className="apiwork-skeleton-body" />
              <div className="apiwork-skeleton-body-short" />
            </div>
            <div className="apiwork-skeleton-card">
              <div className="apiwork-skeleton-title" />
              <div className="apiwork-skeleton-body" />
              <div className="apiwork-skeleton-body-short" />
            </div>
          </div> : <div className="apiwork-data-list">
            {data.map((item, index) => <div key={index} className="apiwork-data-card">
                <h4 className="apiwork-data-title">{item.title || item.name || `Item ${item.id}`}</h4>
                <p className="apiwork-data-body">{item.body || item.email || JSON.stringify(item)}</p>
              </div>)}
          </div>}
      </div>
    </div>;
}
export {
  ApiWork
};
