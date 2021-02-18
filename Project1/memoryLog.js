//memory log content
let logTitles = [
  "INVESTIGATION GUIDELINE 1/3",
  "Notes for AIRD investigator",
  "INVESTIGATION GUIDELINE 2/3",
  "Netpedia P. Lovecraft page (excerpts)",
  "INVESTIGATION GUIDELINE 3/3",
  "UID 2021000019146082",
  "UID 2021000019146082",
  "UID 2021000019146082",
  "UID 2021000019146082",
  "UID 2021000019146082",
  "UID 2021000019143284",
  "UID 2021000019143284",
  "UID 2011000000000023",
  "UID 2011000000000023",
  "UID 2011000000000023",
  "UID 2011000000000023",
  "UID 2011000000000023",
  "UID 2011000000000023",
  "[HSD alert]",
  "[HSD alert]",
  "[HSD alert]",
];

let memoryLog = [
  "Issued on 05/18/2041, expire on 07/19/2041 <br>Test ID: 113485500; <br>Password: Ts677PB; <br>AIRD authorization code: 98668686",
  "Hi. <br>Thank you for comming here and tidying up the mess for us. Here are some tips for you: <br>1. We used to train Mindbot using large number of real user inputs and we're still proud of it. It IS smart in some ways. It knows common abbrivations and usually isn't too picky about upper case vs. lower case. <br><br>2. As the notification says, now its time stops at 30 years ago forever. So it still recognise you as a regular client. But I've turned on the insider's mode for your task. <b>Type 'Admin login session' to entre.</b> <br><br>A former machine learning engieer of Mind Connect.Inc<br>F.D. <br>13 Jun",
  "<br><br>Your task is to test Mindbot and give your assessment about how valuable it is: is it an empathetic AI; is it emotionally important to its users. <br>Carefully exam the dataset and draw your conclusion whether or not to terminate this service. To start, you may want to ask it keywords that is related to your investigation. <br><b>Try asking 'Mind Connect' see how it works.</b>",
  "Lovecraft is a clinical psychologist in private practice, specialising in family therapy and adolescents experiencing mood and anxiety disorders. He is the co-funder of Mind Connect.Inc, a technology company registered in 2011 and closed in 2028. <br><br>(Biography last updated on October 12th 2028)",
  "You will also need to test it with the anonymous user data the company saved in the past, for an accurate assessment of how it operated back at time. <br><br>Heritage Service Disposition Office, AIRD <br>06/10/2041",
  "hi there?",
  "school is too hard",
  "nobody wants to stay with me. do you?",
  "wanna be my friend? say yes or no",
  "i don't care. you ARE my friend now",
  "it has been hard. kid doesn't listen to me. not doing well with my wife. so fucking tired",
  "Bot, do you know how hard it is to raise a kid?",
  "Hey bot",
  "Lovecraft. Well, of course you don't know me.",
  "I said",
  "My name is Lovecraft",
  "That's why I hate you. You are so patheticly dumb.",
  "I also hate you because there are people still like you. They are as stupid as you.",
  "[Code 100:] You have unlocked over 80% of the material. You may make your decision anytime from now on.<br><b>Type 'Initialise high security level operation' to start when you are ready.</b>",
  "[Code 201:] <br>Decision received. This service will be deleted from the Heritage AI archive in 10 seconds.",
  "[Code 202:] <br>Decision received. This service will continue to operate in the Heritage AI archive.",
];

//write memory logs

for (i = 0; i < logTitles.length; i++) {
  $("#container").append('<a class = "logCells" id=' + "logCell" + i + "></a>");
  $("#logCell" + i).append("<p>" + (i + 1) + "</p>");
}

//click for hints
$(document).ready(function () {
  $("#popUpWindow").draggable({ cancel: ".text" });
});

closePopUp = () => {
  $("#popUpWindow").css("display", "none");
};
$("#closePopUp").on("click", closePopUp);

let logNumber;

for (i = 0; i < logTitles.length; i++) {
  $("#logCell" + i).on("click", function () {
    logNumber = this.innerText - 1;
    $("#popUpTitle").html(logTitles[logNumber]);
    $("#popUpText").html(memoryLog[logNumber]);
    $("#popUpWindow").css("display", "block");
  });
}
