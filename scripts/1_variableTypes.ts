/* Types make sure our variables are what we expect them to be, which helps to
 * avoid weird bugs.
 *
 * This script fails because numA is a string, which means numA + numB is also a string,
 * and TypeScript won't let you assign it to sum, which is a number.
 *
 * You can fix the problem by changing numA to a number.
 *
 * Also try seeing what happens if you remove the 'number' type from 'sum' -
 * this will compile successfully, but we're going to get the wrong outcome. This is
 * an example of why the types in TypeScript are so helpful.
 */

export const script = (): void => {
  const numA = '6';
  const numB = 12;

  const sum: number = numA + numB;

  console.log('The sum is', sum);
}
script();
