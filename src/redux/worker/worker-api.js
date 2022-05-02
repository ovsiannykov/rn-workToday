import instance from "../instance";

export const workerApi = {
  workerVacancies: (body) => instance.post("/application/vacancies", body),
  workerVacancy: (body) => instance.post("/application/vacancy", body),
  step1: (body) => instance.post("/application/step1", body),
  step2: (body) => instance.post("/application/step2", body),
  step3: (body) => instance.post("/application/step3", body),
  step4: (body) => instance.post("/application/step4", body),
  step5: (body) =>
    instance.post("/application/step5", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  getCategories: (body) => instance.post("/application/getCategories", body),
  getLoadCompetitions: (body) =>
    instance.post("/application/loadCompetitions", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  getFeedback: (body) => instance.post("/application/getFeedback", body),
  sendFeedback: (body) => instance.post("/application/sendFeedback", body),
  getMyWork: () => instance.post("/application/getMyWork", {}),
  getInfo: () => instance.post("/application/getInfo", {}),
  startMyWork: (body) => instance.post("/application/startMyWork", body),
  endMyWork: (body) => instance.post("/application/endMyWork", body),
};
