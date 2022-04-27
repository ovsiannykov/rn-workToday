import instance from "../instance";

export const workerApi = {
  workerVacancies: (body) => instance.post("/application/vacancies", body),
  workerVacancy: (body) => instance.post("./application/vacancy", body),
};
