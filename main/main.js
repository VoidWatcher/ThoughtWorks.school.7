module.exports = function main(email, suffixes) {
  // Write your code here
  var email_words = email.split("@");
  console.log(email_words.slice(-1) + ' ' + suffixes);
  console.log(email_words.slice(-1) == suffixes);
  return String(email_words.slice(-1)) == String(suffixes);
};
