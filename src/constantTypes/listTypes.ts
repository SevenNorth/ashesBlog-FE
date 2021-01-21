interface IItem {
  title: string;
  summary: string;
  tags: Array<string>;
}

interface IList {
  data: Array<IItem>;
}

export type {
  IItem,
  IList
}