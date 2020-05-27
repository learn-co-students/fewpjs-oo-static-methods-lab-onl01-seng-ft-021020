class Formatter {
  //add static methods here
  static capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  static sanitize(string) {
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return string.replace(/[^A-Za-z0-9 '-]+/g, '');
  }

  static titleize(input) {
    input = Formatter.capitalize(input)
    let result = []

    input.split(" ").forEach(function(w) {
      if(w != "the" &&
      w != "a" &&
      w != "an" &&
      w != "but" &&
      w != "of" &&
      w != "and" &&
      w != "for" &&
      w != "at" &&
      w != "by" &&
      w != "from")
      {
        result.push(Formatter.capitalize(w));
      }
      else{
        result.push(w);
      }
     });

     return result.join(" ")


  }


}