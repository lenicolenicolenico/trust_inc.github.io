'use strict';


{
  const targets = document.querySelectorAll('.animation');

  function callback(entries, obs) {
    console.log(entries);

    entries.forEach(entry =>{

      
      if (!entry.isIntersecting) {
        return;
      }
      
      entry.target.classList.add('appear');
      // 監視を止める
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.4,
  };

  const observer = new IntersectionObserver(callback, options);

  targets.forEach(target => {
    observer.observe(target);
  });
}