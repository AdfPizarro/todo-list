(()=>{"use strict";let e=[];e=null===localStorage.getItem("projectList")?[]:JSON.parse(localStorage.getItem("projectList"));const t=e=>({name:e}),n=e=>{const t=document.createElement("div");t.setAttribute("class","d-flex flex-column");const n=document.createElement("h4");return n.textContent=e.name,t.appendChild(n),t};function o(){let t=document.createElement("div");for(let o=0;o<e.length;o+=1){const c=n(e[o].name);t.appendChild(c)}return t}function c(){const t=document.querySelector("#taskProject");t.innerHTML="";const n=document.createElement("Option");n.textContent="Default",t.appendChild(n);for(let n=0;n<e.length;n+=1){const o=document.createElement("Option");o.textContent=e[n].name.name,t.appendChild(o)}}let r=[];r=null===localStorage.getItem("taskList")?[]:JSON.parse(localStorage.getItem("taskList"));const a=e=>{const t=document.createElement("div");t.setAttribute("class","d-flex flex-column");const n=document.createElement("h2"),o=document.createElement("div");o.setAttribute("class","d-flex justify-content-between");const c=document.createElement("p"),r=document.createElement("p"),a=document.createElement("p");return n.textContent=e.name,c.textContent=e.description,r.textContent=e.project,a.textContent=e.dueDate,o.appendChild(c),o.appendChild(r),o.appendChild(a),t.appendChild(n),t.appendChild(o),t};function l(){let e=document.createElement("div");for(let t=0;t<r.length;t+=1){const n=a(r[t]);e.appendChild(n)}return e}document.querySelector("#taskSubmit").addEventListener("click",(()=>{const e=document.querySelector("#taskContainer"),t=document.getElementById("taskName").value,n=document.getElementById("taskDescription").value,o=document.getElementById("taskPriority").value,c=document.getElementById("taskProject").value,a=document.getElementById("taskDueDate").value;e.innerHTML="",e.append(function(e,t,n,o,c){const a=((e,t,n,o,c)=>({name:e,description:t,priority:n,project:o,dueDate:c}))(e,t,n,o,c);return console.log(a),r.push(a),localStorage.setItem("taskList",JSON.stringify(r)),l()}(t,n,o,c,a))})),document.querySelector("#projectSubmit").addEventListener("click",(()=>{const n=document.querySelector("#projectContainer"),r=document.getElementById("projectName").value;n.innerHTML="",n.append(function(n){const c={name:t(n)};return e.push(c),localStorage.setItem("projectList",JSON.stringify(e)),o()}(r)),c()})),window.addEventListener("load",(function(){const e=document.querySelector("#projectContainer"),t=document.querySelector("#taskContainer");t.innerHTML="",e.innerHTML="",e.append(o()),t.append(l()),c()}))})();