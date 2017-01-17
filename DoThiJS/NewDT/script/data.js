// function Project(name, level) {
//     this.nameProject = name;
//     this.levelOfPosition = level;
//     return this;
// }


// //create data list project
// var lstProject = [new Project('A', 0), new Project('B', 1), new Project('C', 2), new Project('D', 1), new Project('E', 3),new Project('F', 4),new Project('G', 4),new Project('H', 4)]



// curent data using draw graph
var data = {
    title: 'BIỂU ĐỒ LỊCH SỬ LEVEL OF POSITION',
    titleLeft: 'LEVEL OF POSITION',
    titleFont: '20pt Myriad Pro',
    titleStyle: 'red',
    xLabel: 'Tên dự án',
    yLabel: 'Điểm đánh giá 360',
    graphColor : "#157CEF",
    columnSize : 80,
   	rowSize : 100,
   	margin : 10,
    dataPoints: [{ x: 'A', y: 2 },
                { x: 'B', y: 0 },
                { x: 'C', y: 3 },
                { x: 'C', y: 3 },
                { x: 'C', y: 3 },
                { x: 'C', y: 3 },
                { x: 'C', y: 3 },
                { x: 'C', y: 3 },
                { x: 'C', y: 3 },
                { x: 'C', y: 3 },
                { x: 'C', y: 3 },
                { x: 'E', y: 10 },
                { x: 'F', y: 4 }]
};