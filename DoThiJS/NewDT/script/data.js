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
    titleFont: '14pt Arial',
    titleStyle: 'black',
    colorLine : '#E5E3E3',
    titleRight: 'LEVEL OF POSITION',
    titleRightFont: '10pt Myriad Pro',
    titleRightStyle : 'black',
    fontValueStyle : 'black',
    fontNameStyle :'black',
    xLabel: 'TÊN DỰ ÁN',
    xlabelFont : 'italic 10pt Arial',
    xlabelStyle : 'gray',
    yLabel: 'LEVEL OF POSITION',
    ylabelFont : 'italic 10pt Arial',
    ylabelStyle : 'gray',
    graphColor : '#3366CC',
    backgroundDetailBox : '#E8E2E2',
    colorDetailBox : 'black',
    styleDetailBox : "10px Verdana",
    columnSize : 80, // distance betwen border top canvas and graph
   	rowSize : 100, // distance betwen border left canvas and graph
   	margin : 10,
    stepSize : 1,
    dataPoints: [{ x: 'A', y: 2 }, // x is name of item , y is value of item 
                { x: 'B', y: 0 },
                { x: 'C', y: 3 },
                { x: 'E', y: 4 },
                { x: 'F', y: 4 }]
};