export interface AnnualPlanningParams {
  Pagination?: {
    Limit?: number;
    OffSet?: number;
  };
  SearchKey?: string;
  Sort?: {
    field: string;
    direction: string;
  }[];
  Filter?: {
    field: string;
    values: string[];
  }[];
}

export interface ContractorCompanyPlanningAddRequest {
  project_id_hash: string;
  company_id_hash: string;
  annual_planning_id_hash: string;
  volume_splitting_option: number;
  contractor_company_planning_volume_month_add_dtos: {
    planning_category_id_hash: string;
    contractor_company_planning_volume_month_dtos: {
      part: number;
      month: number;
    }[];
  }[];
}

export interface ContractorCompanyPlanningUpdateRequest {
  id_hash: string;
  project_id_hash: string;
  company_id_hash: string;
  annual_planning_id_hash: string;
  volume_splitting_option: number;
  contractor_company_planning_volume_month_update_dtos: {
    planning_category_id_hash: string;
    contractor_company_planning_volume_month_dtos: {
      part: number;
      month: number;
    }[];
  }[];
}

export interface ContractorCompanyPlanningFilterParams {
  Pagination?: {
    Limit?: number;
    OffSet?: number;
  };
  SearchKey?: string;
  Sort?: {
    field: string;
    direction: string;
  }[];
  Filter?: {
    field: string;
    values: string[];
  }[];
}

export interface PlanningCategoryAddRequest {
  name: string;
}
