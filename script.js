

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



const Btn = document.getElementById("Btn");

Btn.addEventListener("click", function() {

ctx.clearRect(0, 0, canvas.width, canvas.height);

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

const incidentAngel = document.getElementById("incidentAngle");
const Ref1 = document.getElementById("mu 1");
const Ref2 = document.getElementById("mu 2");
    // console.log(incidentAngel.value);
    // console.log(Ref1.value);
    // console.log(Ref2.value);
    
    
const SinOfRefractedAngle = Ref1.value/Ref2.value * Math.sin(incidentAngel.value * (Math.PI / 180));

console.log(SinOfRefractedAngle);

const ref = Math.asin(SinOfRefractedAngle)*180/Math.PI;


console.log(ref);

const slopeOfIncidence = Math.tan((90 - incidentAngel.value) * (Math.PI / 180))
console.log(slopeOfIncidence);
const slopeOfRefraction = Math.tan((90 - ref) * (Math.PI / 180))
console.log(slopeOfRefraction);

const x = 400

const yi = slopeOfIncidence * x
console.log(yi);


const yr = slopeOfRefraction * x
console.log(yr);

if(incidentAngel.value < 0 || incidentAngel.value > 90) {
    alert("Please enter a valid angle of incidence between 0 and 90 degrees.");
    return;
}

if(ref < 0 || ref > 90) {
    alert("the refracted angle is greater than 90 or less than 0");
    return;
}


ctx.strokeStyle = "cyan";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(CentreX - x, CentreY - yi);
ctx.lineTo(CentreX, CentreY);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(CentreX, CentreY);
ctx.lineTo(CentreX + x, CentreY + yr);
ctx.stroke();

function drawArrowhead(x, y, angle) {
    const size = 30;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - size * Math.cos(angle - 0.5), y - size * Math.sin(angle - 0.6));
    ctx.lineTo(x - size * Math.cos(angle + 0.5), y - size * Math.sin(angle + 0.4));
    ctx.closePath();
    ctx.fillStyle = "cyan";
    ctx.fill();
}

if(incidentAngel.value > 0 && incidentAngel.value <= 10) {
drawArrowhead(CentreX - x/27, CentreY - yi/27, Math.atan2(CentreY + yi, CentreX + x));
}
if(ref > 0 && ref <= 10) {
drawArrowhead(CentreX + x/27, CentreY + yr/27, Math.atan2(CentreY + yr, CentreX + x));
}
if(incidentAngel.value > 10 && incidentAngel.value <= 30) {
drawArrowhead(CentreX - x/10, CentreY - yi/10, Math.atan2(CentreY + yi, CentreX + x));
}
if(ref > 10 && ref <= 30) {
drawArrowhead(CentreX + x/5, CentreY + yr/5, Math.atan2(CentreY + yr, CentreX + x));
}
if(incidentAngel.value > 30 && incidentAngel.value <= 60) {
drawArrowhead(CentreX - x/5, CentreY - yi/5, Math.atan2(CentreY + yi, CentreX + x));
}
if(ref > 30 && ref <= 60) {
drawArrowhead(CentreX + x/4, CentreY + yr/4, Math.atan2(CentreY + yr, CentreX + x));
}
if(incidentAngel.value > 60 && incidentAngel.value <= 90) {
drawArrowhead(CentreX - x/2, CentreY - yi/2, Math.atan2(CentreY + yi, CentreX + x));
}
if(ref > 60 && ref <= 90) {
drawArrowhead(CentreX + x/2, CentreY + yr/2, Math.atan2(CentreY + yr, CentreX + x));
}

ctx.fillStyle = "black";
ctx.font = "16px Arial";
ctx.fillText("Medium 1", CentreX + 100, CentreY - 100);
ctx.fillText("Medium 2", CentreX + 100, CentreY + 100);
ctx.fillText("i", CentreX - 13, CentreY - 20);
ctx.fillText("r", CentreX + 10, CentreY + 45);


// Draw angle of incidence arc
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.arc(
    CentreX,
    CentreY,
    50,
    Math.PI * 3 / 2 ,                         
    Math.PI * 3/ 2 - incidentAngel.value * (Math.PI / 180), 
    true
);
ctx.stroke();

// Draw angle of refraction arc
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.arc(
    CentreX,
    CentreY,
    60,
    Math.PI / 2,                           // normal line angle
    Math.PI / 2 - ref * (Math.PI / 180) ,   
    true
);
ctx.stroke();



})




