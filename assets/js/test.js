document.body.addEventListener("mousemove", getClickPosition, false);


function getClickPosition (e) { //слушатель события движения мыши
 var picture = document.querySelectorAll(".thing");
 var parentPosition = getPosition(e.currentTarget);

 picture.forEach((pic) => {

     var xPosition = e.clientX - parentPosition.x + (pic.clientWidth / 2);
     var yPosition = e.clientY - parentPosition.y + (pic.clientHeight / 1);
     pic.style.left = xPosition + "px";
     pic.style.top = yPosition + "px";

 });
 // var xPosition = e.clientX - parentPosition.x - (picture.clientWidth / 2);
 // var yPosition = e.clientY - parentPosition.y - (picture.clientHeight / 2);
 // picture.style.left = xPosition + 40 + "px";
 // picture.style.top = yPosition + 40 + "px";
}

function getPosition(element) { //расчёт позиции элемента
 var xPos = 0;
 var yPos = 0;
 while (element) {
  if (element.tagName == "BODY") {
   var xScroll = element.scrollLeft || document.documentElement.scrollLeft;
   var yScroll = element.scrollTop || document.documentElement.scrollTop;
   xPos += (element.offsetLeft - xScroll + element.clientLeft);
   yPos += (element.offsetTop - yScroll + element.clientTop);
  } 
  else {
   xPos += (element.offsetLeft - element.scrollLeft + element.clientLeft);
   yPos += (element.offsetTop - element.scrollTop + element.clientTop);
  }
  element = element.offsetParent;
 }
 return { x: xPos, y: yPos };
}