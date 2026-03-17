import React, { useState } from "react";
import "./App.css";

function App() {

  const [votes, setVotes] = useState({
    CandidateA: 0,
    CandidateB: 0,
    CandidateC: 0
  });

  const handleVote = (candidate) => {
    setVotes({
      ...votes,
      [candidate]: votes[candidate] + 1
    });
  };

  const resetVotes = () => {
    setVotes({
      CandidateA: 0,
      CandidateB: 0,
      CandidateC: 0
    });
  };

  return (

    <div className="container">

      <h2>Simple Voting Application</h2>

      <div className="card">
        <h3>Candidate A</h3>
        <p>Votes: {votes.CandidateA}</p>
        <button onClick={() => handleVote("CandidateA")}>Vote</button>
      </div>

      <div className="card">
        <h3>Candidate B</h3>
        <p>Votes: {votes.CandidateB}</p>
        <button onClick={() => handleVote("CandidateB")}>Vote</button>
      </div>

      <div className="card">
        <h3>Candidate C</h3>
        <p>Votes: {votes.CandidateC}</p>
        <button onClick={() => handleVote("CandidateC")}>Vote</button>
      </div>

      <br />

      <button className="reset" onClick={resetVotes}>
        Reset Votes
      </button>

    </div>
  );
}

export default App;
