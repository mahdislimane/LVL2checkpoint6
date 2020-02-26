import Human from "./Human";
export default class Student extends Human {
  constructor() {
    super();
    this.getJob = job => (this.Job = job);
    this.leavJob = () => {
      this.Job = "unemployed";
    };
    this.learnNewSkill = skills => {
      this.Skills.push(skills);
    };
    this.forgetSkill = skill => {
      let skillData = this.Skills;
      let number = 0;
      skillData.forEach(skills => {
        if (skills == skill) {
          delete this.Skills[skillData.indexOf(skill)];
          number += 1;
        }
      });
      number == 0 && alert(`${skill} don't exist`);
    };
  }
}
