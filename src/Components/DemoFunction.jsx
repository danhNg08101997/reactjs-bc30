//rfc: khởi tạo react functional component

import React from "react";

export default function DemoFunction() {
  return (
    <div className="container">
      <div className="card text-start">
        <img
          className="card-img-top"
          src="https://picsum.photos/200/50"
          alt="Title"
        />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">Body</p>
        </div>
      </div>
    </div>
  );
}
