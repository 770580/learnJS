class Carousel {

  constructor(container, step, imgList) {
    this.container = container;
    this.step = step;
    this.imgList = imgList;
    this.items = [...(document.querySelectorAll('li'))];
    this.visibleIndex = 0;
    this.items.forEach((li, index) => {
      if (index >= this.step) li.classList.add('hidden');
    });
    this.redefining = this.redefining.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  render() {
    const parentUl = document.createElement('ul');
    this.container
    this.imgList.slides.forEach((slide) => {
      const template = `<li><img src=${slide.href}></li>`;

    });
  }


  redefining() {
    this.items.forEach((item, index) => {
      if (index >= this.visibleIndex && index < this.visibleIndex + this.step) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }

  next() {
    console.log(this.visibleIndex);
    this.visibleIndex += this.step;
    if (this.visibleIndex >= this.items.length - this.step) {
      this.visibleIndex = this.items.length - this.step;
    }
    this.redefining();
  }

  prev() {
    this.visibleIndex -= this.step;
    if (this.visibleIndex < 0) this.visibleIndex = 0;
    this.redefining();
  }
}

export default Carousel;
