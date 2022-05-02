import instance from "../instance";

export const employerApi = {
  vacancyCreate: (body) => instance.post("/emloyer/vacancyCreate", body),
  vacancyMy: () => instance.post("/emloyer/vacancyMy"),
  getCategories: () => instance.post("/emloyer/getCategories"),
};
