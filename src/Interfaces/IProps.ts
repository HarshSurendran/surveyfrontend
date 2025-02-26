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