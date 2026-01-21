import { SubscryptsButton } from '@subscrypts/react-sdk';
import { useNavigate } from 'react-router-dom';
import { PlanConfig } from '../../config/plans';

interface PlanCardProps {
  plan: PlanConfig;
}

function PlanCard({ plan }: PlanCardProps) {
  const navigate = useNavigate();

  const handleSuccess = (subscriptionId: string) => {
    console.log('Subscription successful:', subscriptionId);
    // Navigate to premium content or account page
    navigate('/premium');
  };

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
        plan.recommended
          ? 'border-blue-600 ring-4 ring-blue-100'
          : 'border-gray-200'
      }`}
    >
      {plan.recommended && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Recommended
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        <p className="text-gray-600 mb-4">{plan.description}</p>
        <div className="text-4xl font-bold text-gray-900 mb-2">
          {plan.pricePerMonth}
        </div>
        <p className="text-sm text-gray-500">per month</p>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <SubscryptsButton
        planId={plan.id}
        onSuccess={handleSuccess}
        variant={plan.recommended ? 'primary' : 'outline'}
        size="lg"
      >
        Subscribe to {plan.name}
      </SubscryptsButton>
    </div>
  );
}

export default PlanCard;
