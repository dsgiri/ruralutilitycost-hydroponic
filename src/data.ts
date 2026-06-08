import { ToolItem, CropData, SystemData } from './types';

export const TOOLS: ToolItem[] = [
  {
    id: 'startup-cost',
    title: 'Startup Cost Estimator',
    description: 'Estimate hydroponic setup costs based on system type and area.',
    category: 'economics',
    primaryOutcome: 'Cost Analysis',
    iconId: 'calculator',
    viewId: 'estimate'
  },
  {
    id: 'nutrient-planner',
    title: 'Nutrient Solution Planner',
    description: 'Calculate A/B tank stock formulations by crop stage.',
    category: 'nutrients',
    primaryOutcome: 'Formulation',
    iconId: 'droplets',
    viewId: 'nutrients'
  },
  {
    id: 'ec-ph-planner',
    title: 'EC/pH Target Planner',
    description: 'Find target EC and pH ranges by crop type.',
    category: 'planning',
    primaryOutcome: 'Target Parameters',
    iconId: 'activity',
    viewId: 'ecph'
  },
  {
    id: 'electricity-cost',
    title: 'Electricity Cost Calculator',
    description: 'Estimate lighting, pump, and HVAC power costs.',
    category: 'economics',
    primaryOutcome: 'OpEx Analysis',
    iconId: 'zap',
    viewId: 'estimate' // Map to estimate for now, or create subview
  },
  {
    id: 'crop-profit',
    title: 'Crop Profitability Calculator',
    description: 'Model potential revenue and margins by crop and yield.',
    category: 'economics',
    primaryOutcome: 'Gross Margin',
    iconId: 'leaf',
    viewId: 'profit'
  },
  {
    id: 'roi-payback',
    title: 'ROI & Payback Period',
    description: 'Determine time to recoup initial capital investment.',
    category: 'economics',
    primaryOutcome: 'Financial Metric',
    iconId: 'trending-up',
    viewId: 'profit'
  },
  {
    id: 'system-compare',
    title: 'System Comparison Tool',
    description: 'Compare NFT, DWC, and Ebb & Flow side-by-side.',
    category: 'comparison',
    primaryOutcome: 'Decision Matrix',
    iconId: 'layers',
    viewId: 'compare'
  }
];

export const CROPS: CropData[] = [
  { id: 'lettuce', name: 'Lettuce (Butterhead)', targetEC: '1.2 - 1.8', targetPH: '5.8 - 6.0', yieldPerSqFtLbs: 1.5, marketPricePerLb: 3.50 },
  { id: 'basil', name: 'Basil', targetEC: '1.6 - 2.2', targetPH: '5.8 - 6.2', yieldPerSqFtLbs: 1.2, marketPricePerLb: 18.00 },
  { id: 'tomato', name: 'Tomato (Vine)', targetEC: '2.0 - 5.0', targetPH: '5.5 - 6.5', yieldPerSqFtLbs: 5.0, marketPricePerLb: 2.50 },
  { id: 'strawberry', name: 'Strawberry', targetEC: '1.0 - 1.4', targetPH: '5.5 - 6.0', yieldPerSqFtLbs: 2.0, marketPricePerLb: 5.00 },
  { id: 'microgreens', name: 'Microgreens', targetEC: '1.0 - 1.2', targetPH: '5.5 - 6.0', yieldPerSqFtLbs: 0.5, marketPricePerLb: 25.00 },
];

export const SYSTEMS: SystemData[] = [
  { id: 'nft', name: 'NFT (Nutrient Film Technique)', costPerSqFt: 25, powerCostPerSqFtMth: 0.8, waterUsageGalSqFtMth: 1.5 },
  { id: 'dwc', name: 'DWC (Deep Water Culture)', costPerSqFt: 18, powerCostPerSqFtMth: 0.5, waterUsageGalSqFtMth: 2.5 },
  { id: 'ebb-flow', name: 'Ebb & Flow', costPerSqFt: 22, powerCostPerSqFtMth: 0.6, waterUsageGalSqFtMth: 2.0 },
  { id: 'drip', name: 'Drip Irrigation (Media)', costPerSqFt: 15, powerCostPerSqFtMth: 0.4, waterUsageGalSqFtMth: 1.8 },
  { id: 'vertical', name: 'Vertical Rack (Indoor)', costPerSqFt: 85, powerCostPerSqFtMth: 4.5, waterUsageGalSqFtMth: 1.2 },
];
