/**
 * The TypeScript compiler fails if a variable has an implicit 'any' type
 * (i.e. it could not infer any other type from the context).
 * You'll need to modify the function definition below to set the type of the
 * 'message' parameter to 'string'.
 */

const log = (message): void => {
  console.log(message);
}

export const script = (): void => {
  const message = 'Hello world!';
  log(message);
}
script();
