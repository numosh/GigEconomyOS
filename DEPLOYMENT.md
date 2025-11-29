# Deployment Guide - Railway

This guide will help you deploy GIGECONOMY OS to Railway for testing.

## Prerequisites

- GitHub account with access to the repository
- Railway account (sign up at https://railway.app)

## Quick Deploy to Railway

### Option 1: Deploy from GitHub (Recommended)

1. **Go to Railway**
   - Visit https://railway.app
   - Click "Start a New Project"

2. **Deploy from GitHub**
   - Select "Deploy from GitHub repo"
   - Choose `numosh/GigEconomyOS`
   - Railway will automatically detect the configuration

3. **Configure Environment**
   - No environment variables needed for initial deployment
   - Railway will automatically assign a PORT

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Railway will provide a public URL

### Option 2: Deploy with Railway CLI

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Link to project (first time)
railway init

# Deploy
railway up
```

## Build Configuration

The project includes `railway.json` with the following settings:

```json
{
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "cd apps/web && npm install && npm run build"
  },
  "deploy": {
    "startCommand": "cd apps/web && npm run preview",
    "healthcheckPath": "/",
    "restartPolicyType": "ON_FAILURE"
  }
}
```

## What Gets Deployed

- **React PWA Application** - Fully functional web app
- **Service Worker** - Offline support and caching
- **PWA Icons** - 40+ icons for all devices
- **Mock Data** - Complete Indonesian gig worker simulation

## After Deployment

1. **Access Your App**
   - Railway will provide a URL like: `https://your-app.railway.app`
   - The app will be live and accessible

2. **Test PWA Installation**
   - Visit the URL on mobile
   - Install as PWA from browser menu
   - Test offline functionality

3. **Test Features**
   - ✅ Marketplace: Accept gigs, view AI schedule
   - ✅ Support: Withdraw funds, change insurance plans
   - ✅ Collective: Vote on campaigns, join unions, donate to legal cases

## Troubleshooting

### Build Fails

Check the Railway logs for errors:
```bash
railway logs
```

### App Not Loading

1. Verify the PORT environment variable is set automatically by Railway
2. Check that the preview command uses `--host 0.0.0.0`
3. Ensure build completed successfully

### PWA Not Installing

1. PWA requires HTTPS (Railway provides this automatically)
2. Check browser console for service worker errors
3. Verify manifest.json is accessible at `/manifest.webmanifest`

## Custom Domain (Optional)

1. Go to Railway project settings
2. Click "Add Domain"
3. Choose custom domain or use Railway subdomain
4. Update DNS settings if using custom domain

## Environment Variables (Future)

When connecting to real APIs, add these in Railway dashboard:

```
API_URL=https://your-backend-api.com
ENABLE_ANALYTICS=true
```

## Monitoring

- **Railway Dashboard**: View logs, metrics, and deployments
- **Health Check**: Automatic health checks on `/`
- **Auto Restart**: Restarts on failure (max 10 retries)

## Cost

- Railway offers 500 hours free per month
- This app uses minimal resources
- Estimated cost: $0-5/month depending on traffic

## Next Steps

After successful deployment:

1. Share the Railway URL for testing
2. Test on multiple devices (iOS, Android, Desktop)
3. Collect user feedback
4. Prepare for backend API integration

---

**Deployed URL will be**: `https://gigeconomyos-production.up.railway.app` (or similar)

Test it thoroughly and gather feedback! 🚀
