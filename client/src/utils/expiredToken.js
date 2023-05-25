export default function expiredToken(decodedToken) {
  const currentDate = new Date();
  const tokenExpiry = new Date(decodedToken.exp * 1000);
  const result = currentDate >= tokenExpiry;

  return result ? true : false;
}
