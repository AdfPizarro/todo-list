(()=>{"use strict";const e=[],t=e=>{const t=document.createElement("div");t.setAttribute("class","d-flex flex-column");const n=document.createElement("h4");return n.textContent=e.name,t.appendChild(n),t},n=[];document.querySelector("#taskSubmit").addEventListener("click",(()=>{!function(e,t,o,d,l){const u=c(e,t,o,d,l);n.push(u)}(document.getElementById("taskName").value,document.getElementById("taskDescription").value,document.getElementById("taskPriority").value,document.getElementById("taskProject").value,document.getElementById("taskDueDate").value),function(e){const t=document.querySelector("#taskView");t.innerHTML="";for(let n=0;n<e.length;n+=1){const c=o(e[n]);t.appendChild(c)}}(n)}));const c=(e,t,n,c,o)=>({name:e,description:t,priority:n,project:c,dueDate:o});document.querySelector("#projectSubmit").addEventListener("click",(()=>{const n=document.getElementById("projectName").value,c=document.querySelector("#projectContainer");c.innerHTML="",c.append(function(n){const c=(e=>({name:e}))(n);e.push(c);let o=document.createElement("div");for(let n=0;n<e.length;n+=1){const c=t(e[n]);o.appendChild(c)}return o}(n))}));const o=e=>{const t=document.createElement("div");t.setAttribute("class","d-flex flex-column");const n=document.createElement("h2"),c=document.createElement("div");c.setAttribute("class","d-flex justify-content-between");const o=document.createElement("p"),d=document.createElement("p");return n.textContent=e.name,o.textContent=e.description,d.textContent=e.dueDate,c.appendChild(o),c.appendChild(d),t.appendChild(n),t.appendChild(c),t}})();