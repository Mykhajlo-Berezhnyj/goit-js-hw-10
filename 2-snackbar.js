import{i as F,a as c,b as m}from"./assets/hello-BzYi4Jmw.js";/* empty css                      */import{i as t}from"./assets/vendor-Cag9cCPy.js";const u="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='22'%20height='20'%20fill='none'%3e%3cpath%20fill='%23fff'%20d='M1.75%2010a8.25%208.25%200%200%201%2012.375-7.146.75.75%200%200%200%20.75-1.299A9.75%209.75%200%201%200%2019.75%2010a.75.75%200%201%200-1.5%200%208.25%208.25%200%201%201-16.5%200Z'/%3e%3cpath%20fill='%23fff'%20d='M21.031%203.031a.752.752%200%200%200-.531-1.282.751.751%200%200%200-.531.22L10%2011.939%206.031%207.97a.75.75%200%201%200-1.062%201.062l4.5%204.5a.75.75%200%200%200%201.062%200l10.5-10.5Z'/%3e%3c/svg%3e",r={form:document.querySelector(".form"),delayInput:document.querySelector('input[type="number"]'),radioButtons:document.querySelectorAll('input[name="state"]'),btnCreate:document.querySelector('button[type="submit"]')};setTimeout(()=>{t.show({title:"Hello",message:"Welcome to Snackbar!",titleColor:"#FFFFFF",messageColor:"#FFFFFF",position:"bottomRight",backgroundColor:"#0099FF",iconUrl:F})},1e3);r.form.addEventListener("submit",d);function d(l){l.preventDefault();const i=document.querySelector('input[name="state"]:checked'),o=Number(r.delayInput.value);if(!i||o<0){t.show({title:"Caution",message:"You forgot important data",titleColor:"#FFFFFF",messageColor:"#FFFFFF",position:"topRight",backgroundColor:"#FFA000",iconUrl:c});return}const a=i.value,s=new Promise((e,n)=>{setTimeout(()=>a==="fulfilled"?e(o):n(o),o)});r.delayInput.value="",r.radioButtons.forEach(e=>{e.checked=!1}),s.then(e=>{t.show({title:"OK",message:`✅ Fulfilled promise in ${o}ms`,titleColor:"#FFFFFF",messageColor:"#FFFFFF",position:"topRight",backgroundColor:" #326101",iconUrl:u})}).catch(e=>{t.show({title:"Error",message:`❌ Rejected promise in ${o}ms`,titleColor:"#FFFFFF",messageColor:"#FFFFFF",position:"topRight",backgroundColor:"#EF4040",iconUrl:m})})}
//# sourceMappingURL=2-snackbar.js.map
