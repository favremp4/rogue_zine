export function DragElement(element) {
  element.style.position = "absolute";
  element.style.cursor = "move"
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  element.onmousedown = startDrag;

  function startDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = endDrag;
    document.onmousemove = moveElement;
  }

  function moveElement(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    element.style.top = element.offsetTop - pos2 + "px";
    element.style.left = element.offsetLeft - pos1 + "px";
  }

  function endDrag() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
