export function cn(...classes: Array<string | false | null | undefined>): string {
  let result = "";
  for (let i = 0; i < classes.length; i++) {
    const cls = classes[i];
    if (cls) {
      if (result) {
        result += " " + cls;
      } else {
        result = cls;
      }
    }
  }
  return result;
}
