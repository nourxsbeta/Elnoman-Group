const m=document.getElementById('menu'),t=document.querySelector('.tgl');
t.addEventListener('click',()=>{const o=m.classList.toggle('open');t.setAttribute('aria-expanded',o)});
document.querySelectorAll('.has-sub>button').forEach(b=>b.addEventListener('click',()=>{const p=b.parentElement,o=p.classList.toggle('open');b.setAttribute('aria-expanded',o)}));
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.open').forEach(x=>x.classList.remove('open'))});
document.querySelectorAll('.trk').forEach(k=>[...k.children].forEach(c=>{const d=c.cloneNode(true);d.setAttribute('aria-hidden','true');d.querySelectorAll('a').forEach(a=>a.tabIndex=-1);k.appendChild(d)}));
/* Count-up for stats: reads the number already written in the HTML (e.g. "500+"), so you only edit the text */
(()=>{
const els=document.querySelectorAll('.stats .n');
if(!els.length)return;
const fmt=new Intl.NumberFormat(document.documentElement.lang||'en');
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
els.forEach(el=>{
  const txt=el.textContent.trim(),m=txt.match(/^(\D*)([\d,.]+)(.*)$/);
  if(!m)return;
  const pre=m[1],suf=m[3],end=parseFloat(m[2].replace(/,/g,''));
  if(!end)return;
  const vis=document.createElement('span'),sr=document.createElement('span');
  vis.setAttribute('aria-hidden','true');sr.className='vh';sr.textContent=txt;
  el.textContent='';el.append(vis,sr);
  const set=v=>{vis.textContent=pre+fmt.format(Math.round(v))+suf};
  set(reduce?end:0);
  if(reduce)return;
  const run=()=>{const t0=performance.now(),d=1800;
    (function f(t){const p=Math.min((t-t0)/d,1);set(end*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)};
  new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){o.disconnect();run()}},{threshold:.4}).observe(el);
});
})();
