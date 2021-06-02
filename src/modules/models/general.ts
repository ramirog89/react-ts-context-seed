export type IAction<T> = { type: T | null, payload?: any }

export type Nullable<T> = { [P in keyof T]: T[P] | null } | any;