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
    var init = function() {
        name = ["USA", "China", "India", "Japan", "Germany"];
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
        yScale = (canvas.height - columnSize) / (valMax);
        xScale = (canvas.width - rowSize - 2 * margin) / (sections);
    };
    var drawLine = function() {
        context.beginPath();
        for (scale = sections; scale >= 0; scale = scale - stepSize) {
            var x = rowSize + (xScale * count * stepSize);
            context.fillText(name[scale], margin, x + margin);
            context.moveTo(columnSize, x);
            context.lineTo(canvas.height, x);
            count++;
        }
        context.stroke();
    };
    var drawColumn = function() {
    	context.beginPath();
        for (scale = valMax; scale >= 0; scale = scale - stepSize) {
            y = columnSize + (yScale * count * stepSize);
            console.log(y+"aaa");
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
    }
    var drawEachGraph = function  () {
    	// translate to bottom of graph  inorder to match the data 
  		context.translate(0,canvas.height - margin);
		context.scale(xScale, yScale);
  
		// draw each graph bars	
		for (i=0;i<5;i++) {
			context.fillRect(i+1, 0, 0.3, itemValue[i]);
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