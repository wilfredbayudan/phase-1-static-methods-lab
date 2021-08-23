class Formatter {
  
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    console.log('sanitizing');
    return string.replace(/[^A-Z,a-z0-9- ']+/g, '');
  }

  static titleize(string) {
    const ignoreList = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = string.split(" ");
    let result = [];
    words.forEach((word, index) => {
      // Check ignore list
      if (ignoreList.indexOf(word.toLowerCase()) === -1 || index === 0) {
        console.log(`${word} not found in list.`);
        result.push(this.capitalize(word));
      } else {
        console.log(`${word} found in list.`);
        result.push(word);
      }
    });
    console.log(result);
    return result.join(" ");
  }

}