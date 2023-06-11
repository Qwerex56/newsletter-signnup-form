export let userEmail: string;

export function updateUserEmail(e: any) {
  userEmail = e.target.value;
}

export function setUserEmail(str: string) {
  userEmail = str;
}