chrome.runtime.onMessage.addListener(request => {
    if (request == "enable") {
      removeLabel();
      createLabel();
    } 
    if(request == "disable") {
      removeLabel();
    }
}); 

const DOMIdName:string = 'dom-node-size-label';
const createLabel = () => {
  const element:HTMLDivElement = document.createElement('div');
  const nodeSize:number = document.querySelectorAll('*').length;
  

  element.id = DOMIdName;
  element.setAttribute('style', 'position: fixed; z-index: 10000; top: 0; left: 0; padding: 2px; font-size: 16px; color: #fff; background-color: #000;')

  element.textContent = `Node size : ${nodeSize}`;
  document.body.appendChild(element);
}

const removeLabel = () => {
  const element:HTMLElement | null = document.getElementById(DOMIdName);
  if(element !== null) element.remove();
}
