let lists       = document.getElementsByClassName("list");
let rightBox    = document.getElementById("right");
let leftBox     = document.getElementById("left");

//using for loops

for(list of lists)
{
    list.addEventListener("dragstart", function(e){
        let selected    = e.target;
        /* 
         Question arrise = what is target method of js
         addEventListener
         preventDefault
         appendChild
        */

        //right box drag
        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected = null;
        });

        //left box drop
        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        leftBox.addEventListener("drop", function(e){
            leftBox.appendChild(selected);
            selected = null;
        });
    })
}