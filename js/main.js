(function(){
var d=document,h=d.documentElement;h.classList.add('js');
var dr=d.getElementById('mob-drawer'),ov=d.getElementById('overlay'),hb=d.getElementById('hamburger');
function openD(){dr.classList.add('on');ov.classList.add('on');h.style.overflow='hidden';hb.setAttribute('aria-expanded','true');dr.setAttribute('aria-hidden','false');}
function closeD(){dr.classList.remove('on');ov.classList.remove('on');h.style.overflow='';hb.setAttribute('aria-expanded','false');dr.setAttribute('aria-hidden','true');}
if(hb){hb.addEventListener('click',openD);ov.addEventListener('click',closeD);d.getElementById('drawer-close').addEventListener('click',closeD);
d.addEventListener('keydown',function(e){if(e.key==='Escape')closeD();});
window.addEventListener('resize',function(){if(window.innerWidth>768)closeD();});}
function setOpen(it,on){var b=it.querySelector('.acc-body'),p=it.querySelector('.plus'),hd=it.querySelector('.acc-head');
it.classList.toggle('open',on);hd.setAttribute('aria-expanded',on?'true':'false');b.style.maxHeight=on?b.scrollHeight+'px':'0px';if(p)p.textContent=on?'−':'+';}
d.querySelectorAll('.accordion').forEach(function(acc){
var items=acc.querySelectorAll('.acc-item');
items.forEach(function(it,i){var hd=it.querySelector('.acc-head');
setOpen(it,it.classList.contains('open'));
hd.addEventListener('click',function(){setOpen(it,!it.classList.contains('open'));});});});
window.addEventListener('resize',function(){d.querySelectorAll('.acc-item.open .acc-body').forEach(function(b){b.style.maxHeight=b.scrollHeight+'px';});});
})();
