{
  const countWordOccurrences = (sen: string, word: string) => {
    const filterRegex = new RegExp(word, "i");
    const wordOccarence = sen
      .split(" ")
      .filter((w) => filterRegex.test(w)).length;
    return wordOccarence;
  };
}
