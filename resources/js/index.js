
axios.get('https://jsonplaceholder.typicode.com/posts').then(async resp => {
  const testimonials = resp.data
  const users = (await axios.get('https://jsonplaceholder.typicode.com/users')).data;
  for (const t of testimonials) {
    // swiper.appendSlide(`<div class="constainer swiper-slide"><p>${t.body}</p></div>`)  
    swiper.appendSlide(`<div class=" swiper-slide">
                          <div class="wrap row">
                            <div class="col-12">
                              <img class="rounded-circle" src="resources/img/person_${Math.floor(Math.random()*4) + 1}.jpg" style="width: 20%;">
                            </div>                  
                            <div class="col-12 mt-3">
                              <p class="cite font-italic text-md mb-2">"${t.body}"</p>
                              <p class="name mt-2 mb-2 font-weight-bold">${users.find(element => element.id === t.userId).name}</p>
                            </div>
                          </div>
                        </div>`); 
  }
});

let swiper = new Swiper('.swiper-container', {
  loop: true,
  autoHeight: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true
  },
});