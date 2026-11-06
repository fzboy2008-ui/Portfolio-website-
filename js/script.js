const particleBox=document.getElementById('particles');
for(let i=0;i<42;i++){const f=document.createElement('span');f.className='flake';f.textContent=i%5===0?'✦':'❄';f.style.left=Math.random()*100+'%';f.style.animationDuration=(9+Math.random()*15)+'s';f.style.animationDelay=(-Math.random()*20)+'s';f.style.fontSize=(8+Math.random()*12)+'px';particleBox.appendChild(f)}
const enter=document.getElementById('enter'),main=document.getElementById('main'),audio=document.getElementById('audio'),play=document.getElementById('play'),disc=document.getElementById('disc');
document.getElementById('enterBtn').addEventListener('click',async()=>{enter.classList.add('hidden');main.classList.add('ready');try{await audio.play();setPlaying(true)}catch(e){}});
function setPlaying(on){play.textContent=on?'Ⅱ':'▶';disc.classList.toggle('playing',on)}
play.addEventListener('click',async()=>{if(audio.paused){try{await audio.play();setPlaying(true)}catch(e){alert('Add your music file as music.mp3 in the same folder as index.html.')}}else{audio.pause();setPlaying(false)}});
audio.addEventListener('ended',()=>setPlaying(false));
document.getElementById('copyId').addEventListener('click',async()=>{try{await navigator.clipboard.writeText('1549995551288852584');document.getElementById('copyId').textContent='Copied ✓'}catch(e){document.getElementById('copyId').textContent='Copy unavailable'}});
document.getElementById('year').textContent=new Date().getFullYear();
