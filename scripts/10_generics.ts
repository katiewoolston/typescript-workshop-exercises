/**
 * One of the really cool features of TypeScript is generics.
 *
 * Generics allows us to define types with a variable attribute type. This
 * is super useful as it allows us to define a complex data type, but with
 * one (or more) attributes that are different depending on the context.
 *
 * For example, a GET /animals endpoint might return the following:
 * {
 *   currentPage: 2,
 *   count: 10,
 *   dataType: 'Penguins',
 *   data: [{ id: 'penguin-1' }, { id: 'penguin-2' }]
 * }
 *
 * In this case, the structure of the response would be the same whether it's
 * penguins or giraffes - the only thing that would change is the data type of
 * 'data'.
 *
 * Generics allows us to define the endpoint response type once, but allow
 * the 'data' type to be defined on the fly:
 *
 * interface AnimalsResponse<T> {
 *   currentPage: number;
 *   count: number;
 *   dataType: string;
 *   data: T[],
 * }
 *
 * You can then use the AnimalsResponse type like this:
 *
 * const getLion: AnimalsResponse<Lion> = ...
 *
 * Your job is to define the 'Resp' type used in 'getStationery' (and you'll
 * also need to make a change to the getStationery function definition).
 *
 * Note that there are two ways you could implement something like this:
 *  - create a separate function for each data type you'll be requesting,
 *    and explicitly define the response data type, or
 *  - have just one function and use a union in the response type
 * There are pros and cons to both, it's really up to you.
 */

interface Laptop {
  brand: string;
  memory: number;
  year: number;
}

interface Notebook {
  pages: number;
  spiralBound: boolean;
  size: string;
}

const laptop: Laptop = { brand: 'Apple', memory: 16000000000, year: 2015 };
const notebook: Notebook = { pages: 260, spiralBound: true, size: 'A5' };

function getStationery(type: string): Resp {
  const data = (type === 'laptop') ? laptop : notebook;
  return {
    dataType: type,
    count: 1,
    data: [data],
  }
}

export const script = (): void => {
  ['laptop', 'notebook'].forEach(dataType => {
    const resp = getStationery(dataType);
    console.log(`I have ${resp.count} ${dataType}, and it looks like this: ${resp.data}`);
  })
}
script();

