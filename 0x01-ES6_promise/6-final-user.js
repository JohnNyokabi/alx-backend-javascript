import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignUp(firstName, lastName, fileName) {
  const promise = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  return Promise.allSettled(promise)
    .then((values) => {
      const response = [];
      values.forEach((value) => {
        if (value.status === 'fulfilled') {
          response.push(value);
        } else {
          response.push({
            status: value.status,
            value: `Error: ${value.reason.message}`,
          });
        }
      });
      return response;
    });
}
