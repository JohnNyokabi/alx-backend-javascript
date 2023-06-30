import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignUp(firstName, lastName, fileName) {
  const promise = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)
  ];

  return Promise.allSettled(promise)
  .then((response) => {
    return response.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason
    }));
  });
}