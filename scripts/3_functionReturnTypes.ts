/**
 * When writing functions, you should always specify the type
 * of the returned value. For example, if our function is going to
 * return a boolean, we'll write:
 *
 * const numberAsBool = (num: number): boolean => !!num;
 *
 * Currently, the newArray function isn't returning anything - this
 * is what the 'void' keyword means.
 *
 * Your task is to update the function to return the generated array
 * and specify the corresponding type of the returned value.
 *
 * Note that an array type looks like this: <array element type>[]
 */


const newArray = (length: number, populateWith: number): void => {
  const arr = new Array(length);
  for (let i = 0; i < length; i++) {
    arr[i] = populateWith;
  }
  return arr;
}

export const script = (): void => {
  const totals: number[] = newArray(5, 0)
  console.log('totals', totals);
}
script();
