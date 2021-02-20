
interface IItem {
  title: string;
  summary: string;
  tags: Array<string>;
  uniId:string;
  children?: any;
}

// interface IList {
//   data: Array<IItem>;
// }
type IList = Array<IItem>;

export type {
  IItem,
  IList
}