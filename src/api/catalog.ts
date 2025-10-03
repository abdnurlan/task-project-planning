import type { DropDownItem } from "../types/types";
import { api } from "./client";

export const getCompanyDropDownList = async (): Promise<DropDownItem[]> => {
  try {
    const response = await api.get<DropDownItem[]>(
      "/catalog/api/Company/GetDropDownList"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Company dropdown list:", error);
    throw error;
  }
};

export const getProjectDropDownList = async (): Promise<DropDownItem[]> => {
  try {
    const response = await api.get<DropDownItem[]>(
      "/catalog/api/Project/GetDropDownList"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Project dropdown list:", error);
    throw error;
  }
};
