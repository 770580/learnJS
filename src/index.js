import './styles.css';
import Carousel from './carousel';

const carousel = new Carousel(3);


document.querySelector('.right').addEventListener('click', carousel.next);
document.querySelector('.left').addEventListener('click', carousel.prev);
// module.hot.accept();
