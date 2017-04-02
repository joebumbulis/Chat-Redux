export default function loginView(store){

let $html = $(`
<header>
  <h1>Joe's Chat Redux</h1>
</header>
<div class="entry-page page">
  <p class="welcome">Welcome to Joe's web chat app. Please sign-in with your username or create a new one.</p>
  <input id="user-input" placeholder="username">
  <button id="sign-in-btn">SIGN IN</button>
</div>
<footer>
  <h5>produced by Joe Bumbulis</h5>
</footer>
`);

$($html).find("#sign-in-btn").on('click', (e) => {
    store.dispatch({
        type: "LOG_IN",
        user: $('#user-input').val()
    });
});
return $html;
}
