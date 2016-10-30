'use strict';
function Article() {
  this.created = new Date();
  Article.count++;
  Article.lastDate = this.created;
}
Article.showStats = function() {
    return `Всего: ${this.count}, Последняя: ${this.lastDate}`;
  }
Article.count = 0;