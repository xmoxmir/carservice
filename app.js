const slides=[...document.querySelectorAll('.slide')],dotsWrap=document.querySelector('#dots'),next=document.querySelector('#next'),prev=document.querySelector('#prev'),progress=document.querySelector('#timerProgress');let current=0,timer,animation;
slides.forEach((_,i)=>{const d=document.createElement('button');d.className='dot'+(i===0?' active':'');d.setAttribute('aria-label',`اسلاید ${i+1}`);d.addEventListener('click',()=>show(i,true));dotsWrap.appendChild(d)});
const dots=[...document.querySelectorAll('.dot')];
function runProgress(){cancelAnimationFrame(animation);progress.style.width='0%';const start=performance.now();const step=now=>{const pct=Math.min((now-start)/8000*100,100);progress.style.width=`${pct}%`;if(pct<100)animation=requestAnimationFrame(step)};animation=requestAnimationFrame(step)}
function show(index,manual=false){current=(index+slides.length)%slides.length;slides.forEach((s,i)=>s.classList.toggle('is-active',i===current));dots.forEach((d,i)=>d.classList.toggle('active',i===current));runProgress();if(manual)restart()}
function restart(){clearInterval(timer);timer=setInterval(()=>show(current+1),8000)}
next.addEventListener('click',()=>show(current+1,true));prev.addEventListener('click',()=>show(current-1,true));restart();runProgress();
const select=document.querySelector('#serviceSelect');document.querySelectorAll('.service-card').forEach(card=>card.addEventListener('click',()=>{select.value=card.dataset.service}));
document.querySelector('#requestForm').addEventListener('submit',e=>{e.preventDefault();const service=select.value;if(!service){select.focus();return}alert(`درخواست «${service}» آماده ثبت است. این بخش را می‌توان به API یا واتساپ متصل کرد.`)});
