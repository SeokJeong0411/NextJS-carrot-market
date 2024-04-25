"use server";

export const handleForm = async (prevState: any, data: FormData) => {
  console.log(prevState);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log(data.get("password"), data.get("email"));
  return {};
};
