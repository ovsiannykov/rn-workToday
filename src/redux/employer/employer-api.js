import instance from "../instance";

export const employerApi = {
  vacancyCreate: (body) =>
    instance.post("/emloyer/vacancyCreate", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  vacancyMy: () => instance.post("/emloyer/vacancyMy"),
  getCategories: () => instance.post("/emloyer/getCategories", {}),
};
