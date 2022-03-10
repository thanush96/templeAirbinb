import React from "react";

export default function SmallCard({ title, Text1, Text2 }) {
  return (
    <div className="card-small">
      <div className="bottom-card-small">
        <div style={{ padding: 7, fontSize: 20 }}>{title}</div>
        <div>{Text1}</div>
        <div>{Text2}</div>
      </div>
    </div>
  );
}
