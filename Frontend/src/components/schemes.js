import React, { useState } from "react";

export default function Schemes({ data, state }) {
  const [search, setSearch] = useState("");

  const filtered = data
    .filter(s => s.state === state || s.state === "All")
    .filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h3>Schemes</h3>
      <input placeholder="Search" onChange={(e) => setSearch(e.target.value)} />

      {filtered.map((s, i) => (
        <div key={i}>
          <b>{s.name}</b>
          <p>{s.eligibility}</p>
          <p>{s.benefits}</p>
          <p>Deadline: {s.deadline}</p>
          <p>Days Left: {s.daysLeft}</p>
          {s.alert && <p style={{color:"red"}}>⚠ {s.alert}</p>}
          <a href={s.officialApplyLink} target="_blank">Apply</a>
        </div>
      ))}
    </div>
  );
}