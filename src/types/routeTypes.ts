import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

interface IMeta {
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  selectedIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

interface ITabbarRoute {
  path: string;
  component: React.ElementType;
  meta: IMeta;
}

export type {
  IMeta,
  ITabbarRoute
};