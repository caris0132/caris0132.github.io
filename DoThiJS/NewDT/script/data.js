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
    titleFont: '20pt Myriad Pro',
    titleStyle: 'red',
    colorLine : 'black',
    titleRight: 'LEVEL OF POSITION',
    titleRightFont: '10pt Myriad Pro',
    titleRightStyle : 'black',
    fontValueStyle : 'black',
    fontNameStyle :'black',
    xLabel: 'Tên dự án',
    xlabelFont : 'italic 16pt Myriad Pro',
    xlabelStyle : 'black',
    yLabel: 'Điểm đánh giá 360',
    ylabelFont : 'italic 14pt Myriad Pro',
    ylabelStyle : 'black',
    graphColor : '#157CEF',
    backgroundDetailBox : '#E8E2E2',
    colorDetailBox : 'black',
    styleDetailBox : "10px Verdana",
    columnSize : 80,
   	rowSize : 100,
   	margin : 10,
    stepSize : 1,
    dataPoints: [{ x: 'A', y: 2 },
                { x: 'B', y: 0 },
                { x: 'C', y: 3 },
                { x: 'E', y: 4 },
                { x: 'F', y: 4 }]
};