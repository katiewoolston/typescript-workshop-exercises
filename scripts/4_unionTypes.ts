/**
 * Sometimes a variable could be one of a few different types. You can
 * specify this using a union type. For example, this variable
 * declaration:
 *    let fieldValue: string|null;
 * allows fieldValue to be either a string or null.
 *
 * Union types are a much better option than using the 'any' type (which permits
 * literally anything), because they specify exactly which which types
 * a value could legitimately be. Anything outside of these will be flagged by
 * TypeScript.
 *
 * Your task is to update the type AsStringType to accept the types
 * it is being used with
 */

type AsStringType = undefined;

 const asString = (input: AsStringType): string => {
   return `${input}`;
 }

export const script = (): void => {
  console.log('Wolverine:', asString('a man of many talons'))
  console.log('Number as a string:', asString(123))
  console.log('Boolean as a string:', asString(true))
}
script();

