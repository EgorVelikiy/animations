import './like.css';

export default class Like {
  constructor(body) {
    this.body = body;
  }

  get likeBtnMarkup() {
    return `
            <div class="third-container">
                <button class="like">Like</button>
            </div>
        `;
  }

  get likeImgEL() {
    const like = document.createElement('img');
    like.src =
      'https://raw.githubusercontent.com/netology-code/ahj-homeworks/video/anim/pic/heart.png';
    like.classList.add('like-img');
    return like;
  }

  init() {
    this.body.insertAdjacentHTML('beforeend', this.likeBtnMarkup);

    const container = this.body.querySelector('.third-container');
    const likeBtn = this.body.querySelector('.like');

    likeBtn.addEventListener('click', () => {
      this.likeClick(container);
    });
  }

  likeClick(container) {
    const like = this.likeImgEL;
    container.insertAdjacentElement('beforeend', like);
    like.style.animationName = `like${Math.floor(Math.random() * 4) + 1}`;
    like.style.animationDuration = '0.3s';
    like.onanimationend = () => {
      like.remove();
    };
  }
}
