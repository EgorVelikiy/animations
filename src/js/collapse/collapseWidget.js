import './collapse.css';

export default class Collapse {
  constructor(body) {
    this.body = body;
  }

  get collapseMarkUp() {
    return `
            <div class="first-container">
                <button class="toggle-button">Collapse</button>
                <div id="collapse" class="collapse-container">
                    <div class="collapse-content">
                        Какой-то текст, который открывается при помощи transition.
                        Какой-то текст, который открывается при помощи transition. 
                        Какой-то текст, который открывается при помощи transition. 
                    </div>
                </div>
            </div>
        `;
  }

  init() {
    this.body.insertAdjacentHTML('beforeend', this.collapseMarkUp);

    const contentContiner = document.getElementById('collapse');
    const toggleBtn = document.querySelector('.toggle-button');

    toggleBtn.addEventListener('click', () => {
      this.toggleCollapse(contentContiner);
    });
  }

  toggleCollapse(contentContiner) {
    contentContiner.classList.toggle('active-content');
  }
}
