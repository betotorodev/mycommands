export enum SESSION_STATUS {
  LOADING = "loading",
  AUTHENTICATED = "authenticated",
  UNAUTHENTICATED = "unauthenticated"
}

export const makeRandomID = (length = 10, dict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') =>
  Array.from({ length }, _ => dict[~~(Math.random() * dict.length)]).join('')