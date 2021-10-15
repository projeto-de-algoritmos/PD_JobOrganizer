import { useState } from "react";

export const NewJob = () => {
  const [job, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [comeco, setComeco] = useState("");
  const [fim, setFim] = useState("");
  const [peso, setPeso] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
          onChange={(e) => setComeco(e.target.value)}
        ></textarea>
        <label>Fim:</label>
        <textarea
          required
          value={fim}
          onChange={(e) => setFim(e.target.value)}
        ></textarea>
        <label>
          Peso da atividade(quanto maior o peso, mais lucrativa ela é
        </label>
        <textarea
          required
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        ></textarea>
        <button>Adicionar Tarefa</button>
      </form>
    </div>
  );
};
