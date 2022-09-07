import { IDataResponse } from "../../@core/interfaces/common/data-response";

export class DefaultSelect implements IDataResponse {
  constructor(public data: any[] = [], public count: number = 0) {}
}