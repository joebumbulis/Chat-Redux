import {
    createStore
} from 'redux';
import loginView from './login_view.js'

export default function app() {
    const initialState = {
        user: "Guest User",
        messages: [],
        view: loginView
    }


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
                var newUser = action.user;
                return Object.assign({}, state, {
                    user: newUser,
                    view: appView
                }); //makes a copy of the state before returning it

                // case "REMOVE_ITEM":
                //     newItems.splice(action.index, 1);
                //     return Object.assign({}, state, {
                //         items: newItems
                //     });

            default:
                return state;
        }
    };

    const store = createStore(appReducer)

    const render = function() {
        let state = store.getState();
        $('#app').html(state.view(store))
        console.log(state)
    }

    store.subscribe(render)

    store.dispatch({
        type: "TESTING"
    });
    // store.dispatch({
    //     type: "LOG_IN",
    //     item: 'apples'
    // })
    // store.dispatch({
    //     type: "TESTING"
    // });
}
