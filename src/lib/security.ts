/**
 * Escapes HTML special characters to prevent Cross-Site Scripting (XSS) and HTML injection.
 */
export function escapeHtml(str: string): string {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Validates an email address structure using a standard RFC 5322 regex.
 */
export function validateEmail(email: string): boolean {
  if (!email || email.length > 254) return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}

/**
 * Trims, truncates, and HTML-escapes an input string to enforce safety.
 */
export function sanitizeInput(str: string, maxLength: number): string {
  if (!str) return "";
  const trimmed = str.trim();
  const truncated = trimmed.slice(0, maxLength);
  return escapeHtml(truncated);
}
