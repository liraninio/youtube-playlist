export const  truncateText = (text:string, numLetters:number) => {
    if (text.length <= numLetters) {
      return text;
    }
    console.log(text.slice(0, numLetters) + '...');
    return text.slice(0, numLetters) + '...';
  }