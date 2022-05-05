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
  vacancyUpdate: (body) =>
    instance.post("/emloyer/vacancyUpdate", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  getFeedback: (body) => instance.post("/emloyer/getFeedback", body),
  acceptUser: (body) => instance.post("/emloyer/acceptUser", body),
  canseledUser: (body) => instance.post("/emloyer/canseledUser", body),
};
