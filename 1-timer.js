import{i as p,a as y}from"./assets/hello-C3GKaUyz.js";/* empty css                      */import{i,f as b}from"./assets/vendor-Cag9cCPy.js";let o,l,s;const d=document.querySelector(".timer"),r=document.querySelector("button[data-start]"),u=document.getElementById("datetime-picker"),g=document.querySelector("span[data-days]"),v=document.querySelector("span[data-hours]"),C=document.querySelector("span[data-minutes]"),D=document.querySelector("span[data-seconds]");setTimeout(()=>{i.show({title:"Hello",message:"Welcome to Timer!",titleColor:"#FFFFFF",messageColor:"#FFFFFF",position:"bottomRight",backgroundColor:"#0099FF",iconUrl:p})},1e3);const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){o=t[0],o&&o<=new Date?(r.setAttribute("disabled","true"),i.show({title:"Error!",message:"Please choose a date in the future",titleColor:"#FFFFFF",messageColor:"#FFFFFF",position:"topRight",backgroundColor:"#EF4040",position:"topRight",iconUrl:y})):r.removeAttribute("disabled")}};document.addEventListener("DOMContentLoaded",function(){b("#datetime-picker",S)});r.addEventListener("click",q);function q(){if(!o)return;u.disabled=!0;let e=o-new Date;r.setAttribute("disabled","true"),l=setInterval(()=>{if(s=o-new Date,s<=0&&e>0){clearInterval(l),u.disabled=!1,d.querySelectorAll(".value, .label").forEach(c=>{c.classList.remove("active")}),i.show({title:"Warning!",message:"Час до даної події минув!",titleColor:"#bd34fe",messageColor:"#25acda",position:"center",backgroundColor:"#d4cec7f3"});return}E()},1e3)}function w(t){const m=Math.floor(t/864e5),F=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:m,hours:F,minutes:f,seconds:h}}function n(t){return t.toString().padStart(2,"0")}function E(t){d.querySelectorAll(".value, .label").forEach(a=>{a.classList.add("active")});const e=w(s);g.textContent=n(e.days),v.textContent=n(e.hours),C.textContent=n(e.minutes),D.textContent=n(e.seconds)}
//# sourceMappingURL=1-timer.js.map
