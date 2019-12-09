/**
 * Casting tells TypeScript to treat a variable as a different type. We do this using
 * triangular brackets.
 *
 * For example, say you have a function 'func' that returns either a string or undefined.
 * You can cast the response as a string by doing the following:
 *    const resp = func();
 *    const str = <string>resp
 *
 * Note that TypeScript will only let you cast something as a subset of the original type
 * (e.g. string is a subset of string|undefined).
 * You should also only cast a variable if you have first confirmed it is the type you think
 * it is (e.g. not undefined).
 *
 * Going back to our unionTypes example, we've updated the month to be a randomly generated number.
 * However, TypeScript will complain that the number isn't of type Month.
 *
 * Math.floor(Math.random() * 12) will always return a number beteween 0 and 11 (check in the
 * Chrome console if you're not sure), so we can confidently say it is an instance of Month.
 *
 * Tell TypeScript not to worry about randomlyGeneratedMonth by casting it as type Month.
 *
 */

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
type Month = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;



const monthToStr = (num: Month): string => {
  return months[num];
}

export const script = (): void => {
  const randomlyGeneratedMonth = Math.floor(Math.random() * 12);
  console.log('The month is:', monthToStr(randomlyGeneratedMonth));
}
script();
