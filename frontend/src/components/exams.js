import React from "react";

export default function Exams({ data }) {
  return (
    <div>
      <h3>Exams</h3>
      {data.map((e, i) => (
        <div key={i}>
          <b>{e.name}</b>
          <p>{e.eligibility}</p>
          <a href={e.officialWebsite} target="_blank">Visit</a>
        </div>
      ))}
    </div>
  );
}
