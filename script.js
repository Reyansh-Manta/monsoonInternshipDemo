

const canvas = document.getElementById(`canvas`)


const ctx = canvas.getContext(`2d`)

const CentreX = canvas.width / 2
const CentreY = canvas.height / 2

ctx.strokeStyle = `black`
ctx.lineWidth = 2

ctx.beginPath()
ctx.moveTo(0, CentreY)
ctx.lineTo(canvas.width, CentreY)
ctx.stroke()

ctx.setLineDash([5, 5])
ctx.beginPath()
ctx.moveTo(CentreX, 0)
ctx.lineTo(CentreX, canvas.height)
ctx.stroke()
ctx.setLineDash([])




// for angle of refraction







const Btn = document.getElementById("Btn");

Btn.addEventListener("click", function() {

const incidentAngel = document.getElementById("incidentAngle");
const Ref1 = document.getElementById("mu 1");
const Ref2 = document.getElementById("mu 2");
    
    
const MSinOfRefractedAngle = Ref1.value/Ref2.value * Math.sin(incidentAngel.value * (Math.PI / 180));

console.log(MSinOfRefractedAngle);

const ref = Math.asin(MSinOfRefractedAngle);


console.log(ref);

const slopeOfIncidence = Math.tan((incidentAngel + 90) * (Math.PI / 180))
const slopeOfRefraction = Math.tan((ref + 90) * (Math.PI / 180))

const x = 200

const yi = slopeOfIncidence * x

const yr = slopeOfRefraction * x



ctx.strokeStyle = "cyan";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(CentreX - 200, CentreY - yi);
ctx.lineTo(CentreX, CentreY);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(CentreX, CentreY);
ctx.lineTo(CentreX + 200, CentreY + yr);
ctx.stroke();

function drawArrowhead(x, y, angle) {
    const size = 30;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - size * Math.cos(angle - 0.3), y - size * Math.sin(angle - 0.3));
    ctx.lineTo(x - size * Math.cos(angle + 0.3), y - size * Math.sin(angle + 0.3));
    ctx.closePath();
    ctx.fillStyle = "cyan";
    ctx.fill();
}

drawArrowhead(CentreX - 100, CentreY - 75, Math.atan2(150, 200));


drawArrowhead(CentreX + 95, CentreY + 125, Math.atan2(200, 150));

ctx.fillStyle = "black";
ctx.font = "16px Arial";
ctx.fillText("Medium 1", CentreX + 100, CentreY - 100);
ctx.fillText("Medium 2", CentreX + 100, CentreY + 100);
ctx.fillText("i", CentreX - 13, CentreY - 20);
ctx.fillText("r", CentreX + 10, CentreY + 45);


// to be changed to a proper code to change on every calue of theta by implementing a python script

ctx.beginPath();
ctx.arc(CentreX, CentreY, 40, 4.7, 10.1, true); // angle i
ctx.stroke();

ctx.beginPath();
ctx.arc(CentreX, CentreY, 30, 59999, Math.PI / 2, false); // angle r
ctx.stroke();



})




