document.querySelector(".btn").addEventListener("click",function()
{
    var c;
    c=Math.random();//gives random number between 1 to 0

    c=c.toString(16);//convert it to hexadecimal

    c=c.substring(2,8);//to remove 0. from the start

    var c1="#"+c;//to add hash at the start

    document.body.style.backgroundColor=c1;

})