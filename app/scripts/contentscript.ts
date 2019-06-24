// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

const element:HTMLDivElement = document.createElement('div');
const nodeSize:number = document.querySelectorAll('*').length;

element.id = 'dom-node-size-label';
element.setAttribute('style', 'position: fixed; z-index: 1000; top: 0; left: 0; padding: 2px; font-size: 16px; color: #fff; background-color: #000;')

element.textContent = `Node size : ${nodeSize}`;
document.body.appendChild(element);