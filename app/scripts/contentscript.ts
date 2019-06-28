chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request == "enable") {
    enable();
  } 
  if(request == "disable") {
    disable();
  }
}); 

const DOMIdName:string = 'dom-node-size-label';
const enable = () => {
  const element:HTMLDivElement = document.createElement('div');
  const nodeSize:number = document.querySelectorAll('*').length;

  element.id = DOMIdName;
  element.setAttribute('style', 'position: fixed; z-index: 10000; top: 0; left: 0; padding: 2px; font-size: 16px; color: #fff; background-color: #000;')

  element.textContent = `Node size : ${nodeSize}`;
  document.body.appendChild(element);
}

const disable = () => {
  const element:HTMLElement | null = document.getElementById(DOMIdName);
  if(element !== null) element.remove();
}