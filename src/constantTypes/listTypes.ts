interface IItem {
  title: string;
  summary: string;
  tags: Array<string>;
  children?: any;
}

interface IList {
  data: Array<IItem>;
}

export type {
  IItem,
  IList
}