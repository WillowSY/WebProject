var form=document.getElementById('form');
var input =document.getElementById('msg');
var print = document.getElementsByClassName('Notes');
form.addEventListener('submit', function(e){
    e.preventDefault();
    var msg=input.value;
    if(msg){
        
        form.reset();
        const element = document.getElementById('Notes');
        const newDiv = document.createElement('div');
        const content = document.createTextNode(msg);
        /*const day = document.querySelector('#input_Date').value;*/
        newDiv.appendChild(content);
        element.appendChild(newDiv);
    }
    else{
        alert("내용을 입력하세요.");
    }
})
