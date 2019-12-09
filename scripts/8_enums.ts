/**
 * Enumerables are another good way to restrict a variable's value to specific values.
 *
 * Enums are either number based, string based, or a combination of the two (i.e. the underlying value
 * must be either a string or a number).
 *
 * You can access one of the below ModeOfTransport enums as follows:
 *    const fredsPreferredMode = ModeOfTransport.Walking;
 *
 * The getMode method currently only returns undefined. You'll need to update it to return the appropriate
 * enum depending on the modeName.
 */

enum ModeOfTransport {
  Walking = 0,
  Car = 1,
  Bus = 2,
  Train = 3,
  Cycling = 4,
  Unicorn = 5,
}

const getMode = (modeName: string): ModeOfTransport|undefined => {
  switch(modeName.toLowerCase()) {
    default: {
      return undefined;
    }
  }
}

export const script = (): void => {
  const waysIGotToWorkThisWeek = ['Walking', 'car', 'bus', 'unicorn', 'cycling'];

  const enumModes = waysIGotToWorkThisWeek.map(m => getMode(m));

  enumModes.forEach(mode => {
    if (mode === ModeOfTransport.Walking || mode === ModeOfTransport.Cycling) {
      console.log('Got some exercise');
    }
  })
}
script();

