import React from "react";

export default function Careers({ data }) {
  return (
    <div>
      <h3>Careers</h3>
      {data.map((c, i) => (
        <div key={i}>
          <b>{c.title}</b>
          <p>{c.description}</p>
        </div>
      ))}
    </div>
  );
}