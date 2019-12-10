/**
 * Asynchronous functions always return a promise.
 *
 * In the case of 'saveData' below, it returns the string 'success!',
 * but wrapped in a promise.
 *
 * Update the function definition of 'saveData' to return a promise (instead
 * of just a string)
 */

 // We emulate the behaviour of an API call by introducing a 200ms delay;
const saveData = async (data: string): string => {
  await new Promise(resolve => {
    setTimeout(() => {
      console.log('saved data', data);
      resolve();
    }, 200)
  })
  return 'success';
}

export const script = (): void => {
  saveData('some information');
}
script();

