(()=>{"use strict";let t=[];t=null===localStorage.getItem("projectList")?[]:JSON.parse(localStorage.getItem("projectList"));const e=t=>({name:t}),n=t=>{const e=document.createElement("div");e.setAttribute("class","d-flex flex-column");const n=document.createElement("a");return n.setAttribute("class","projectButton text-decoration-none"),n.setAttribute("href","#"),n.textContent=t.name,e.appendChild(n),e};function o(){const e=document.createElement("div"),o=document.createElement("a");o.setAttribute("class","projectButton text-decoration-none"),o.setAttribute("href","#"),o.textContent="Default",e.appendChild(o);for(let o=0;o<t.length;o+=1){const c=n(t[o].name);e.appendChild(c)}return e}function c(){const e=document.querySelector("#taskProject");e.innerHTML="";const n=document.createElement("Option");n.textContent="Default",e.appendChild(n);for(let n=0;n<t.length;n+=1){const o=document.createElement("Option");o.textContent=t[n].name.name,e.appendChild(o)}}let a=[];a=null===localStorage.getItem("taskList")?[]:JSON.parse(localStorage.getItem("taskList"));const d=(t,e)=>{const n=document.createElement("tr");n.setAttribute("id",`tr${e}`);const o=document.createElement("td"),c=document.createElement("td"),a=document.createElement("td"),d=document.createElement("td"),r=document.createElement("td"),l=document.createElement("button"),i=document.createElement("button"),m=document.createElement("select"),s=document.createElement("option"),u=document.createElement("option"),p=document.createElement("option");s.textContent="Low",u.textContent="Normal",p.textContent="Urgent",s.setAttribute("value","Low"),u.setAttribute("value","Normal"),p.setAttribute("value","Urgent"),m.appendChild(s),m.appendChild(u),m.appendChild(p),m.value=t.priority,m.setAttribute("class","form-select changePriority"),m.setAttribute("id",`changePriority${e}`),o.textContent=t.name,c.textContent=t.description,a.appendChild(m),d.textContent=t.dueDate,i.setAttribute("id",`dlt${e}`),i.setAttribute("class","mx-2 btn btn-danger deleteTask"),i.textContent="Delete";const C=t.completed?"btn-success":"btn-danger",h=t.completed?"Completed":"Pending";return l.setAttribute("class",`completTask btn ${C}`),l.setAttribute("id",`btnCompleted${e}`),l.textContent=h,r.appendChild(l),n.appendChild(o),n.appendChild(c),n.appendChild(a),n.appendChild(d),n.appendChild(r),r.appendChild(i),n};function r(t){const e=document.createElement("table"),n=document.createElement("thead"),o=document.createElement("tr"),c=document.createElement("th"),r=document.createElement("th"),l=document.createElement("th"),i=document.createElement("th"),m=document.createElement("th"),s=document.createElement("tbody");s.setAttribute("id","tableBody"),e.setAttribute("class","table"),n.setAttribute("class","thead-dark"),c.textContent="Name",r.textContent="Description",l.textContent="Priority",i.textContent="Due date",m.textContent="Options",o.appendChild(c),o.appendChild(r),o.appendChild(l),o.appendChild(i),o.appendChild(m),n.appendChild(o),e.appendChild(n);for(let e=0;e<a.length;e+=1)if(a[e].project===t||"all"===t){const t=d(a[e],e);s.appendChild(t)}return e.appendChild(s),e}function l(){document.querySelectorAll(".completTask").forEach((t=>{t.addEventListener("click",(()=>{!function(t){if(a[t].completed){a[t].completed=!1;const e=document.getElementById(`btnCompleted${t}`);e.setAttribute("class","completTask btn btn-danger"),e.textContent="Pending"}else{a[t].completed=!0;const e=document.getElementById(`btnCompleted${t}`);e.setAttribute("class","completTask btn btn-success"),e.textContent="Completed"}localStorage.setItem("taskList",JSON.stringify(a))}(parseInt(t.id.match(/\d+/gm),10))}))}))}function i(){document.querySelectorAll(".changePriority").forEach((t=>{t.addEventListener("change",(()=>{var e,n;e=parseInt(t.id.match(/\d+/gm),10),n=t.value,a[e].priority=n,localStorage.setItem("taskList",JSON.stringify(a))}))}))}function m(){document.querySelectorAll(".deleteTask").forEach((t=>{t.addEventListener("click",(()=>{!function(t){const e=document.getElementById(`tr${t}`);document.getElementById("tableBody").removeChild(e),a.splice(t,1),localStorage.setItem("taskList",JSON.stringify(a))}(parseInt(t.id.match(/\d+/gm),10))}))}))}function s(){document.querySelectorAll(".projectButton").forEach((t=>{t.addEventListener("click",(()=>{const e=document.querySelector("#taskContainer");e.innerHTML="",e.append(r(t.textContent)),l(),m(),i()}))})),l(),m(),i()}document.querySelector("#taskSubmit").addEventListener("click",(()=>{const t=document.querySelector("#taskContainer"),e=document.getElementById("taskName").value,n=document.getElementById("taskDescription").value,o=document.getElementById("taskPriority").value,c=document.getElementById("taskProject").value,d=document.getElementById("taskDueDate").value;t.innerHTML="",t.append(function(t,e,n,o,c){const d=((t,e,n,o,c,a)=>({name:t,description:e,priority:n,project:o,dueDate:c,completed:!1}))(t,e,n,o,c);return a.push(d),localStorage.setItem("taskList",JSON.stringify(a)),r("all")}(e,n,o,c,d)),s()})),document.querySelector("#projectSubmit").addEventListener("click",(()=>{const n=document.querySelector("#projectContainer"),a=document.getElementById("projectName").value;n.innerHTML="",n.append(function(n){const c={name:e(n)};return t.push(c),localStorage.setItem("projectList",JSON.stringify(t)),o()}(a)),c(),s()})),window.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelector("#projectContainer"),e=document.querySelector("#taskContainer");e.innerHTML="",t.innerHTML="",t.append(o()),e.append(r("all")),c(),s()}))})();