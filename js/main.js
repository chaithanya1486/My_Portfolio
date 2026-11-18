(()=>{
const C=window.CONTENT,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches,TOUCH=matchMedia('(hover:none)').matches;
const acc=t=>t.replace(/\*(.+?)\*/g,'<em>$1</em>');
const letters=t=>t.split(' ').map(w=>`<span class="w">${[...w].map(c=>`<i aria-hidden="true">${c}</i>`).join('')}</span>`).join(' ');
const split=t=>{let o='',m=t.split(/(\*.+?\*)/);m.forEach(p=>{o+=p[0]=='*'?`<em>${letters(p.slice(1,-1))}</em>`:letters(p)});return `<span class="sr" style="position:absolute;left:-9999px">${t.replace(/\*/g,'')}</span>${o}`};
const N=C.nav,IMG='images/me.webp',CUT='images/me-cutout.webp',pad=n=>String(n).padStart(2,'0');
const ids=['hero','skills','prologue','about','journey','work','camera','build','craft','contact'];
const sk=C.skills.map(s=>`<span>${s}</span><s aria-hidden="true">✦</s>`).join('');
$('#app').innerHTML=`
<div class="ld" id="ld" role="status"><img src="${IMG}" alt=""><b>${C.short} PORTFOLIO</b><div class="bar"><i></i></div><span id="cnt">000</span></div>
<header class="hd"><a class="me" href="#hero"><img src="${IMG}" alt="Portrait of ${C.name}"><span>${C.name}</span></a><nav><a class="btn mag" href="mailto:${C.email}">${N.talk}</a><button class="btn mag" id="mb" aria-expanded="false" aria-controls="menu">${N.menu}</button></nav></header>
<div class="menu" id="menu" role="dialog" aria-label="Chapters"><button class="btn x" id="mx">${N.close}</button>${ids.map((d,i)=>`<a href="#${d}">${C.chapters[i]}</a>`).join('')}</div>
<div class="pill" aria-hidden="true"><svg viewBox="0 0 26 26"><circle cx="13" cy="13" r="11" fill="none" stroke="currentColor" opacity=".2" stroke-width="2"/><circle id="ring" cx="13" cy="13" r="11" fill="none" stroke="#C8F560" stroke-width="2" stroke-dasharray="69.1" stroke-dashoffset="69.1"/></svg><span id="pn">${C.chapters[0]}</span></div>
<main>
<section class="hero" id="hero"><div class="stage" id="stage"><h1 class="giant" aria-label="${C.short}">${C.short}</h1><img class="cut" src="${CUT}" alt="${C.name}"><img class="cut lit" src="${CUT}" alt=""></div>
<div class="hcopy"><small>${C.hero.hello}</small><h2>${C.hero.lines.join('<br>')}<br><em>${C.hero.accent}</em></h2><p>${C.pitch}</p><div class="row"><a class="btn pri mag" href="#work">${N.work}</a><span class="soc row"><a href="${C.linkedin}" rel="noopener">LinkedIn</a><a href="${C.github}" rel="noopener">GitHub</a><a href="mailto:${C.email}">Email</a></span></div></div></section>
<section class="tk" id="skills" aria-label="Skills"><div id="tkt">${sk}${sk}${sk}${sk}</div></section>
<section class="sec pro" id="prologue"><h2>${C.prologue.lines.map(acc).join('<br>')}</h2><svg class="brush" viewBox="0 0 520 30" aria-hidden="true"><path id="bp" d="M8 20 C120 4 260 28 380 12 S480 18 512 10"/></svg><p class="lit-p" id="lp">${C.prologue.text.split(' ').map(w=>`<span>${w}</span>`).join(' ')}</p></section>
<section class="sec" id="about"><div class="ab"><div class="card" id="card"><img loading="lazy" src="${IMG}" alt="${C.name}"><p>${C.about.card}</p></div><div><h2>${acc(C.about.title)}</h2><p style="margin-top:1.5rem;max-width:52ch">${C.about.intro}</p><div class="sig" id="sig" aria-label="Signature">${C.sig}</div><div class="ex">${C.about.expertise.map(e=>`<div><h3>${e.t}</h3><p>${e.d}</p></div>`).join('')}</div><div class="st">${C.about.stats.map(s=>`<div><b data-n="${s.n}">${s.n}</b><p>${s.label}</p></div>`).join('')}</div></div></div></section>
<section class="sec" id="journey"><div class="jn"><h2>${acc(C.journey.title)}</h2><ol class="tl" id="tl"><div class="fill" id="fill"></div>${C.journey.items.map(j=>`<li><b>${j.y}</b><p>${j.t}</p></li>`).join('')}</ol></div></section>
<section class="sec" id="work"><h2 style="margin-bottom:3rem">${acc(C.work.title)}</h2><ol class="wk">${C.work.items.map((w,i)=>`<li data-i="${i}"><${w.link?`a href="${w.link}" rel="noopener" class="in"`:'div class="in"'}><i>${pad(i+1)}</i><h3>${w.t}</h3><span class="tg">${w.tag}</span></${w.link?'a':'div'}><div class="inl"><small>${w.tech}</small>${w.d}</div></li>`).join('')}</ol></section>
<div class="pv" id="pv"></div>
<section class="sec" id="camera"><div class="cm"><div><h2>${acc(C.camera.title)}</h2><p>${C.camera.pitch}</p><div class="chips">${C.camera.topics.map(t=>`<span>${t}</span>`).join('')}</div><a class="btn pri mag" href="${C.linkedin}" rel="noopener">${C.camera.follow}</a></div><div class="ph"><img loading="lazy" src="${IMG}" alt=""><span>${C.camera.reel}</span></div></div></section>
<section class="sec" id="build"><h2 style="margin-bottom:3rem">${acc(C.build.title)}</h2><ol class="bd">${C.build.items.map((b,i)=>`<li><i>${pad(i+1)}</i><h3>${b.t}</h3><p>${b.d}</p></li>`).join('')}</ol></section>
<section class="sec craft" id="craft"><div class="trk" id="trk"><h2>${C.craft.text.split(/(\*.+?\*)/).map(p=>p[0]=='*'?`<em>${letters(p.slice(1,-1))}</em>`:letters(p)).join('')}</h2></div></section>
<section class="sec ct" id="contact"><p>${C.contact.ask}</p><h2 class="big" id="big">${acc(C.contact.big)}</h2><a class="mail" href="mailto:${C.email}">${C.email}</a><div class="row" style="justify-content:center"><a class="btn pri mag" href="mailto:${C.email}">${C.contact.buttons.email}</a><a class="btn mag" href="${C.linkedin}" rel="noopener">${C.contact.buttons.linkedin}</a><a class="btn mag" href="${C.github}" rel="noopener">${C.contact.buttons.github}</a></div></section>
</main>
<footer class="ft"><h2 aria-hidden="true">${C.name.split(' ')[0]}</h2><div><span>${C.footer.copy}</span><span>${N.localTime}: <time id="tm"></time></span><a href="#hero" id="up">${N.top}</a></div></footer>`;
// footer time
const tm=()=>{$('#tm').textContent=new Date().toLocaleTimeString('en-IN',{timeZone:N.tz,hour:'2-digit',minute:'2-digit'})};tm();setInterval(tm,3e4);
// menu
const menu=$('#menu'),mb=$('#mb');let open=false;
const tog=v=>{open=v;mb.setAttribute('aria-expanded',v);menu.style.visibility='visible';gsap.to(menu,{yPercent:v?100:0,duration:RM?0:.6,ease:'power3.inOut',onComplete:()=>{if(!v)menu.style.visibility='hidden'}});if(v)$('#mx').focus();else mb.focus()};
gsap.set(menu,{yPercent:0});mb.onclick=()=>tog(true);$('#mx').onclick=()=>tog(false);addEventListener('keydown',e=>{if(e.key=='Escape'&&open)tog(false)});
// loader
let seen=0;try{seen=sessionStorage.getItem('seen')}catch(e){}
const ld=$('#ld');
const start=()=>{ld.remove();init()};
if(seen||RM){start()}else{const o={v:0};gsap.to(o,{v:100,duration:1.4,ease:'power1.inOut',onUpdate:()=>{$('#cnt').textContent=String(Math.round(o.v)).padStart(3,'0');$('.bar i',ld).style.width=o.v+'%'},onComplete:()=>{try{sessionStorage.setItem('seen',1)}catch(e){}gsap.to(ld,{yPercent:-100,duration:.6,ease:'power3.inOut',onComplete:start})}})}
function init(){
gsap.registerPlugin(ScrollTrigger);
if(!RM){const l=new Lenis();l.on('scroll',ScrollTrigger.update);gsap.ticker.add(t=>l.raf(t*1e3));gsap.ticker.lagSmoothing(0);window.lenis=l;
 $$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=$(a.getAttribute('href'));if(t){e.preventDefault();if(open)tog(false);l.scrollTo(t)}}))}
else $$('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{if(open)tog(false)}));
// pill + ring
const ring=$('#ring');ScrollTrigger.create({start:0,end:'max',onUpdate:s=>ring.style.strokeDashoffset=69.1*(1-s.progress)});
ids.forEach((d,i)=>ScrollTrigger.create({trigger:'#'+d,start:'top 55%',end:'bottom 55%',onToggle:s=>{if(s.isActive)$('#pn').textContent=C.chapters[i]}}));
// hero spotlight
const st=$('#stage');addEventListener('pointermove',e=>{const r=st.getBoundingClientRect();st.style.setProperty('--mx',(e.clientX-r.left)+'px');st.style.setProperty('--my',(e.clientY-r.top)+'px')});
// magnetic
if(!TOUCH&&!RM)$$('.mag').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.3,y:(e.clientY-r.top-r.height/2)*.3,duration:.3})});b.addEventListener('pointerleave',()=>gsap.to(b,{x:0,y:0,duration:.5,ease:'elastic.out(1,.4)'}))});
// card spotlight
$('#card').addEventListener('pointermove',e=>{const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--mx',(e.clientX-r.left)+'px');e.currentTarget.style.setProperty('--my',(e.clientY-r.top)+'px')});
// work preview
const pv=$('#pv');if(!TOUCH){const qx=gsap.quickTo(pv,'x',{duration:.4}),qy=gsap.quickTo(pv,'y',{duration:.4});
 $$('.wk li').forEach(li=>{const w=C.work.items[li.dataset.i];li.addEventListener('mouseenter',()=>{pv.innerHTML=`<small>${w.tech}</small><p>${w.d}</p>`;gsap.to(pv,{opacity:1,scale:1,duration:.3})});li.addEventListener('mouseleave',()=>gsap.to(pv,{opacity:0,scale:.8,duration:.2}));li.addEventListener('mousemove',e=>{qx(Math.min(e.clientX+24,innerWidth-320));qy(e.clientY+24)})})}
// stats (final value already in HTML)
$$('[data-n]').forEach(b=>{const n=+b.dataset.n;if(RM)return;const o={v:0};ScrollTrigger.create({trigger:b,start:'top 85%',once:true,onEnter:()=>gsap.to(o,{v:n,duration:1.6,ease:'power2.out',onUpdate:()=>b.textContent=Math.round(o.v)})})});
// journey
const lis=$$('#tl li');if(!RM)ScrollTrigger.create({trigger:'#tl',start:'top 60%',end:'bottom 60%',scrub:true,animation:gsap.to('#fill',{scaleY:1,ease:'none'})});else $('#fill').style.transform='scaleY(1)';
lis.forEach(li=>ScrollTrigger.create({trigger:li,start:'top 60%',onToggle:s=>li.classList.toggle('on',s.isActive||RM),onEnter:()=>li.classList.add('on'),onLeaveBack:()=>li.classList.remove('on')}));if(RM)lis.forEach(l=>l.classList.add('on'));
// services
$$('.bd li').forEach(li=>ScrollTrigger.create({trigger:li,start:'top 60%',end:'bottom 40%',toggleClass:{targets:li,className:'on'}}));if(RM)$$('.bd li').forEach(l=>l.classList.add('on'));
// theme flip + craft
const cr=$('#craft');
if(RM){cr.classList.add('flat');document.body.classList.add('light')}
else{
 // ticker
 const tk=gsap.to('#tkt',{xPercent:-25,duration:25,ease:'none',repeat:-1});ScrollTrigger.create({start:0,end:'max',onUpdate:s=>{const v=Math.min(Math.abs(s.getVelocity())/300,8);gsap.to(tk,{timeScale:1+v,duration:.2,overwrite:true,onComplete:()=>gsap.to(tk,{timeScale:1,duration:1})})}});
 // brush
 const bp=$('#bp'),L=bp.getTotalLength();gsap.set(bp,{strokeDasharray:L,strokeDashoffset:L});gsap.to(bp,{strokeDashoffset:0,duration:1.2,ease:'power2.out',scrollTrigger:{trigger:bp,start:'top 85%'}});
 // prologue words: stay visible, brighten as you scroll
 gsap.to('#lp span',{opacity:1,stagger:.1,ease:'none',scrollTrigger:{trigger:'#lp',start:'top 80%',end:'bottom 45%',scrub:true}});
 // signature
 gsap.to('#sig',{clipPath:'inset(0 0% 0 0)',duration:2,ease:'power1.inOut',scrollTrigger:{trigger:'#sig',start:'top 85%'}});
 // craft
 ScrollTrigger.create({trigger:cr,start:'top 60%',end:'bottom 40%',onToggle:s=>document.body.classList.toggle('light',s.isActive)});
 const trk=$('#trk'),dist=()=>trk.scrollWidth-innerWidth+0;
 gsap.to(trk,{x:()=>-dist(),ease:'none',scrollTrigger:{trigger:cr,start:'top top',end:()=>'+='+dist(),pin:true,scrub:.6,invalidateOnRefresh:true}});
 gsap.from('#trk i',{x:()=>gsap.utils.random(-400,400),y:()=>gsap.utils.random(-300,300),rotation:()=>gsap.utils.random(-120,120),opacity:0,duration:1.4,ease:'power3.out',stagger:.02,scrollTrigger:{trigger:cr,start:'top 70%',once:true}});
 // contact blur
 gsap.from('#big',{filter:'blur(40px)',opacity:.2,scale:1.08,duration:1.4,ease:'power2.out',scrollTrigger:{trigger:'#big',start:'top 80%'}});
}
$('#up').addEventListener('click',e=>{e.preventDefault();window.lenis?lenis.scrollTo(0):scrollTo({top:0})});
addEventListener('load',()=>ScrollTrigger.refresh());
}
})();
