let boxes=document.querySelectorAll(".box")
let reset=document.querySelector(".rst1")
let message=document.querySelector(".msg")
let newg=document.querySelector(".rst2")

console.log("script")
let turno=true;
const pat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

function disable(){
    for(let box of boxes)
        {
            box.disabled=true;
        }
}

function enable(){
    for(let box of boxes)
        {
            box.disabled=false;
            box.innerText=""
        }
}

function res(){
    turno=true;
    message.classList.add("hide")
    enable();
}

function showwinner(winner)
{
    console.log("winner")
    message.classList.remove("hide")
    message.innerText=`Congratulations WINNER is ${winner}`
    disable();
}

function win(){
    for(let pattern of pat)
        {
            let val1=boxes[pattern[0]].innerText;
            let val2=boxes[pattern[1]].innerText;
            let val3=boxes[pattern[2]].innerText;
            if(val1 != "" && val2 != "" && val3 != "")
                {
                    if(val1 === val2 && val2 === val3)
                        {
                            console.log("winner",val1);
                            showwinner(val1);

                        }
                }
        }
}

boxes.forEach(box => {
    box.addEventListener("click", ()=>{
        console.log("box was clicked")
        if(turno)
        {
            box.innerText="O";
            box.disabled=true;
            turno=false;
        }
        else
        {
            box.innerText="X";
            box.disabled=true;
            turno=true;
        }
        win();
    })
});

reset.addEventListener("click",()=>{
    res();
})
newg.addEventListener("click",()=>{
    res();
})


