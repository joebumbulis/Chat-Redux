import {
    createStore
} from 'redux';
import loginView from './login_view.js'
import appView from './app_view.js'
import messageView from './messages_view.js'

export default function app() {

    const initialState = {
        user: "Guest User",
        messages: [],
        view: loginView
    };


    const appReducer = function(state, action) {
        if (state === undefined) {
            state = initialState;
        };

        switch (action.type) {
            case "TESTING":
                console.log("It works!");
                console.log(state);
                return state

            case "LOG_IN":
                console.log("I did log in")
                var newUser = action.user;
                if (newUser === '') {
                    alert('Please choose a username')
                } else {
                    return Object.assign({}, state, {
                        user: newUser,
                        view: appView
                    }); //makes a copy of the state before returning it
                }

            case "MSGS_RECEIVED":
                console.log('I\'ve received messages');
                var receivedMessages = action.msgs;
                return Object.assign({}, state, {
                  messages: receivedMessages
                })

            case "SEND_MESSAGE":
                console.log('I sent a message');
                var newMessage = action.sentMsg;
                console.log(newMessage);
                return Object.assign({}, state, {
                  messages: newMessage
                })
                //get json request here to populate log in page. with time out.
                // $.getJSON(url).then((data, status, xhr) =>{
                //   setTimeout( () => {
                //     store.dispatch({ type: "MESSAGES_LOADED", msgs: data })
                //   }, 2000);
                //
                //   //this timeout is for loading animation???
                // })
                // return Object.assign({}, state,  newState);
                // console.log(Newstate);

            // case "LOAD_MESSAGES":
            //     $.getJSON(url).then((date) =>{
            //       store.dispatch({ type: "MESSAGES_LOADED", msgs: data})
            //     });
            //     return state;

            // case "MESSAGES_LOADED":
            //     var newState = {
            //       msgs: action.msgs,
            //       loadingMsgs: false
            //     }
            //     return Object.assign({}, state, newState)

                //
                //       case "TODOS_LOADED":
                //         var newState = {
                //            todos: action.todos,
                //            loadingTodos: false
                //         };
                //         return Object.assign({}, currentState, newState);

            // case "SEND_MESSAGE":
            //     console.log("I did case send message")
            //     var newMsg = action.msg;
            //     return Object.assign({}, state, {
            //         items: newItems
            //     });
            //     //
            //     case "GET_CHATS":
            //     console.log("I did get chats")


            default:
                return state;
        }
    };

    const store = createStore(appReducer)

    const render = function() {
        let state = store.getState();
        // console.log(state);
        $('#app').html(state.view(store))
        console.log(state)
    }

    store.subscribe(render);

    store.dispatch({
        type: "TESTING",
    });

    // store.dispatch({
    //     type: "LOG_IN",
    //     item: 'apples'
    // })
    // store.dispatch({
    //     type: "TESTING"
    // });
}
