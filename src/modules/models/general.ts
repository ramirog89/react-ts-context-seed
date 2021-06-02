export type IAction<T> = { type: T, payload?: any }

export type Nullable<T> = { [P in keyof T]: T[P] | null } | any;