/**
 * You can also use union types to specify a union of actual values (instead of just types).
 *
 * Update the monthNum variable to be a valid month.
 *
 */

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
type Month = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;



const monthToStr = (num: Month): string => {
  return months[num - 1];
}

export const script = (): void => {
  const monthNum = 15;
  console.log('The month is:', monthToStr(monthNum));
}
script();

