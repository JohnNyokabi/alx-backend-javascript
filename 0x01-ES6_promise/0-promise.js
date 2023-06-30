export default function getResponseFromAPI() {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      const res = "API response";
      resolve(res);
    }, 500);
  });
}