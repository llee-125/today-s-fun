class Word {
  // constructor(wrd) {
  //   this.word = wrd;
  // }

  // get getWord() {
  //   return this.word;
  // }

  // set setWord(wrd) {
  //   this.word = wrd;
  // }

  get isPal() {
    return this.word.split("").reverse().join("") === this.word;
  }
}

module.exports = Word;
