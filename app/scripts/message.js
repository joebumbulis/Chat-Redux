const Message = function(time, sender, body) {
        'use strict';
        this.time = time || new Time();
        this.sender = sender;
        this.body = body;
    };

Message.prototype.save = () => {
  console.log('saved');
};

Message.prototype.destroy = () => {
  console.log('destroyed');
};

export default Message;


// const Message = (username, body, date) => {
//   this.username = username;
//   this.body     = body;
//   this.created  = date || new Date();
// }
//
// Message.prototype.save = () => {
//   console.log('saved');
// }
//
// Message.prototype.destroy = () => {
//   console.log('destroyed');
// }
//
// export default Message;
