class Word {
  static reverse = async (sentence: string) => {
    let words = sentence.split(' ');
    let reversedWords = await Promise.all(words.map( async word => {
      let reverse = word.split('');
      let rightIndex = word.length - 1;
      let leftIndex = 0
      while (leftIndex < rightIndex) {
        if (await !reverse[leftIndex].match(/[0-9a-zA-Z']/)) {
          leftIndex += 1;
        } else if (await !reverse[rightIndex].match(/[0-9a-zA-Z']/)) {
          rightIndex -= 1;
        } else {
          const temp = reverse[rightIndex];
          reverse[rightIndex] = reverse[leftIndex];
          reverse[leftIndex] = temp;
          leftIndex += 1;
          rightIndex -= 1;
        }
      }
      return reverse.join('');
    }));
    return reversedWords;
  };

  static sort = async (sentence: string) => {
    let words = sentence.split(' ');
    let sortedWords = await Promise.all(words.map( async word => {
      let sorted = word.replace(/[^0-9a-zA-Z']/g, '').split('').sort();
      let sortCtr = 0;
      let final = word.split('');
      for (let i = 0; i <= word.length -1; i++) {
        if (word[i].match(/[0-9a-zA-Z']/)) {
          final[i] = sorted[sortCtr]
          sortCtr++;
        } else {
          final[i] = word[i];
        }
      }
      return final.join('');
    }));
    return sortedWords;
  };
}

export default Word;
