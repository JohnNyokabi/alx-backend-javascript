import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignUp() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoRes, userRes]) => {
      const { body: photo } = photoRes;
      const { firstName, lastName } = userRes;
      console.log(`${photo} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline ');
    });
}
