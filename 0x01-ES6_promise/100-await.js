import { uploadPhoto, createUser } from "./utils";

export default async function asyncUploadUser() {
  try {
    const [photo_res, user_res] = await Promise.all([uploadPhoto(), createUser()]);

    return {
      photo: photo_res,
      user: user_res,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}