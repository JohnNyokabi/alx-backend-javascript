export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = 'API response';
      resolve(res);
      reject(new Error('Failed to get response from API'));
    }, 500);
  });
}
