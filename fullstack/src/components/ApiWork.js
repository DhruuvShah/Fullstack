import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import "../styles/ApiWork.css";

function ApiWork() {
  const [resource, setResource] = useState("posts");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  function handleClickPost() {
    setResource("posts");
    showToast("Post data Successfully fetched");
  }

  function handleClickComment() {
    setResource("comments");
    showToast("Comment data Successfully fetched");
  }

  function handleClickUser() {
    setResource("users");
    showToast("User data Successfully fetched");
  }

  function showToast(message) {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(""), 3000);
  }

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.slice(0, 2)); // Keep slice for UI purposes
        setLoading(false);
      });
  }, [resource]);

  return (
    <div className="apiwork-container">
      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className="reactform-success"
          >
            <div className="reactform-success-content">
              <CheckCircle2 size={18} />
              <span>{successMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="apiwork-buttons">
        <button
          onClick={handleClickPost}
          className="apiwork-btn apiwork-btn-blue"
        >
          Posts
        </button>
        <button
          onClick={handleClickComment}
          className="apiwork-btn apiwork-btn-green"
        >
          Comments
        </button>
        <button
          onClick={handleClickUser}
          className="apiwork-btn apiwork-btn-yellow"
        >
          Users
        </button>
      </div>
      <div className="apiwork-content">
        {loading ? (
          <div className="apiwork-skeleton-list">
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
          </div>
        ) : (
          <div className="apiwork-data-list">
            {data.map((item, index) => (
              <div key={index} className="apiwork-data-card">
                <h4 className="apiwork-data-title">
                  {item.title || item.name || `Item ${item.id}`}
                </h4>
                <p className="apiwork-data-body">
                  {item.body || item.email || JSON.stringify(item)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export { ApiWork };
