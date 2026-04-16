import React, { useState, useEffect } from 'react';
import '../styles/ApiWork.css';

export default function ApiWork() {
  const [resource, setResource] = useState("posts");

  function handleClickPost() {
    setResource("posts");
    alert('Post data Successfully fetched');
  }

  function handleClickComment() {
    setResource("comments");
    alert('Comment data Successfully fetched');
  }

  function handleClickUser() {
    setResource("users");
    alert('User data Successfully fetched');
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then(response => response.json())
      .then(json => console.log(json))
  }, [resource]);

  return (
    <div className="api-work-container">
      <h2>API Fetcher</h2>
      <div className="button-group">
        <button className="btn btn-primary" onClick={handleClickPost}>Post</button>
        <button className="btn btn-success" onClick={handleClickComment}>Comment</button>
        <button className="btn btn-warning" onClick={handleClickUser}>User</button>
      </div>
      <p className="note-text">Check the console to see the fetched {resource} data.</p>
    </div>
  );
}
