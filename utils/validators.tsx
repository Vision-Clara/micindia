export const isFilled = (data: string) => {
  return !!data;
};

export function isValidEmail(data: string) {
  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the pattern and return the result
  return emailPattern.test(data);
}
