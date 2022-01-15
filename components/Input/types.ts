import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string | number;
  height?: string | number;
  color?: string;
  bgColor?: string | number;
  border?: number;
  borderColor?: string | number;
  borderWidth?: string | number;
  borderRadius?: string | number;
  padding?: string | number;
  marginTop?: string | number;
  fontSize?: string | number;
  fontWeight?: string | number;
  fontFamily?: string | number;
}