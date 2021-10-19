import { useState } from "react";
import { intervalScheduling } from './utils/scheduling.js';

export const NewJob = () => {
  const [title, setTitle] = useState("");
  const [comeco, setComeco] = useState("");
  const [fim, setFim] = useState("");
  const [peso, setPeso] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const job = { title, comeco, fim, peso };

    fetch("http://localhost:8000/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(job),
    });

    setTitle('');
    setComeco('');
    setFim('');
    setPeso('');
    window.location.reload();
  };

  const calcula = () => {
    fetch("http://localhost:8000/jobs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setJobs(data);
      });

      console.log(jobs)
      console.log(intervalScheduling(jobs, jobs.length));
  };

  const apaga = () => {
      
  };

  return (
    <div className="newjob">
      <h2>Adicione uma nova tarefa</h2>
      <form onSubmit={handleSubmit}>
        <label>Título da tarefa</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Começo:</label>
        <textarea
          required
          value={comeco}
          onChange={(e) => setComeco(parseInt(e.target.value))}
        ></textarea>
        <label>Fim:</label>
        <textarea
          required
          value={fim}
          onChange={(e) => setFim(parseInt(e.target.value))}
        ></textarea>
        <label>
          Peso da atividade (quanto maior o peso, mais lucrativa ela é)
        </label>
        <textarea
          required
          value={peso}
          onChange={(e) => setPeso(parseInt(e.target.value))}
        ></textarea>
        <button onClick={handleSubmit}>Adicionar Tarefa</button>
        <button onClick={calcula}>Calcular</button>
        <button onClick={apaga}>Reinicia</button>
      </form>
    </div>
  );
};
