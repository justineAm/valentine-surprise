// Countdown Timer
const countdownEl = document.getElementById('countdown');
const valentinesDate = new Date('2026-02-14T00:00:00').getTime();
function updateCountdown(){
  const now = new Date().getTime();
  const distance = valentinesDate - now;
  if(distance < 0){ countdownEl.innerHTML = "Happy Valentine’s Day! 💖"; clearInterval(timerInterval); launchConfetti(); return; }
  const days = Math.floor(distance/(1000*60*60*24));
  const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
  const seconds = Math.floor((distance % (1000*60))/1000);
  countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
const timerInterval = setInterval(updateCountdown,1000);
updateCountdown();

// Reveal love message with multiple typing effects
function revealLove(){
  const loveMsg = document.getElementById('loveMessage');
  const messages = [
    "I LOVE YOU, CLAIRE 💖",
    "FOREVER AND ALWAYS 💞",
    "YOU ARE MY EVERYTHING 🌹"
  ];
  let msgIndex=0; let charIndex=0;
  loveMsg.style.opacity=1;
  loveMsg.innerText="";

  function typeNextChar(){
    if(charIndex<messages[msgIndex].length){
      loveMsg.innerText += messages[msgIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeNextChar,100);
    } else {
      msgIndex++;
      charIndex=0;
      if(msgIndex<messages.length){ setTimeout(()=>{ loveMsg.innerText=""; typeNextChar(); },800);}
    }
  }
  typeNextChar();

  // Falling hearts
  for(let i=0;i<30;i++) createFallingHeart();

  // Floating images
  const galleryImages=document.querySelectorAll('.carousel img');
  galleryImages.forEach(img=>{
    const clone=img.cloneNode(true);
    clone.style.position='fixed';
    clone.style.left=Math.random()*window.innerWidth+'px';
    clone.style.top='-200px';
    clone.style.width='100px';
    clone.style.height='100px';
    clone.style.objectFit='cover';
    clone.style.opacity='0.7';
    clone.style.transition='all 4s linear';
    document.body.appendChild(clone);
    setTimeout(()=>{ clone.style.top=window.innerHeight+'px'; clone.style.opacity=0; },50);
    setTimeout(()=>{ clone.remove(); },4000);
  });
}

// Falling hearts helper
function createFallingHeart(){
  const heart=document.createElement('div');
  heart.className='falling-heart';
  heart.innerText='💖';
  heart.style.left=Math.random()*window.innerWidth+'px';
  heart.style.fontSize=(20+Math.random()*20)+'px';
  document.body.appendChild(heart);
  setTimeout(()=>{ heart.remove(); },4000);
}

// Confetti effect
function launchConfetti(){
  for(let i=0;i<50;i++){
    const conf=document.createElement('div');
    conf.className='confetti';
    conf.style.left=Math.random()*window.innerWidth+'px';
    conf.style.backgroundColor=`hsl(${Math.random()*360},100%,50%)`;
    document.body.appendChild(conf);
    setTimeout(()=>{ conf.remove(); },3000);
  }
}

// Modal functions
const modal=document.getElementById("modal");
function openModal(){ modal.style.display="block"; }
function closeModal(){ modal.style.display="none"; }
window.onclick=function(event){ if(event.target==modal){ modal.style.display="none"; } }

// Mini surprise on images/cards
function miniSurprise(el){
  const surprise=document.createElement('div');
  surprise.style.position='absolute';
  surprise.style.top='10px';
  surprise.style.left='50%';
  surprise.style.transform='translateX(-50%)';
  surprise.style.fontSize='2rem';
  surprise.innerText='💖';
  el.style.position='relative';
  el.appendChild(surprise);
  setTimeout(()=>{ surprise.remove(); },1200);
}

// Background music autoplay fix
const bgMusic=document.getElementById('bgMusic');
document.body.addEventListener('click',()=>{
  bgMusic.muted=false;
  bgMusic.play();
},{once:true});
