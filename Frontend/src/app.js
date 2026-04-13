import React, { useEffect, useState } from "react";
import Schemes from "./components/Schemes";
import Exams from "./components/Exams";
import Careers from "./components/Careers";

const API = "https://your-backend-name.onrender.com";

const states = ["All","Maharashtra","Uttar Pradesh","Karnataka"];

function App() {
  const [state, setState] = useState("All");
  const [schemes, setSchemes] = useState([]);
  const [exams, setExams] = useState([]);
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    fetch(`${API}/schemes`).then(res => res.json()).then(setSchemes);
    fetch(`${API}/exams`).then(res => res.json()).then(setExams);
    fetch(`${API}/careers`).then(res => res.json()).then(setCareers);
  }, []);

  return (
    <div>
      <h2>Student Support Portal</h2>

      <select onChange={(e) => setState(e.target.value)}>
        {states.map(s => <option key={s}>{s}</option>)}
      </select>

      <Schemes data={schemes} state={state} />
      <Exams data={exams} />
      <Careers data={careers} />
    </div>
  );
}

export default App;