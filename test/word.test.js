const Word = require("../util/Word");

// describe("Word", () => {
//   describe("Success", () => {
//     it("Should create a new word object with the word set to argument", () => {
//       const testWord = new Word("test");
//       expect(testWord).toEqual({ word: "test" });
//     });
//   });

//   describe("getWord", () => {
//     it("Should return word", () => {
//       const testWord = new Word("test");
//       expect(testWord.getWord).toBe("test");
//     });
//   });

//   describe("setWord", () => {
//     it("Should set the word to the argument that was passed", () => {
//       const testWord = new Word("test");
//       testWord.setWord = "thing";
//       expect(testWord).toEqual({ word: "thing" });
//     });
//   });

//   describe("rev", () => {
//     it("Should set the word to the argument that was passed", () => {
//       const testWord = new Word("test");
//       expect(testWord.rev).toEqual({ word: "tset" });
//     });
//   });
// });

describe("isPal", () => {
  it("Should return true if word is palindrome false otherwise", () => {
    const testWord = new Word("dad");
    const testWord2 = new Word("test");

    expect(testWord.isPal).toBe(true);
    expect(testWord2.isPal).toBe(false);
  });
});
