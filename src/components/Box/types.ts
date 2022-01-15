export type BoxProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  width?: number | string;
  height?: number | string; 
  maxWidth?: number | string;
  maxHeight?: number | string;
  minWidth?: number | string;
  minHeight?: number | string;
  backgroundColor?: string ;
  borderRadius?: number | string;
  borderWidth?: number | string;

  // Alignment Props
  display?: string;
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  alignContent?: "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  flex?: number | string;
  order?: number | string;
  alignSelf?: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  justifySelf?: "auto" | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  overflow?: "visible" | "hidden" | "scroll";
  overflowX?: "visible" | "hidden" | "scroll";
  overflowY?: "visible" | "hidden" | "scroll";
  overflowWrap?: "wrap" | "nowrap" | "wrap-reverse";
  textAlign?: "left" | "right" | "center" | "justify";
  textAlignVertical?: "top" | "bottom" | "center" | "justify";
}