var Graph = function() {
    var canvas;
    var context;
    var valMax;
    var sections;
    var xScale;
    var yScale;
    var name;
    var itemValue;
    var count;
    var sections;
    var stepSize;
    var columnSize;
    var rowSize;
    var margin;
    var header;
    var x;
    var y;
    var init = function() {
        name = ["A", "B", "C", "D", "E"];
        itemValue = [14, 7, 3, 4, 5];
        sections = name.length - 1;
        stepSize = 1;
        columnSize = 100;
        rowSize = 60;
        margin = 10;
        header = "Name";
        count = 0;
    };
    var getVender = function(canvasID) {
        getValueMax();
        canvas = document.getElementById(canvasID);
        context = canvas.getContext("2d");
        yScale = (canvas.height - columnSize - margin) / (valMax);
        xScale = (canvas.width - rowSize - 2 * margin) / (sections);
    };
    var drawLine = function() {
        count = 0;
        context.beginPath();
        for (scale = 0; scale <= sections; scale = scale + stepSize) {
            x = rowSize + (xScale * count * stepSize);
            context.fillText(name[scale], margin, x + margin);
            context.moveTo(columnSize, x);
            context.lineTo(canvas.height, x);
            count++;
        }
        context.stroke();
    };
    var drawColumn = function() {
        count = 0;
    	context.beginPath();
        for (scale = 0; scale <= valMax; scale = scale + stepSize) {
            y = columnSize + (yScale * count * stepSize);
            context.fillText(scale,y - margin, margin );
            context.moveTo(y, 2*margin);
            context.lineTo(y,canvas.height);
            count++;
        }
        context.stroke();
    }
    var drawGraph = function() {
        init();
        valMax = getValueMax();
        console.log(valMax);
        getVender('canvas');
        drawLine();
        drawColumn();
        drawEachGraph();
    }
    var drawEachGraph = function  () {
    	// translate to bottom of graph  inorder to match the data 
  		context.translate(rowSize, columnSize);
		context.scale(xScale, yScale);
        console.log(xScale +"  " +yScale);
		// draw each graph bars	
		for (i=0;i<5;i++) {
			context.fillRect(10, 10, 100,100);
		}
    }
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