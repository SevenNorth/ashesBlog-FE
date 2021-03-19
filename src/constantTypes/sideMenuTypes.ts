interface IMenuTree {
  key: string;
  name: string;
  children: IMenuTree | [];
}

export type {
  IMenuTree
}