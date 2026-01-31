/**
 * Subscription Diagnostics Component
 * 
 * Displays SDK hook results to verify subscription data is being
 * correctly returned by the Subscrypts SDK.
 */

import { useWallet, useSubscriptionStatus, useMySubscriptions } from '@subscrypts/react-sdk';

export function SubscriptionDiagnostics() {
  const { address, isConnected } = useWallet();
  
  // SDK hook results
  const hookStatus = useSubscriptionStatus('1');
  const hookSubscriptions = useMySubscriptions(address || undefined, 10);

  if (!isConnected) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-yellow-800">Connect wallet to run diagnostics</p>
      </div>
    );
  }

  // Check if SDK v1.5.0+ is working correctly
  const isWorking = hookStatus.status?.isActive === true || hookSubscriptions.subscriptions.length > 0;

  return (
    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 space-y-6">
      <h3 className="text-lg font-bold text-purple-900">🔍 Subscription Diagnostics</h3>
      
      {/* Status Banner */}
      <div className={`rounded-lg p-4 border-2 ${isWorking ? 'bg-green-50 border-green-300' : 'bg-yellow-50 border-yellow-300'}`}>
        <h4 className="font-bold mb-2">
          {isWorking ? (
            <span className="text-green-800">✅ SDK v1.5.0 Working Correctly</span>
          ) : (
            <span className="text-yellow-800">⚠️ No Active Subscription Detected</span>
          )}
        </h4>
        <p className={`text-sm ${isWorking ? 'text-green-700' : 'text-yellow-700'}`}>
          {isWorking 
            ? 'SDK hooks are returning subscription data correctly. Your subscription is active!'
            : 'SDK hooks are working but no active subscription was found for this wallet.'}
        </p>
      </div>
      
      {/* Wallet Info */}
      <div className="bg-white rounded-lg p-4 border border-purple-200">
        <h4 className="font-semibold text-purple-800 mb-2">Wallet Info</h4>
        <p className="text-sm font-mono text-gray-700">Address: {address}</p>
        <p className="text-sm font-mono text-gray-700">Plan ID: 1</p>
      </div>

      {/* SDK Hook Results */}
      <div className="bg-white rounded-lg p-4 border border-purple-200">
        <h4 className="font-semibold text-purple-800 mb-2">SDK Hook Results</h4>
        
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-gray-700">useSubscriptionStatus('1'):</p>
            <pre className={`text-xs p-2 rounded mt-1 overflow-x-auto border ${
              hookStatus.status?.isActive 
                ? 'bg-green-50 border-green-200' 
                : 'bg-gray-50 border-gray-200'
            }`}>
              {JSON.stringify({
                status: hookStatus.status,
                isLoading: hookStatus.isLoading,
                error: hookStatus.error?.message || null,
              }, (_, v) => typeof v === 'bigint' ? v.toString() + 'n' : v, 2)}
            </pre>
            {hookStatus.status?.isActive && (
              <p className="text-xs text-green-600 mt-1">✓ Subscription is active!</p>
            )}
          </div>
          
          <div>
            <p className="text-sm font-medium text-gray-700">useMySubscriptions:</p>
            <pre className={`text-xs p-2 rounded mt-1 overflow-x-auto border ${
              hookSubscriptions.subscriptions.length > 0 
                ? 'bg-green-50 border-green-200' 
                : 'bg-gray-50 border-gray-200'
            }`}>
              {JSON.stringify({
                subscriptionCount: hookSubscriptions.subscriptions.length,
                subscriptions: hookSubscriptions.subscriptions.map((s: any) => ({
                  id: s.id?.toString(),
                  planId: s.planId?.toString(),
                  isActive: s.nextPaymentDate ? new Date(s.nextPaymentDate) > new Date() : false,
                  nextPaymentDate: s.nextPaymentDate,
                })),
                isLoading: hookSubscriptions.isLoading,
                error: hookSubscriptions.error?.message || null,
              }, (_, v) => typeof v === 'bigint' ? v.toString() + 'n' : v, 2)}
            </pre>
            {hookSubscriptions.subscriptions.length > 0 && (
              <p className="text-xs text-green-600 mt-1">
                ✓ Found {hookSubscriptions.subscriptions.length} subscription(s)!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* SDK Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-bold text-blue-900 mb-2">SDK Version Info</h4>
        <p className="text-sm text-blue-800">
          Using Subscrypts SDK v1.5.0 with the following improvements:
        </p>
        <ul className="text-sm text-blue-700 mt-2 space-y-1 list-disc list-inside">
          <li>Removed ContractService - direct methods.ts usage</li>
          <li>Enforced data transformation with cleanSub/cleanPlan</li>
          <li>Single source of truth for contract calls</li>
          <li>Verified transaction wrappers</li>
        </ul>
      </div>
    </div>
  );
}