import './callbackChat.css';

export default class callbackChat {
  constructor(body) {
    this.body = body;
  }

  get callbackChatMarkup() {
    return `
            <div class="second-container">
                <div class="chat-container close">
                    <div class="form-widget">
                        <div class="title">Напишите нам</div>
                        <button class="close-form">X</button>
                    </div>
                    <form class="callback-chat-form">
                        <textarea class="chat-input" type="text"></textarea>
                        <button class="chat-submit" type="submit">Отправить</button>
                    </form>
                </div>
                <div class="point-container open-point">
                    <button class="point">
                        <img class="chat-img" src="https://www.dkv33.ru/assets/img/messager/download-378616.png" alt="">
                    </button>
                </div>
            </div>
        `;
  }

  init() {
    this.body.insertAdjacentHTML('beforeend', this.callbackChatMarkup);

    const point = this.body.querySelector('.point-container');
    const chat = this.body.querySelector('.chat-container');
    const closeChat = this.body.querySelector('.close-form');

    closeChat.addEventListener('click', () => {
      this.closeChat(chat, point);
    });

    point.addEventListener('click', () => {
      this.toggleChat(chat, point);
    });
  }

  toggleChat(chat, point) {
    chat.classList.remove('close');
    chat.classList.add('open');
    point.classList.remove('open-point');
    point.classList.add('close-point');
  }

  closeChat(chat, point) {
    chat.classList.remove('open');
    chat.classList.add('close');
    point.classList.remove('close-point');
    point.classList.add('open-point');
  }
}
