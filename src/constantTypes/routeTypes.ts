import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

interface IMeta {
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> ;
  selectedIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  hidden?: boolean,
}

interface ITabbarRoute {
  path: string;
  component: React.ReactNode;
  meta: IMeta;
}

export type {
  IMeta,
  ITabbarRoute
};