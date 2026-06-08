export type Category = 'economics' | 'nutrients' | 'comparison' | 'planning';

export interface ToolItem {
  id: string;
  title: string;
  description: string;
  category: Category;
  primaryOutcome: string;
  iconId: string;
  viewId: string;
}

export interface CropData {
  id: string;
  name: string;
  targetEC: string;
  targetPH: string;
  yieldPerSqFtLbs: number;
  marketPricePerLb: number;
}

export interface SystemData {
  id: string;
  name: string;
  costPerSqFt: number;
  powerCostPerSqFtMth: number;
  waterUsageGalSqFtMth: number;
}
