import { userSchema } from "../routes/builder";

export const adduser = async (request, response) => {
  const userSchema = request.body;

  const newUser = new User(userSchema);

  try {
    await newUser.save();
    response.status(201).json(newUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};