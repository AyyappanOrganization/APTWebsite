export const authorizedUsers = [
  'ayyapps4u@gmail.com',
  'anand@example.com',
  'divya@example.com',
  'rajesh@example.com',
  'vijay@example.com'
];

export const isUserAuthorized = (email: string | null): boolean => {
  if (!email) return false;
  return authorizedUsers.includes(email.toLowerCase());
};