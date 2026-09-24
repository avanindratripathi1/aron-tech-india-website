const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
if(menuBtn){menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open);});}
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const form=document.getElementById('requirementForm');
form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const msg=`Hello ARON TECH INDIA,\n\nI have an industrial sourcing requirement.\n\nName: ${d.get('name')||''}\nCompany: ${d.get('company')||''}\nPhone: ${d.get('phone')||''}\nEmail: ${d.get('email')||''}\nRequirement: ${d.get('requirement')||''}\n\nPlease review and share suitable sourcing options / quotation.`;window.open(`https://wa.me/917982082232?text=${encodeURIComponent(msg)}`,'_blank','noopener');});
