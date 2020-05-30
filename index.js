class Formatter {
  static capitalize(string) {
    let sentence = string;
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }

  static sanitize(string) {
    let sentence = string;
    return sentence.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

static titleize(string) {
    let sentence = string;
    let words = string.split(" ");
    let postArray = [];
    let posts = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    for (let i = 0; i < words.length; i++) {
      if (i === 0) {
        postArray.push(this.capitalize(words[i]));
      } else if (posts.includes(words[i])) {
        postArray.push(words[i])
      } else {
        postArray.push(this.capitalize(words[i]))
      }
    }
    return postArray.join(" ");
  }
}