class studentHogwarts{
    privateScore = 0;
    name = null;

    #changeScoreBy(points) {
        this.privateScore = this.privateScore +  points;
    }

    setName(newName) {
        this.name = newName;
      }
    
    rewardStudent() {
      this.#changeScoreBy(1);
      }
    penalizeStudent() {
      this.#changeScoreBy(-1);
      }
    getScore() {
      return this.name + ": " + this.privateScore;
      }
    }

let harry = new studentHogwarts();
console.log(harry.getScore());


for (let i = 0; i < 4; i++) harry.rewardStudent();
console.log(harry.getScore());

let draco = new studentHogwarts();

draco.name = "Draco";
draco.rewardStudent();
for (let i = 0; i < 3; i++) draco.penalizeStudent();

console.log(draco.getScore());

