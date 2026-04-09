// Shared utility functions

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${String(value)}`);
}

export function isNonEmpty<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}
