//code for button click
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
    
            }
        }
    };
    request.open('GET', 'http://abdulkadir98.imad.hasura-app.io', true);
    request.send(null);
    
};
