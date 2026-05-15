document.addEventListener('DOMContentLoaded', ()=>{
  const logo = document.getElementById('logo');
  // simple parallax on mouse move
  document.addEventListener('mousemove', (e)=>{
    const x = (e.clientX - window.innerWidth/2)/40;
    const y = (e.clientY - window.innerHeight/2)/40;
    logo.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.02)`;
  });

  // gentle pulse when clicking CTA
  document.querySelectorAll('.btn').forEach(b=>{
    b.addEventListener('click', (ev)=>{
      ev.preventDefault();
      b.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(0.96)' },
        { transform: 'scale(1)' }
      ], { duration: 260, easing: 'ease-out' });
    });
  });
});
