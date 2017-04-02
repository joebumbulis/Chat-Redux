// import messageView from './messages_view';

export default function appView(store){

  let $html = $(`
  <header>
    <h1>Joe's Chat Redux</h1>
  </header>
  <div class="message-page page">
      <div class="messages-container">
          <ul id="messages-container">
          </ul>

      </div>
      <div class="input-container">
          <input class="message-input" type="text" value="">
          <button class="send-btn">send</button>
      </div>
  </div>
  <footer>
    <h5>produced by Joe Bumbulis</h5>
  </footer>
  `);

  // const url = 'http://tiny-za-server.herokuapp.com/collections/joebum_chat/'

  var state = store.getState();
  console.log(state);
  let messageContainer = $html.find('#messages-container');

  state.messages.forEach((data, i, arr) => {
    console.log(data);
    let messageList =  $(`<li class="message">${data.body} <span class="timestamp">was sent by ${data.sender} at ${data.time}<span><button class="message-delete-btn">X</button></li>`);
      let deleteBtn = messageList.find('.message-delete-btn');
      deleteBtn.on('click', function(e){
        const url = 'http://tiny-za-server.herokuapp.com/collections/joebum_chat/'
        let deleteUrl = url + data._id
        let deleteMessage = {
          type: 'DELETE',
          url: deleteUrl
        }
        console.log(deleteUrl)

        $.ajax(deleteMessage).then(function(){
          messageList.remove()
        })
      })
      messageContainer.append(messageList);
    })



//   reverse().map((message, i, arr) => {
//       return messageView(store, message);
//     }).join("");
//     messageContainer.html(messageList);
// })


//justin's code
  // $.getJSON("http://tiny-za-server.herokuapp.com/collections/pub-sub-chat").then((data) => {
  //     let container = $(html).find('.messages');
  //     let messages  = data.reverse().map(function (message) {
  //       return messageView(store, message);
  //     }).join("");
  //     container.html(messages);
  //   });
  //my code form chat app
  //data.forEach(function(data, i, arr){
  // let messageContainer = $('#messages-container');
  //     let messageList = $(`<li class="message">${data.body} <span class="timestamp">was sent by ${data.sender} at ${data.time}<span><button class="message-delete-btn">X</button></li>`);
  //     let deleteBtn = messageList.find('.message-delete-btn');
  //     deleteBtn.on('click', function(e){
  //       let deleteUrl = url + data._id
  //       let deleteMessage = {
  //         type: 'DELETE',
  //         url: deleteUrl
  //       }
  //       console.log(deleteUrl)
  //
  //       $.ajax(deleteMessage).then(function(){
  //         messageList.remove()
  //       })
  //     })
  //     messageContainer.append(messageList);
  //   })
  //

  $($html).find(".send-btn").on('click', (e) => {
      store.dispatch({
          type: "SEND_MESSAGE",
          msg: $(html).find('.message-input').val()
      });
  });
  return $html;
  }



  //   $(html).find('button').on('click', (e) => {
  //       store.fire(EVENTS.SEND_MESSAGE, { msg: $(html).find('input').val() });
  //   });
  //
  //   return html;
  // };
