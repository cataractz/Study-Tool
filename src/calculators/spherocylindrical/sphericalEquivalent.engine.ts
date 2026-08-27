// SE = Sphere + Cylinder/2. Notation-independent: works identically for plus- or minus-cylinder
// form, since transposing the Rx does not change the spherical equivalent.

export function sphericalEquivalent(sphere: number, cylinder: number): number {
  return sphere + cylinder / 2
}
