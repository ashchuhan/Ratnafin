export type Merge<A, B> = { [K in keyof A]: K extends keyof B ? B[K] : A[K] } &
  B extends infer O
  ? { [K in keyof O]: O[K] }
  : never;

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface OptionsProps {
  label: string;
  value: string;
}
