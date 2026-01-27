// api/_shared/helper.js

export function validateEmail(email, maxLength = 500) {
  if (!email || typeof email !== "string") return false;
  if (email.length > maxLength) return false;
  return email.includes("@");
}

export function validateString(value, maxLength = 5000) {
  if (!value || typeof value !== "string") return false;
  return value.length <= maxLength;
}

export function getErrorMessage(error) {
  if (error instanceof Error) return error.message;
  return "Unknown error";
}
