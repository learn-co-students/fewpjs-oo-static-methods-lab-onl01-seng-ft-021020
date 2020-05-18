
    let ridiculousRegex = /\b(?:(?!\ba\b)(?!\ban\b)(?!\bbut\b)(?!\bof\b)(?!\band\b)(?!\bfor\b)(?!\bat\b)(?!\bby\b)(?!\bfrom\b))[a-z]/g
    return string.replace(ridiculousRegex, (letter) => letter.toUpperCase())
