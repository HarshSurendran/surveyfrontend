import React from "react";
import { ISurvey } from "./ISurvey";

export interface ISubmissionProps {
    submissions: ISurvey[]
};

export interface IPaginationProps {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

export interface IProtectedRouteProps {
  children: React.ReactNode
}