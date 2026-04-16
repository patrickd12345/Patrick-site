export function cn(...classes: Array<string | false | null | undefined>): string {
  const result: string[] = [];
  for (let i = 0; i < classes.length; i++) {
    const cls = classes[i];
    if (cls) {
      result.push(cls);
    }
  }
  return result.join(" ");
}
