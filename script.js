var arrayimage = ["Mom.jpeg","Dad.jpeg","Boy.jpeg"]
var arrayname = ["Priya","Kishore","Sreej"]
var c = 0;
var i = 0;
function show()
{ 
document.getElementById("heading2").innerHTML = arrayname[c]
document.getElementById("image1").innerHTML = arrayimage [i]
c = c+1;
i = i +1;
}
