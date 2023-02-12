export interface IResult {
  error_id: string;
  error_msg: string;
}

export interface IResponse {
  status: string;
  result: IResult;
}
