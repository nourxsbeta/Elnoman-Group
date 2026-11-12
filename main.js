const m=document.getElementById('menu'),t=document.querySelector('.tgl');
t.addEventListener('click',()=>{const o=m.classList.toggle('open');t.setAttribute('aria-expanded',o)});
document.querySelectorAll('.has-sub>button').forEach(b=>b.addEventListener('click',()=>{const p=b.parentElement,o=p.classList.toggle('open');b.setAttribute('aria-expanded',o)}));
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.open').forEach(x=>x.classList.remove('open'))});
document.querySelectorAll('.trk').forEach(k=>[...k.children].forEach(c=>{const d=c.cloneNode(true);d.setAttribute('aria-hidden','true');d.querySelectorAll('a').forEach(a=>a.tabIndex=-1);k.appendChild(d)}));
