export interface IProduct {
  title: string;
  name: string;
  taste: string;
  portion: number;
  gift?: number;
  weight: number | string;
  unit: string;
  description: string;
  descriptionIsSelected: string;
  descriptionIsDisabled: string;
  hoveredTitle: string;
  isHovered: boolean;
  isSelected: boolean;
  isDisabled: boolean;
}
