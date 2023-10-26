interface IAuthDataCollection {
  key: string;
  data: ITodoData[];
}

export interface ITodoData {
  id: any;
  type: "open" | "done" | "overdue";
  title: string;
  date: string;
}

export interface IAuthData {
  activeUser: string;
  records: IAuthDataCollection[];
}
