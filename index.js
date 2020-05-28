class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  static titleize( string ) {
    let except = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let wordArr = string.split( " " )
    for ( let n = 0; n < wordArr.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( wordArr[ n ] ) )
      } else {
        if ( except.includes( wordArr[ n ] ) ) {
          result.push( wordArr[ n ] )
        } else {
          result.push( this.capitalize( wordArr[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }

}
