$(document).ready(function() {
  const age=parseInt(prompt("What is your age?"));

  if (age >= 18) {
    $("#votingAge").show();
  }
  else {
    $("#nonVotingAge").show();
  }
});
