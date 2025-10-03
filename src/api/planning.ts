import { api } from "./client";
import type {
  AnnualPlanningParams,
  ContractorCompanyPlanningAddRequest,
  ContractorCompanyPlanningUpdateRequest,
  ContractorCompanyPlanningFilterParams,
  PlanningCategoryAddRequest,
} from "../types/planning";

export const getAnnualPlanning = (params: AnnualPlanningParams) => {
  return api.get("/planning/api/AnnualPlanning", { params });
};

export const addContractorCompanyPlanning = (
  data: ContractorCompanyPlanningAddRequest
) => {
  return api.post("/planning/api/ContractorCompanyPlanning", data);
};

export const deleteContractorCompanyPlanning = (id: string) => {
  return api.delete(`/planning/api/ContractorCompanyPlanning`, {
    params: { id },
  });
};

export const updateContractorCompanyPlanning = (
  data: ContractorCompanyPlanningUpdateRequest
) => {
  return api.put("/planning/api/ContractorCompanyPlanning", data);
};

export const getContractorCompanyPlanning = (
  params: ContractorCompanyPlanningFilterParams
) => {
  return api.get("/planning/api/ContractorCompanyPlanning", { params });
};

export const getContractorCompanyPlanningById = (id: string) => {
  return api.get(`/planning/api/ContractorCompanyPlanning/GetById`, {
    params: { id },
  });
};

export const getContractorCompanyPlanningForUpdateById = (id: string) => {
  return api.get(`/planning/api/ContractorCompanyPlanning/GetForUpdateById`, {
    params: { id },
  });
};

export const updateContractorCompanyPlanningStatus = (
  id: string,
  isActive: boolean
) => {
  return api.patch(
    `/planning/api/ContractorCompanyPlanning/UpdateStatus/${id}/${isActive}`
  );
};

// Planning Category APIs
export const addPlanningCategory = (data: PlanningCategoryAddRequest) => {
  return api.post("/planning/api/PlanningCategory", data);
};

export const getPlanningCategoryDropDownList = () => {
  return api.get("/planning/api/PlanningCategory/GetDropDownList");
};
