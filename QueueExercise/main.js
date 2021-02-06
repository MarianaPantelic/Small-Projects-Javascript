class Queue{

    head;
    tail;
    

    constructor(){
        this.head = 0;
        this.tail = 0;
    }

    enqueue(){
        let element = document.getElementById("elem").value;
        document.getElementsByClassName("container1")[this.tail].innerHTML= element;
        document.getElementsByClassName("container1")[this.tail].style.backgroundColor = "pink";
        document.getElementById("tail").innerHTML ++; 
        document.getElementById("elem").value = "";
        this.tail++;
    }

    dequeue(){
        document.getElementsByClassName("container1")[this.head].innerHTML = "x";
        document.getElementsByClassName("container1")[this.head].style.backgroundColor = "White";
        document.getElementById("head").innerHTML ++;
        this.head++;
        if(this.head === this.tail){
            document.getElementById("head").innerHTML = 0;
            document.getElementById("tail").innerHTML = 0;
        }
    }

    clearQueue(){
        for(let i = this.head; i < this.tail; i++){
            document.getElementsByClassName("container1")[i].innerHTML = "x";
            document.getElementsByClassName("container1")[i].style.backgroundColor = "White";
        }
        document.getElementById("head").innerHTML = 0;
        document.getElementById("tail").innerHTML = 0;
        this.head = 0;
        this.tail = 0;
    }
    
}




let queue = new Queue;

document.getElementById("enQ").addEventListener("click", function(){
    queue.enqueue();
});

document.getElementById("deQ").addEventListener("click", function(){
    queue.dequeue();
});

document.getElementById("cQ").addEventListener("click", function(){
    queue.clearQueue();
});

