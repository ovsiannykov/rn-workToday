import instance from "../instance";

export const workerApi = {
  workerVacancies: (body) => instance.post("/application/vacancies", body),
  workerVacancy: (body) => instance.post("/application/vacancy", body),
  step1: (body) => instance.post("/application/step1а", body),
  step2: (body) => instance.post("/application/step2", body),
  step3: (body) => instance.post("/application/step3", body),
  step4: (body) => instance.post("/application/step4", body),
  step5: (body) => instance.post("/application/step5", body),
  getCategories: (body) => instance.post("/application/getCategories", body),
};
