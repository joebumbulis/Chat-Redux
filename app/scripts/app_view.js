export default function (store){

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

  $($html).find(".send-btn").on('click', (e) => {
      store.dispatch({
          type: "SEND_MESSAGE",
          msg: $(html).find('.message-input').val()
      });
  });
  return $html;
  }
