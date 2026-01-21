# Deploying to Vercel with HTTPS

## Why Deploy Instead of Localhost?

MetaMask and other wallets have known issues with localhost, especially for:
- Token approvals (ERC20 approve transactions)
- Contract interactions with permit functions
- USDC swaps via Uniswap

Deploying to Vercel gives you:
- ✅ Automatic HTTPS
- ✅ Real domain name
- ✅ Better wallet compatibility
- ✅ Free hosting
- ✅ Automatic deployments from Git

## Quick Deploy Steps

### 1. Push to GitHub

```bash
cd "C:\Users\adrianus\Nextcloud\Automatisering\visual-studio-code\Subscrypts - React SDK Demo"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Subscrypts React SDK Demo"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/Subscrypts/react-sdk-demo.git

# Push
git push -u origin main
```

### 2. Deploy to Vercel

**Option A: Use Vercel CLI (Fastest)**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy
cd "C:\Users\adrianus\Nextcloud\Automatisering\visual-studio-code\Subscrypts - React SDK Demo"
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name? react-sdk-demo
# - Directory? ./
# - Override settings? No

# Your site will be deployed at: https://react-sdk-demo-xxx.vercel.app
```

**Option B: Use Vercel Dashboard**

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings
5. Add environment variables:
   - `VITE_DEMO_PLAN_ID_BASIC=1`
   - `VITE_DEMO_PLAN_ID_PRO=2`
   - `VITE_DEMO_PLAN_ID_ENTERPRISE=3`
   - `VITE_REFERRAL_ADDRESS=0xE2E5409C4B4Be5b67C69Cc2C6507B0598D069Eac`
   - `VITE_RPC_URL=https://arb1.arbitrum.io/rpc`
6. Click "Deploy"

### 3. Test Your Deployed Site

Once deployed, you'll get a URL like:
```
https://react-sdk-demo.vercel.app
```

Test the subscription flow:
- ✅ Connect wallet (should work smoothly)
- ✅ View balances
- ✅ Click subscribe
- ✅ Approve USDC (should work without errors)
- ✅ Complete subscription

## Alternative: Use ngrok for Quick Local HTTPS Testing

If you want to test locally with HTTPS:

```bash
# Install ngrok: https://ngrok.com/download
# Then run:
ngrok http 5173

# You'll get a URL like: https://abc123.ngrok.io
# Use that URL in your browser with MetaMask
```

Note: ngrok free tier gives you a random URL that changes each session.

## Recommended: Vercel

For the best experience, **deploy to Vercel**. It's:
- Free for hobby projects
- Automatic HTTPS
- Custom domain support
- CI/CD from Git
- Perfect for testing Web3 apps

Your users can then access the demo at a real URL and test all features without localhost issues.
