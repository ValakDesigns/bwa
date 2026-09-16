type ClassValue = string | number | null | boolean | undefined | ClassValue[];

function flatten(inputs: ClassValue[]): string[] {
  const out: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (Array.isArray(input)) {
      out.push(...flatten(input));
    } else {
      out.push(String(input));
    }
  }
  return out;
}

/** Tiny classnames combiner — joins truthy class values, flattening arrays. */
export function cn(...inputs: ClassValue[]): string {
  return flatten(inputs).join(" ");
}
