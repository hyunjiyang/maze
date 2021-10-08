var src = document.getElementById("drag"), srcId, target = document.getElementById("drop");
        
    alert("익스플로어는 드래그드랍을 지원하지 않습니다. 크롬창으로 띄워주세요");

    src.ondragstart = function(e){
	    srcId = e.target.id;
	    e.dataTransfer.setData("text", srcId);
    }
    target.ondragenter = function(e){
	    dropId = e.target.id;
    }
    target.ondragover = function(e){
	    e.preventDefault();
    }
    target.ondrop = function(e){
	    var data = e.dataTransfer.getData("text");
	    e.target.appendChild(document.getElementById(data));
    }