const box=document.getElementById("lightbox");document.querySelectorAll(".zoom").forEach(b=>b.addEventListener("click",()=>{const i=b.querySelector("img"),v=box.querySelector("img");v.src=i.src;v.alt=i.alt;box.showModal()}));document.getElementById("close").onclick=()=>box.close();box.addEventListener("click",e=>{if(e.target===box)box.close()});document.querySelectorAll("input[data-col]").forEach(i=>i.addEventListener("input",()=>{for(let j=0;j<3;j++){const a=[...document.querySelectorAll('input[data-col="'+j+'"]')];document.getElementById("b-total"+j).textContent=a.every(v=>v.value!==""&&v.checkValidity())?a.reduce((n,v)=>n+Number(v.value),0)+"／30":"未完成"}}));function filterResources(){const q=document.getElementById("resource-q").value.toLowerCase().trim(),type=document.getElementById("resource-type").value;let n=0;document.querySelectorAll(".resource").forEach(r=>{r.hidden=!(r.textContent.toLowerCase().includes(q)&&(type==="all"||r.dataset.type===type));if(!r.hidden)n++});document.getElementById("resource-count").textContent=n+" 筆資源"}document.getElementById("resource-q").addEventListener("input",filterResources);document.getElementById("resource-type").addEventListener("change",filterResources);let oldDetails=[];window.addEventListener("beforeprint",()=>{oldDetails=[...document.querySelectorAll("details")].map(d=>[d,d.open]);oldDetails.forEach(([d])=>d.open=true)});window.addEventListener("afterprint",()=>oldDetails.forEach(([d,o])=>d.open=o));

// Keep deep links usable when their chapter is collapsed.
function revealTarget(hash){
  if(!hash||hash==="#")return;
  let id;try{id=decodeURIComponent(hash.slice(1))}catch{return}
  const target=document.getElementById(id);if(!target)return;
  let el=target;while(el){if(el.tagName==="DETAILS")el.open=true;el=el.parentElement}
}
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const hash=a.getAttribute('href');let target;try{target=document.getElementById(decodeURIComponent(hash.slice(1)))}catch{return}if(!target)return;e.preventDefault();revealTarget(hash);try{history.replaceState(null,'',hash)}catch{}requestAnimationFrame(()=>target.scrollIntoView({behavior:'instant',block:'start'}))});
window.addEventListener("hashchange",()=>revealTarget(location.hash));
revealTarget(location.hash);
if(location.hash)requestAnimationFrame(()=>document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView());
try{if(window.self!==window.top)document.documentElement.classList.add("is-embedded")}catch{}
document.getElementById("expand-all").addEventListener("click",()=>document.querySelectorAll("details.topic").forEach(d=>d.open=true));
document.getElementById("collapse-all").addEventListener("click",()=>document.querySelectorAll("details.topic").forEach(d=>d.open=false));


// Update the current chapter from the document position, without changing the URL.
(() => {
 const navigation=document.querySelector('nav');
 const chapters=[...document.querySelectorAll('main > section.major, main > details.topic')];
 const titles=['快速掌握','操作技巧與使用限制','搜索應用與常見錯誤','設備評估與採購','影片與文件資源庫','完整章節與來源'];
 const links=[...navigation.querySelectorAll('.navinner a[href^="#"]')];
 const title=document.getElementById('reading-chapter');
 const subsection=document.getElementById('reading-subheading');
 const count=document.getElementById('reading-count');
 let scheduled=false;
 function update(){
  scheduled=false;
  const marker=navigation.offsetHeight+24;
  let index=0;
  for(let i=0;i<chapters.length;i++){
   if(chapters[i].getBoundingClientRect().top<=marker)index=i;
  }
  const chapter=chapters[index];
  let currentHeading='';
  const expanded=chapter.tagName!=='DETAILS'||chapter.open;
  if(expanded){
   for(const heading of chapter.querySelectorAll('h3')){
    const rect=heading.getBoundingClientRect();
    if(heading.getClientRects().length&&rect.height>0&&rect.top<=marker+Math.min(100,window.innerHeight*0.15))currentHeading=heading.textContent.trim();
   }
  }
  title.textContent=titles[index];
  subsection.textContent=currentHeading;
  subsection.title=currentHeading;
  count.textContent=String(index+1).padStart(2,'0')+'／'+String(chapters.length).padStart(2,'0');
  let active=chapter.id;
  for(const id of ['bullard','b-worksheet']){
   const target=document.getElementById(id);
   if(!target||!expanded||!chapter.contains(target))continue;
   const rect=target.getBoundingClientRect();
   if(rect.top<=marker&&rect.bottom>marker)active=id;
  }
  links.forEach(link=>{
   if(link.getAttribute('href')==='#'+active)link.setAttribute('aria-current','location');
   else link.removeAttribute('aria-current');
  });
 }
 function schedule(){if(!scheduled){scheduled=true;requestAnimationFrame(update)}}
 window.addEventListener('scroll',schedule,{passive:true});
 window.addEventListener('resize',schedule);
 document.addEventListener('toggle',schedule,true);
 window.addEventListener('hashchange',schedule);
 if('ResizeObserver' in window){
  const observer=new ResizeObserver(()=>{
   document.documentElement.style.setProperty('--reading-nav-height',navigation.offsetHeight+'px');
   schedule();
  });
  observer.observe(navigation);observer.observe(document.querySelector('main'));
 }
 schedule();
})();
