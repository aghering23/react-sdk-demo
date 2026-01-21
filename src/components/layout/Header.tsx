import { Link, useLocation } from 'react-router-dom';
import { useWallet } from '@subscrypts/react-sdk';

function Header() {
  const { isConnected, address, connect, disconnect } = useWallet();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const truncateAddress = (addr: string) => {
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  };

  const handleWalletAction = async () => {
    if (isConnected && disconnect) {
      await disconnect();
    } else if (connect) {
      await connect();
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Subscrypts
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/pricing"
              className={`text-sm font-medium transition-colors ${
                isActive('/pricing')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/premium"
              className={`text-sm font-medium transition-colors ${
                isActive('/premium')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Premium
            </Link>
            {isConnected && (
              <Link
                to="/account"
                className={`text-sm font-medium transition-colors ${
                  isActive('/account')
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Account
              </Link>
            )}
          </nav>

          {/* Wallet Connection */}
          <div className="flex items-center">
            <button
              onClick={handleWalletAction}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isConnected
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isConnected && address
                ? truncateAddress(address)
                : 'Connect Wallet'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
