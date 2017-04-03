
## Description

http://joebum-day-24.surge.sh/

## Explorer Mode

Using redux, model the state of your application as a single object and use multiple actions to handle any changes in that state.

Your app should have a single reducer function that is "pure" and returns a new copy of the state after every action.

Create an online chat application that can host multiple users that have unique usernames/handles.

All users can submit new chat messages which should update the chat area in about 2 seconds. Users cannot edit any chat messages. Older chat messages can be deleted, but only by the user that created the message.

Messages should display the name of the user who sent them, as well as a timestamp. They should be displayed so that the newest chats are closest to the input area for writing new messages.

Your app should include at least 2 view functions for each "page" but only 1 html file that will contain very little html. The first page should prompt the user to "login" by providing a username. The second should display previously sent messages and an input area to write new messages to the list. The user should only be able to see the chat messages after they have "logged in" by providing a username.

Your code should be modular. You should have the following 'views', each in its own file:

Views (write at least a render function for each of these):

Login, for rendering the login page and handling any user events that occur on the login page
Chat, for rendering the chat room page and handling any user events that occur on the chat page
Message, for rendering a single message to the chat area, and handling any user events that can occur for a single message.
You should use ES2015 language features when appropriate.

You should be using Redux to handle all communication between your different views and to change the state of your application.

### Notes

* Don't forget to use Object.assign to update your state to prevent it from being mutated.
##### redux
* setInterval() will enable you to run a function repeatedly after a specified amount of time has passed (such as refreshing the messages on page).
* the Moment.js library may come in handy for displaying dates or timestamps with a nice format.
### What to Submit

A link to a repository containing at least:
A copy of the webpack-starter app with all your code in the scripts folder
In the Notes section, include a link to your project live on the internet (on surge).
As always, in the Notes section, include your confidence (1-5) and if you are anything below 5, briefly explain why.

### Adventurer Mode

Also create mention functionality where you can type @ and get a list of users in the room and allow you to autocomplete their username with a dropdown list in the chat input section.
This functionality should highlight the chat message for the user of the app that was mentioned, but only for that particular user.
For example, if someone was chatting with me, and went @nicerhugs how are you?, I would be the only user of the application that could see the text "how are you?" as highlighted.


### Epic Mode

In addition to Explorer and Adventure Mode, create a private messaging feature where you can chat with another user privately. When someone messages you privately, you'll also see a message count on the user roster of the person messaging you. When you click said user, it should bring you to a new chat dialog that shows only the private messages between you and the person messaging you privately.
The entire application will also have a new feature where anyone can create a custom room and users can choose which room to chat in based on a room roster. Each chat room/channel should have their own user roster as well, that also maintains the private messaging feature.
