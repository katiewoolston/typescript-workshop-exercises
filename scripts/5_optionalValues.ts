/**
 * So far, we've been dealing with variables that are always
 * defined. Often, you'll want to initialise a variable or parameter
 * that may or may not be defined.
 *
 * You can indicate this using a union type:
 *    let str: string|undefined;
 *
 * But there's an inbuilt way to do this using question marks:
 *
 *    let str?: string;
 *
 * Update the below function to accept an optional 'error' boolean parameter
 * that will prepend any messages with the text 'ERROR:' instead of 'DEBUG:'.
 */


const log = (message: string): void => {
  const formattedMessage = `DEBUG: ${message}`;
  console.log(formattedMessage);
}

export const script = () => {
  const rand: number = Math.random();

  if (rand > 0.5) {
    log('Number is in a reasonable range');
  } else {
    log('Number is less than 0.5', true);
  }
}
script();
