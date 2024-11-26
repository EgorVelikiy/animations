import Collapse from './collapse/collapseWidget';
import callbackChat from './callbackChat/callbackChat';
import Like from './like/like';

const collapse = new Collapse(document.body);
collapse.init();

const chat = new callbackChat(document.body);
chat.init();

const like = new Like(document.body);
like.init();
