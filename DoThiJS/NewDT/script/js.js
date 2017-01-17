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
    var graphColor;
    var lstGraph = [];
    var y;

    //draw graph
    var drawGraph = function(data, canvasID) {
        init1(data);
        getVender(canvasID);
        drawLineForProject();
        fillTitleContent(listProject.title,'header');
        fillTitleContent(listProject.xLabel,'footer');
        fillTitleContent(listProject.yLabel,'left');
        fillTitleContent(listProject.titleRight,'right');
        drawNameProject();
        drawEachGraph();
        
    };
    var runGraph = function  (data, canvasID) {
        drawGraph(data,canvasID);
        createEventGraph();
    }
    // var init = function(lstProject) {
    //     listProject = lstProject;
    //     sections = lstProject.length;
    //     Val_Max = lstProject.reduce(function(a, b) {
    //         return (a > b.levelOfPosition) ? a : b.levelOfPosition;
    //     });

    //     stepSize = 1;
    //     columnSize = 50;
    //     rowSize = 120;
    //     margin = 10;
    // };
    var init1 = function  (data) {
        listProject = data;
        sections = listProject.dataPoints.length;
        Val_Max = listProject.dataPoints.reduce(function(a, b) {
            return (a > b.y) ? a : b.y;
        });
        stepSize = 1;
        columnSize = listProject.columnSize;
        rowSize = listProject.rowSize;
        margin = listProject.margin;
    }
    var getVender = function(canvasID) {
        canvas = document.getElementById("canvas");
        context = canvas.getContext("2d");
        yScale = (canvas.height - 2 * columnSize - margin) / (Val_Max);
        xScale = (canvas.width - 2 * rowSize) / (sections);
    };
    var drawLineForProject = function() {
        context.beginPath();
        context.fillStyle = listProject.fontValueStyle;
            context.strokeStyle = listProject.fontValueStyle;
        var count = 0;
        for (scale = Val_Max; scale >= 0; scale = scale - stepSize) {
            y = columnSize + (yScale * count * stepSize);

            context.fillText(scale, rowSize - 2* margin, y + margin / 2);
            
            context.lineWidth=0.1;
            context.moveTo(rowSize, y);
            context.lineTo(canvas.width - rowSize, y);
            count++;
        }
        context.stroke();
    };
    //draw name all project
    var drawNameProject = function() {
        context.beginPath();
        context.font = "10px Verdana";
        for (i = 0; i < sections; i++) {
            computeHeight(listProject.dataPoints[i].y);
            context.textAlign = "left";
            context.fillText(listProject.dataPoints[i].x, xScale * i + 0.2 * xScale + rowSize , canvas.height - columnSize + 5);
        }
        context.stroke();
    }
    var computeHeight = function(value) {
        y = canvas.height - value * yScale;
    }
    //fill text about tilte , project name ...
    var fillTitleContent = function  (text,positionText) {
    	context.beginPath();
    	context.textAlign = "center";	
    	if (positionText == "header") {
    		context.font = listProject.titleFont;
            context.fillStyle = listProject.titleStyle;
    		context.fillText(text, (canvas.width )/2, columnSize/2);
    	}
    	if (positionText == "footer") {
    		context.font = listProject.xlabelFont;
            context.fillStyle = listProject.xlabelStyle;
    		context.fillText(text, (canvas.width)/2, canvas.height - columnSize/2);
    	}
    	if (positionText == "left") {
    		context.font = listProject.yLabelFont;
            context.fillStyle = listProject.ylabelStyle;
			context.translate(0, canvas.height);
			context.rotate( - Math.PI/2);
			context.fillText(text, canvas.height/2, columnSize/2);
			context.setTransform(1, 0, 0, 1, 0, 0);
    	}
    	if (positionText == "right") {
    		context.font = listProject.titleRightFont;
            context.fillStyle = listProject.titleRightStyle;
    		context.textAlign ="left";
    		var widthText = context.measureText(text).width;
			if(widthText > rowSize/2) {
				var arrText = text.split(' ').forEach(function(item, index) {
					context.fillText(item, canvas.width -  rowSize/2 , columnSize + index * 20);
				});
			}
			else
				context.fillText(text, canvas.width - 0.5 * rowSize, rowSize /2);
			context.restore();
    	}

    	context.stroke();
        context.fillStyle = "black";
    }
    
    // print names of each data entry
    var drawEachGraph = function  () {
    	var posX = rowSize;
    	var posY = columnSize + margin;
    	for (i = 0; i < sections; i++) {
            posX = rowSize + i * xScale;
            if (listProject.dataPoints[i].y == 0) {
                posY = columnSize + yScale* (Val_Max - 0.1);
                console.log(posY);
                lstGraph.push({posX:posX, posY:posY, widthGraph:xScale * 0.6, heightGraph:0.1 * yScale,index: i});
            }
            else {
                posY = columnSize + yScale* (Val_Max - listProject.dataPoints[i].y);
                lstGraph.push({posX:posX, posY:posY, widthGraph:xScale * 0.6, heightGraph:listProject.dataPoints[i].y * yScale,index: i});
            }
        }
        context.fillStyle = listProject.graphColor;

        // draw each graph
        lstGraph.forEach(function  (item) {
        	context.fillRect(item.posX, item.posY, item.widthGraph, item.heightGraph);
        })
        context.translate(canvas.width - rowSize, columnSize);
        context.fillRect(10, 0, xScale*0.6,  15);
        context.setTransform(1, 0, 0, 1, 0, 0);
    }
    // create event for graph
    var createEventGraph = function() {
        var isMouseOverGraph = null ;
        var isClicked = null;
    	//event mouse hover
    	canvas.addEventListener('mousemove',function  (event) {
    		var x = event.pageX - canvas.offsetLeft;
            var y = event.pageY - canvas.offsetTop;
            if (isClicked) {
                return
            }
            var isContain = function  () {
                return lstGraph.reduce(function  (result, item) {
                    var iscontain = (item.posX < x && item.posY < y && (item.posX + item.widthGraph) > x && (item.posY + item.heightGraph) > y );
                    return iscontain ? item : result;
                },0);
            }();
            if(isContain ) {
                    isMouseOverGraph = isContain;
                    context.fillStyle="black";
                    context.clearRect(0,0,canvas.width, canvas.height)
                    drawGraph(listProject,canvas);
                    context.shadowBlur=3;
                    context.shadowColor="black";
                    context.clearRect(isContain.posX, isContain.posY, isContain.widthGraph, isContain.heightGraph);
                    context.fillRect(isContain.posX, isContain.posY, isContain.widthGraph, isContain.heightGraph);
                    context.shadowBlur = 0;
                    context.setTransform(1, 0, 0, 1, 0, 0);
            }
            

    	});
        //event click graph
        canvas.addEventListener('click',function  (event) {
            var x = event.pageX - canvas.offsetLeft;
            var y = event.pageY - canvas.offsetTop;
            //check graph contain position mouse
            var isContain = function  () {
                return lstGraph.reduce(function  (result, item) {
                    var iscontain = (item.posX < x && item.posY < y && (item.posX + item.widthGraph) > x && (item.posY + item.heightGraph) > y ) ;
                    if(result!= null )
                        return iscontain ? item : result;
                },0)
            }();
            if(isContain) {
                context.fillStyle="black";
                context.clearRect(0,0,canvas.width, canvas.height)
                drawGraph(listProject,canvas);
                context.setTransform(1, 0, 0, 1, 0, 0);
                if (!isClicked) {
                    isClicked = isContain;
                    
                }
                context.strokeStyle="white";
                
                context.lineWidth = 1;
                context.strokeRect(isContain.posX + 1, isContain.posY + 1, isContain.widthGraph - 3, isContain.heightGraph - 3);
                context.strokeStyle="black";
                context.fillStyle="#EDE9EE";
                var detailGrap = listProject.titleRight + " : " + listProject.dataPoints[isContain.index].y;
                var widthDetailBox = context.measureText(detailGrap).width + 20;
                context.fillRect(isContain.posX ,isContain.posY - 10,widthDetailBox, -40);
                context.fillStyle="black";
                context.textAlign = "left"
                context.fillText (listProject.dataPoints[isContain.index].x,isContain.posX + 10 ,isContain.posY - 40);
                
                context.fillText (detailGrap,isContain.posX + 10 ,isContain.posY - 20);
            }
            else {
                context.fillStyle="black";
                context.clearRect(0,0,canvas.width, canvas.height)
                drawGraph(listProject,canvas);
                context.setTransform(1, 0, 0, 1, 0, 0);
                isClicked = null;
            }
        })
    };

    return {
        drawGraph: drawGraph,
        runGraph : runGraph
    };
    
};
$(document).ready(function() {
    Graph().runGraph(data,'canvas');
});