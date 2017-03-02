function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var upperCase = string.toUpperCase();
  var lowerCase = string.toLowerCase();
  var love = 'I love you, Grandma.'
  if (upperCase === string) {
    return 'YES INDEED!'
  } else if (lowerCase === string) {
    return 'I can\'t hear you!';
  } else if (love === string) {
    return 'I love you, too.'
  }
}
