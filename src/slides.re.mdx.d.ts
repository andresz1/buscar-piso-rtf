import type {
  ComponentList,
  ReMDXSlide,
  Themes as ThemesType,
} from "@nkzw/remdx";

export let slides: ReadonlyArray<ReMDXSlide>;

export let Components: ComponentList | undefined;
export let Themes: ThemesType | undefined;
export default slides;
