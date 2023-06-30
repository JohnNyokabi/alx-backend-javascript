import { uploadPhoto, createUser } from "./utils.js";

export default function handleProfileSignUp() {
  Promise.all([uploadPhoto(), createUser()])
  .then(([photo_res, user_res]) => {
    const { body: photo } = photo_res;
    const { firstName, lastName } = user_res;
    console.log(`${photo} ${firstName} ${lastName}`);
  })
  .catch(() => {
    console.log("Signup system offline ");
  });
}