const box=document.getElementById("lightbox");document.querySelectorAll(".zoom").forEach(b=>b.addEventListener("click",()=>{const i=b.querySelector("img"),v=box.querySelector("img");v.src=i.src;v.alt=i.alt;box.showModal()}));document.getElementById("close").onclick=()=>box.close();box.addEventListener("click",e=>{if(e.target===box)box.close()});document.getElementById("print").onclick=()=>window.print();document.querySelectorAll("input[data-col]").forEach(i=>i.addEventListener("input",()=>{for(let j=0;j<3;j++){const a=[...document.querySelectorAll('input[data-col="'+j+'"]')];document.getElementById("b-total"+j).textContent=a.every(v=>v.value!==""&&v.checkValidity())?a.reduce((n,v)=>n+Number(v.value),0)+"／30":"未完成"}}));function filterResources(){const q=document.getElementById("resource-q").value.toLowerCase().trim(),type=document.getElementById("resource-type").value;let n=0;document.querySelectorAll(".resource").forEach(r=>{r.hidden=!(r.textContent.toLowerCase().includes(q)&&(type==="all"||r.dataset.type===type));if(!r.hidden)n++});document.getElementById("resource-count").textContent=n+" 筆資源"}document.getElementById("resource-q").addEventListener("input",filterResources);document.getElementById("resource-type").addEventListener("change",filterResources);let oldDetails=[];window.addEventListener("beforeprint",()=>{oldDetails=[...document.querySelectorAll("details")].map(d=>[d,d.open]);oldDetails.forEach(([d])=>d.open=true)});window.addEventListener("afterprint",()=>oldDetails.forEach(([d,o])=>d.open=o));

// Keep deep links usable when their chapter is collapsed.
function revealTarget(hash){
  if(!hash||hash==="#")return;
  let id;try{id=decodeURIComponent(hash.slice(1))}catch{return}
  const target=document.getElementById(id);if(!target)return;
  let el=target;while(el){if(el.tagName==="DETAILS")el.open=true;el=el.parentElement}
}
document.addEventListener("click",e=>{const a=e.target.closest('a[href^="#"]');if(a)revealTarget(a.getAttribute("href"))});
window.addEventListener("hashchange",()=>revealTarget(location.hash));
revealTarget(location.hash);
if(location.hash)requestAnimationFrame(()=>document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView());
try{if(window.self!==window.top)document.documentElement.classList.add("is-embedded")}catch{}
document.getElementById("expand-all").addEventListener("click",()=>document.querySelectorAll("details.topic").forEach(d=>d.open=true));
document.getElementById("collapse-all").addEventListener("click",()=>document.querySelectorAll("details.topic").forEach(d=>d.open=false));
