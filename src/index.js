import './styles.css';
import Carousel from './carousel';

// const carousel = new Carousel(3);
const step = 3;
const container = document.body;
const carousel = new Carousel(container,
  step,
  { slides: [{ title: 'test', href: 'https://js.cx/carousel/1.png' },
    { title: 'test', href: 'https://js.cx/carousel/2.png' },
    { title: 'test', href: 'https://js.cx/carousel/3.png' },
    { title: 'test', href: 'https://js.cx/carousel/4.png' },
    { title: 'test', href: 'https://js.cx/carousel/5.png' },
    { title: 'test', href: 'https://js.cx/carousel/6.png' },
    { title: 'test', href: 'https://js.cx/carousel/7.png' },
    { title: 'test', href: 'https://js.cx/carousel/8.png' },
    { title: 'test', href: 'https://js.cx/carousel/9.png' },
    { title: 'test', href: 'https://js.cx/carousel/10.png' },
  ],
  });


document.querySelector('.right').addEventListener('click', carousel.next);
document.querySelector('.left').addEventListener('click', carousel.prev);
// module.hot.accept();
