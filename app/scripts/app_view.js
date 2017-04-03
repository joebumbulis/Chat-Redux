export default function appView(store) {

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
        let messageList = $(`<li class="message">${data.body} <span class="timestamp">was sent by ${data.sender} at ${data.time}<span><button class="message-delete-btn">X</button></li>`);
        let deleteBtn = messageList.find('.message-delete-btn');
        deleteBtn.on('click', function(e) {
            const url = 'http://tiny-za-server.herokuapp.com/collections/joebum_chat/'
            let deleteUrl = url + data._id
            let deleteMessage = {
                type: 'DELETE',
                url: deleteUrl
            }
            console.log(deleteUrl)

            $.ajax(deleteMessage).then(function() {
                messageList.remove()
            })
        })
        messageContainer.append(messageList);
    })


    $($html).find(".send-btn").on('click', (e) => {
        let moment = require('moment');
        let time = (moment().format("ddd MMMD,YY hh:mmA"));
        let sentMsg = $html.find('.message-input').val()
        const url = 'http://tiny-za-server.herokuapp.com/collections/joebum_chat/'
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: url,
            data: JSON.stringify({
                time: time,
                body: sentMsg
            })
        }).then((data, status, xhr) => {
            console.log(data)
            store.dispatch({
                type: "SEND_MESSAGE",
                sentMsg: data,
            })
        });
        let newMessage = $(`<li class="message">${sentMsg} <span class="timestamp">was sent by ${sender} at ${time}<span><button class="message-delete-btn">X</button></li>`);

        messageContainer.append()
    });
    return $html;
}
//
//   const url = 'http://tiny-za-server.herokuapp.com/collections/joebum_chat/'
//
//   $.ajax({
//     type: 'GET',
//     dataType: 'json',
//     url: url
//   }).then((data, status, xhr) =>{
//     console.log(data);
//
//     store.dispatch({
//       type: "MSGS_RECEIVED",
//       msgs: data,
//     })
//   })
//     store.dispatch({
//         type: "LOG_IN",
//         user: $('#user-input').val()
//     });
// });
