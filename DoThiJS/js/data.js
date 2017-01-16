function Project(lstTask) {
    this.nameProj = '';
    this.listTask = lstTask;
    return this;
}

function Task(name, start, end) {
    this.nameTask = name;
    this.startTask = start;
    this.endTask = end;
    return this;
}
//create data
//project 1
var lstTask1 = [new Task('A', 0, 4), new Task('B', 0, 8), new Task('C', 7, 11), new Task('D', 0, 5)];
var project1 = new Project(lstTask1);
//project 2
var lstTask2 = [new Task('E', 0, 10), new Task('F', 0, 5), new Task('G', 0, 6), new Task('H', 0, 3)];
var project2 = new Project(lstTask2);
//project 3
var lstTask3 = [new Task('I', 0, 11), new Task('K', 0, 6), new Task('L', 0, 9), new Task('M', 0, 7)];
var project3 = new Project(lstTask3);
//list project
var lstProject = [project1, project2, project3];
//finish create data