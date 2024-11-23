export function checkIfEmpty(valueToCheck: string): boolean {
  if(valueToCheck === "") {
    alert("Value cannot be empty");
    return true;
  }
  return false;
}