class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    let noCaps = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = [];
    let stringRay = string.split(' ')

    for (let i = 0; i < stringRay.length; i++) {
      if (i === 0) {
        result.push( this.capitalize(stringRay[i])) 
      } else {
        if (noCaps.includes(stringRay[i])) {
          result.push(stringRay[i])
        } else {
          result.push(this.capitalize(stringRay[i]))
        }
      }
    }

    return result.join(" ");
  }
}

