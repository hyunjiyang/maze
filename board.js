    var localStorage = window.localStorage;         
    var itemList = document.getElementById("nameList");
    var itemAddr = document.getElementById("content");
    var u_name = document.getElementById("name");
    var u_text = document.getElementById("text");

    if (!localStorage) {
        alert("익스플로어는 로컬스토리지를 지원하지 않습니다. 크롬창으로 띄워주세요");
    }

    function pageload() {   
        itemList.innerHTML = "";   
        itemAddr.innerHTML = "";
        for (var i = 0; i <= localStorage.length - 1; i++) {  
            var key = localStorage.key(i);
            itemList.options[itemList.options.length] = new Option(key, key);
        }
    }

    function Save() {        
        localStorage.setItem(u_name.value, u_text.value);    
        pageload();
    }

    function Remove() {      
        var option_key = itemList.options[itemList.selectedIndex].value;
        localStorage.removeItem(option_key);              
        pageload();
    }
    function Clear() {        
        localStorage.clear();                                
        pageload();
    }
	
    function View() {       
        var option_key = itemList.options[itemList.selectedIndex].value;
        itemAddr.innerHTML = localStorage.getItem(option_key); 
    }