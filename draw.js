
            var canvas = document.getElementById("myCanvas"); 
            var myContext = canvas.getContext("2d");
            
            var stopped = true;    
            function start() { 
                e = window.event; 
                myContext.moveTo(e.clientX-10, e.clientY-10); 
                stopped = false;
            }
            function stop() { 
                stopped = true; 
            } 
            function draw() { 
                if (!stopped) { 
                    e = window.event; 
                    myContext.lineTo(e.clientX-10, e.clientY-10); 
                    myContext.stroke();
                    }
            }