var Graph = function() {
    var canvas;
    var context;
    var Val_Max;
    var sections;
    var xScale;
    var yScale;
    var listProject;
    var stepSize;
    var columnSize;
    var rowSize;
    var margin;
    var header;
    var lstGraph = [];
    var y;
    var init = function(lstProject) {
        listProject = lstProject;
        sections = lstProject.length;
        Val_Max = lstProject.reduce(function(a, b) {
            return (a > b.levelOfPosition) ? a : b.levelOfPosition;
        });
        stepSize = 1;
        columnSize = 50;
        rowSize = 120;
        margin = 10;
    };
    var getVender = function(canvasID) {
        canvas = document.getElementById("canvas");
        context = canvas.getContext("2d");
        yScale = (canvas.height - 2 * columnSize - margin) / (Val_Max);
        xScale = (canvas.width - 2 * rowSize) / (sections);
    };
    var drawLineForProject = function() {
        context.beginPath();
        var count = 0;
        for (scale = Val_Max; scale >= 0; scale = scale - stepSize) {
            y = columnSize + (yScale * count * stepSize);
            context.fillText(scale, rowSize - margin, y + margin / 2);
            context.moveTo(rowSize, y)
            context.lineTo(canvas.width - rowSize, y)
            count++;
        }
        context.stroke();
    };
    var drawNameProject = function() {
        context.beginPath();
        context.font = "10px Verdana";
        for (i = 0; i < sections; i++) {
            computeHeight(listProject[i].levelOfPosition);
            context.textAlign = "center";
            context.fillText(listProject[i].nameProject, xScale * i + 0.2 * xScale +rowSize , canvas.height - columnSize + 5);
        }
        context.stroke();
    }
    var computeHeight = function(value) {
        y = canvas.height - value * yScale;
    }
    var drawGraph = function() {
        init(lstProject);
        getVender('canvas');
        drawLineForProject();
        fillTitleContent('BIỂU ĐỒ LỊCH SỬ LEVEL OF POSITION','header');
        fillTitleContent('Tên dự án','footer');
        fillTitleContent('level of position','left');
        fillTitleContent('level of position','right');
        drawNameProject();
        drawEachGraph();
        createEventGraph();
    };
    var fillTitleContent = function  (text,positionText) {
    	context.beginPath();
    	context.textAlign = "center";	
    	if (positionText == "header") {
    		context.font = "18px Verdana";
    		context.fillText(text, (canvas.width )/2, columnSize/2);
    		return;
    	}
    	if (positionText == "footer") {
    		context.font = "16px Arial";
    		context.fillText(text, (canvas.width)/2, canvas.height - columnSize/2);
    		return;
    	}
    	if (positionText == "left") {
    		context.font = "italic 16px Arial";
    		context.save();
			context.translate(0, canvas.height);
			context.rotate( - Math.PI/2);
			context.fillText(text, canvas.height/2, columnSize);
			context.restore();
    		return;
    	}
    	if (positionText == "right") {
    		context.font = "16px Arial";
    		context.textAlign ="left";
    		context.save();
    		var widthText = context.measureText(text).width;
			if(widthText > rowSize/2) {
				var arrText = text.split(' ').forEach(function(item, index) {
					context.fillText(item, canvas.width - 0.7 * rowSize , rowSize /2 + index * 20);
				});
			}
			else
				context.fillText(text, canvas.width - 0.5 * rowSize, rowSize /2);
			context.restore();
    		return;
    	}
    	context.stroke();
    }
    // var drawEachGraph = function() {
    //     // print names of each data entry
    //     context.translate(rowSize, canvas.height - columnSize - margin);
    //     context.fillStyle = "#157CEF";
    //     context.scale(xScale, -1 * yScale);
    //     // draw each graph bars	
    //     for (i = 0; i < sections; i++) {
    //         if (lstProject[i].levelOfPosition == 0) {
    //             lstProject[i].levelOfPosition = 0.1;
    //         }
    //         context.fillRect(i, 0, 0.6, lstProject[i].levelOfPosition);
    //     }
    //     context.translate(sections, Val_Max);
    //     context.fillRect(0.2, 0, 0.6, -0.2);
    //     context.setTransform(1, 0, 0, 1, 0, 0);
    // };
    
    // print names of each data entry
    var drawEachGraph = function  () {
    	var posX = rowSize;
    	var posY = columnSize + margin;
    	for (i = 0; i < sections; i++) {
            if (lstProject[i].levelOfPosition == 0) {
                lstProject[i].levelOfPosition = 0.1;
            }
            posX = rowSize + i * xScale;
            posY = columnSize + yScale* (Val_Max - lstProject[i].levelOfPosition);
            console.log(posX +"  " + posY);
            lstGraph.push({posX:posX, posY:posY, widthGraph:xScale * 0.6, heightGraph:lstProject[i].levelOfPosition * yScale});
            
        }
        context.fillStyle = "#157CEF";
        lstGraph.forEach(function  (item) {
        	context.fillRect(item.posX, item.posY, item.widthGraph, item.heightGraph);
        })
        context.translate(canvas.width - rowSize, columnSize);
        context.fillRect(10, 0, xScale*0.6,  15);
        context.setTransform(1, 0, 0, 1, 0, 0);
    }
    var createEventGraph = function() {
    	//event mouse hover
    	canvas.addEventListener('mouseover',function  () {
    		var x = event.pageX - canvas.offsetLeft;
    		var y = event.pageY - canvas.offsetTop;
    		context.fillText((x + y) , 10,100);
    	});
    };

    return {
        drawGraph: drawGraph
    };
    
};
$(document).ready(function() {
    Graph().drawGraph();
});