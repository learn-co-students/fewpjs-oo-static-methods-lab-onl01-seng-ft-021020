class Formatter {
  
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(string){
    
    let capitalString = string.charAt(0).toUpperCase() + string.slice(1)
    let excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let stringArray = capitalString.split(" ")

    return stringArray.map(string => {
      if (excludedWords.includes(string)) {
        return string
      } else {
        return string.charAt(0).toUpperCase() + string.slice(1)
      }
    }).join(" ")

  }
}