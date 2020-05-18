class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  static titleize(string) {
    let ridiculousRegex = /\b(?:(?!\ba\b)(?!\ban\b)(?!\bbut\b)(?!\bof\b)(?!\band\b)(?!\bfor\b)(?!\bat\b)(?!\bby\b)(?!\bfrom\b)(?!\bthe\b))[a-z]/g
    string = string.replace(ridiculousRegex, (letter) => letter.toUpperCase())
    return string.replace(/^[a-z]/g, (letter) => letter.toUpperCase())
  }
}
