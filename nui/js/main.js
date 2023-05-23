
import { messageActionHandler } from "./Handlers/MessageActionHandler.js"

window.addEventListener('message', ({data}) => {
    const {action, actionData} = data;
    messageActionHandler[`${action}`](actionData);

})