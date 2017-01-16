var Graph = function() {
    var canvas;
    var context;
    var valMax;
    var sections;
    var listProject;
    var yScale;
    var xScale;
    var totalTask = 0;
    var itemValue;
    var count;
    var sections;
    var stepSize;
    var columnSize;
    var rowSize;
    var margin;
    var marginProject;
    var header;
    var x;
    var y;
    var widthTask;
    var heightTask;
    var init = function(lstProject) {
        listProject = lstProject;
        totalTask = listProject.reduce((a,b) => { return parseInt(a) + b.listTask.length}
        ,0);
        console.log(totalTask);
        itemValue = [14, 7, 3, 4, 5];
        sections = listProject.length;
        stepSize = 1;
        columnSize = 100;
        rowSize = 60;
        margin = 10;
        marginProject = 10;
        header = "Name";
        count = 0;
    };
    var getVender = function(canvasID) {
        getValueMax();
        canvas = document.getElementById(canvasID);
        context = canvas.getContext("2d");
        xScale = (canvas.width - rowSize - margin) / (valMax);
        yScale = (canvas.height - columnSize -  2 * margin - (sections - 1 )* marginProject) / (sections);
        heightTask = (canvas.width - rowSize -  margin - (totalTask)* marginProject) / (totalTask);
        console.log(heightTask);
    };
    var drawLineForProject = function() {
        count = 0;
        for (scale = 0; scale <= sections + 1 ; scale = scale + stepSize) {
            context.fillStyle="#FF0000";
            y = columnSize + (yScale * count * stepSize) + (marginProject * scale);

            context.beginPath();
            context.moveTo(rowSize, y );
            context.lineTo(canvas.height, y );
            context.stroke();
            //
            if (scale <= lstProject.length - 1) {
                drawLineForTask(lstProject[scale]);
            }
            count++;
        }
    };
    var drawLineForTask = function  (project) {
        for (var i = 1; i <= project.listTask.length; i++) {
            context.beginPath();
            context.moveTo(rowSize, y + heightTask * i);
            context.lineTo(canvas.height, y + heightTask * i);
            context.stroke();

            
        };
        
        
    }
    var drawColumn = function() {
        count = 0;
    	context.beginPath();
        for (scale = 0; scale <= valMax; scale = scale + stepSize) {
            x = rowSize + (xScale * count * stepSize);
            context.fillText(scale,x - margin, margin );
            context.moveTo(x, 2*margin);
            context.lineTo(x,canvas.height);
            count++;
        }
        context.stroke();
    }
    var drawGraph = function() {
        init(lstProject);
        getVender('canvas');
        drawLineForProject();
        drawColumn();
        drawEachGraph(listProject[0]);
    };
    var drawEachGraph = function  (project) {
		// draw each graph bars	
		for (var i = 1; i <= project.listTask.length; i++) {
            var 
            context.translate(rowSize ,columnSize + marginProject *(i-1) + yScale * project.listTask[i-1].startTask);
            context.scale(xScale,heightTask);
            context.fillRect(i-1, 0, project.listTask[i-1].endTask,1);
		}
        context.setTransform(1, 0, 0, 1, 0, 0);
    };
    var getValueMax = function() {
        valMax = itemValue.reduce(function(valueMax, elem) {
            return valueMax > elem ? valueMax : elem;
        });
        return valMax;
    };
    return {
        drawGraph: drawGraph
    };
};
$(document).ready(function() {
    Graph().drawGraph();
});