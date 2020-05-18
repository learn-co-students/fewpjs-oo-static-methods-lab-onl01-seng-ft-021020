class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-' ]+/g, "");
  }

  static titleize(string) {
    const prepositions = [
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
      "the",
    ];
    let arr = string.split(" ").map((word,i) => {
      return prepositions.includes(word) && i > 0 ? word : this.capitalize(word);
    });
    return arr.join(" ");
  }
}
