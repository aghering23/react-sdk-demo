export interface PlanConfig {
  id: string;
  name: string;
  description: string;
  pricePerMonth: string;
  features: string[];
  recommended: boolean;
}

export const DEMO_PLANS: PlanConfig[] = [
  {
    id: import.meta.env.VITE_DEMO_PLAN_ID_BASIC || '1',
    name: 'Basic',
    description: 'Perfect for individuals getting started',
    pricePerMonth: '10 SUBS',
    features: [
      'Access to basic features',
      'Community support',
      'Monthly updates',
      'Basic analytics',
    ],
    recommended: false,
  },
  {
    id: import.meta.env.VITE_DEMO_PLAN_ID_PRO || '2',
    name: 'Pro',
    description: 'For professionals and growing teams',
    pricePerMonth: '25 SUBS',
    features: [
      'All Basic features',
      'Priority support',
      'Advanced analytics',
      'Custom integrations',
      'Team collaboration',
    ],
    recommended: true,
  },
  {
    id: import.meta.env.VITE_DEMO_PLAN_ID_ENTERPRISE || '3',
    name: 'Enterprise',
    description: 'For large organizations',
    pricePerMonth: '50 SUBS',
    features: [
      'All Pro features',
      'Dedicated account manager',
      'Custom SLA',
      'White-label options',
      'Advanced security',
      'Priority feature requests',
    ],
    recommended: false,
  },
];
