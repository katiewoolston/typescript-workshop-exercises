/**
 * Exercise 2
 *
 * In this challenge you must draw an analogue clock face.
 *
 * - Each hour mark should be drawn with 'o'.
 * - The hour mark representing the hour given in the input should be drawn with an 'h'.
 * - The hour mark representing the minute given in the input should be drawn with an 'm'.
 * - If the hour and the minute both fall on the same mark, then you should draw it with an 'x'.
 * - Round down the minutes past the hour to the nearest 5 for the purposes of marking it on the clock
 *   (so 23 becomes 20, 39 becomes 35).
 *
 * Example:
 *
 * 21:36
 *
 *         o
 *     o       o

 *  o             o
 *
 * h               o
 *
 *  o             o
 *
 *     m       o
 *         o
 *
 */

const times = [
  '08:00',
  '19:21',
  '16:00',
  '02:49',
  '00:00',
  '22:06',
];

export const digitalToAnalog = (time) => {
  return '';
}

export const script = (): void => {
  times.forEach(time => {
    console.log(`${time}\n${digitalToAnalog(time)}`)
  })
}
script();

