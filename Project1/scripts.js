//set up chatbot

var bot = new RiveScript();

// Load an individual file.
bot.loadFile("brain/testsuite.rive").then(loading_done).catch(loading_error);

// Load a list of files all at once (the best alternative to loadDirectory
// for the web!)
// bot.loadFile([
//   "brain/begin.rive",
//   "brain/admin.rive",
//   "brain/clients.rive"
// ]).then(loading_done).catch(loading_error);

// All file loading operations are asynchronous, so you need handlers
// to catch when they've finished. If you use loadDirectory (or loadFile
// with multiple file names), the success function is called only when ALL
// the files have finished loading.
function loading_done() {
  botReady();

  console.log("Bot has finished loading!");

  // Now the replies must be sorted!
  bot.sortReplies();

  // And now we're free to get a reply from the brain!

  // RiveScript remembers user data by their username and can tell
  // multiple users apart.
  let username = "local-user";

  // NOTE: the API has changed in v2.0.0 and returns a Promise now.
  // bot.reply(username, "Hello, bot!").then(function(reply) {
  //   console.log("The bot says: " + reply);
  // });
}

// It's good to catch errors too!
function loading_error(error, filename, lineno) {
  console.log("Error when loading files: " + error);
}

//text display
const message_container = document.querySelector(".messages");
const form = document.querySelector("form");
const input_box = document.querySelector("input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  selfReply(input_box.value);
  input_box.value = "";
});

//initial messages and events
function botReply(message) {
  $("#logCell0").css("display", "inline-block");
  $("#logCell1").css("display", "inline-block");
  message_container.innerHTML += `<div class="bot">${message}</div>`;
  location.href = "#edge";
}

//show trigger new cell
function selfReply(message) {
  hintTrigger(message);
  message_container.innerHTML += `<div class="self">${message}</div>`;
  location.href = "#edge";
  bot.reply("local-user", message).then(function (reply) {
    botReply(reply);
  });
}

function botReady() {
  message_container.innerHTML += `<div class = "admin"><b>Please note that from 1/1/2028, Mindbot will be permanetly archived.</b><br>You may still be able to use the archived version, but no new account might be created nor is the service under maintenance.<br>Mind Connect.Inc thank you of your support.</div>`;
  message_container.innerHTML += `<div class = "botHide"></div>`;
  message_container.innerHTML += `<div class = "admin">Entering new session with Mindbot</div>`;
  botReply("...");
  botReply("Hi! I'm Mindbot! How can I help you?");
}

function hintTrigger(message) {
  if (message == "Mind Connect") {
    $("#logCell3").css("display", "inline-block");
    $("#logCell4").css("display", "inline-block");
    $("#logCell5").css("display", "inline-block");
  } else if (message == "Ts677PB") {
    $("#logCell2").css("display", "inline-block");
  } else if (message.includes("hi there") == true) {
    $("#logCell6").css("display", "inline-block");
  } else if (message.includes("school") == true) {
    $("#logCell7").css("display", "inline-block");
  } else if (message.includes("nobody wants") == true) {
    $("#logCell8").css("display", "inline-block");
  } else if (message.includes("wanna be") == true) {
    $("#logCell9").css("display", "inline-block");
  } else if (message.includes("my friend now") == true) {
    $("#logCell10").css("display", "inline-block");
  } else if(message.includes("so fucking tired") == true){
    $("#logCell11").css("display", "inline-block");
  } else if (message.includes("raise a kid") == true) {
    $("#logCell12").css("display", "inline-block");
  } else if (message.includes("ey bot") == true) {
    $("#logCell13").css("display", "inline-block");
  } else if (message.includes("of course you") == true) {
    $("#logCell14").css("display", "inline-block");
  } else if (message == "It is not") {
    //terminate
    shutDown();
    $("#logCell21").css("display", "inline-block");
  } else if(message.includes("I said") == true){
    $("#logCell15").css("display", "inline-block");
  } else if(message == "sorry"){
    $("#logCell18").css("display", "inline-block");
  } else if(message == "My name is Lovecraft"){
    $("#logCell16").css("display", "inline-block");
  } else if(message.includes("patheticly") == true){
    $("#logCell17").css("display", "inline-block");
    $("#logCell18").css("display", "inline-block");
  } else if(message.includes("high security level") == true){
    $("#logCell19").css("display", "inline-block");
  } else if(message == "It is"){
    $("#logCell20").css("display", "inline-block");
  }
}

shutDown = () => {
  setTimeout(function () {
    $(".chat").css("display", "none");
    $("#popUpWindow").css("display", "none");
    $("#container").css("display", "none");
    $("body").css("display", "block");
    $("body").animate({
      backgroundColor: "rgb( 20, 20, 20 )",
    });
  }, 5000);
};
