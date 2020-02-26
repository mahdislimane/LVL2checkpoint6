import React from "react";
import Student from "./Student";

function App() {
  const me = new Student();
  me.name = "Mahdi";
  me.getJob("Web developer");
  me.learnNewSkill("JSX");
  me.learnNewSkill("PHP");
  me.learnNewSkill("React");
  me.forgetSkill("React");
  me.leavJob();
  console.log(me.Skills);
  return (
    <div>
      <h1>{me.name}</h1>
      <h1>{me.Job}</h1>
      <h1>{me.Skills}</h1>
    </div>
  );
}

export default App;
