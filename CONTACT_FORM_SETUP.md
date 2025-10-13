# Contact Form Setup Guide

This guide walks you through setting up the secure contact form with Neon database integration on Netlify.

## Architecture Overview

The contact form uses:
- **Frontend**: React component with form validation
- **Backend**: Netlify serverless function
- **Database**: Neon PostgreSQL database
- **Security**: Environment variables, input validation, parameterized queries

## Setup Steps

### 1. Database Setup (Neon)

1. Go to your Neon dashboard: https://console.neon.tech
2. Select your database: `aged-firefly-28542250`
3. Open the SQL Editor
4. Run the SQL schema from `database/schema.sql` to create the contacts table

### 2. Get Your Database Connection String

1. In your Neon dashboard, navigate to your database
2. Click on "Connection Details"
3. Copy the connection string (it should look like):
   ```
   postgresql://username:password@host.neon.tech/aged-firefly-28542250?sslmode=require
   ```

### 3. Configure Netlify Environment Variables

1. Go to your Netlify dashboard
2. Navigate to: **Site settings** → **Environment variables**
3. Add a new environment variable:
   - **Key**: `DATABASE_URL`
   - **Value**: Your Neon connection string (from step 2)
   - **Scopes**: Check both "Production" and "Deploy previews"
4. Save the variable

### 4. Deploy to Netlify

The project is already configured with:
- ✅ `netlify.toml` - Build configuration
- ✅ `netlify/functions/submit-contact.js` - Serverless function
- ✅ Updated contact form component with validation

**Option A: Automatic Deploy (if connected to Git)**
1. Push your changes to your repository
2. Netlify will automatically deploy

**Option B: Manual Deploy**
1. Run: `npm run build`
2. Drag and drop the `public` folder to Netlify

### 5. Test the Contact Form

1. Visit your deployed site
2. Navigate to the contact section
3. Fill out the form with:
   - Name (required, 2-100 characters)
   - Email (required, valid format)
   - Message (optional, max 1000 characters)
4. Submit the form
5. You should see a success message: "Thank you! We'll be in touch soon."

### 6. Verify Data in Database

1. Go to your Neon dashboard
2. Open SQL Editor
3. Run: `SELECT * FROM contacts ORDER BY created_at DESC;`
4. You should see your test submission

## Security Features

✅ **Server-side validation** - All inputs validated in the serverless function
✅ **SQL injection protection** - Using parameterized queries
✅ **Rate limiting** - Handled by Netlify Functions
✅ **HTTPS only** - Enforced by Netlify
✅ **Environment variables** - Database credentials never exposed to client
✅ **Input sanitization** - Length limits and format validation
✅ **Security headers** - Configured in netlify.toml

## Form Validation Rules

- **Name**: Required, 2-100 characters
- **Email**: Required, valid email format
- **Message**: Optional, max 1000 characters

## Troubleshooting

### Form submission fails
1. Check Netlify function logs: **Site overview** → **Functions** → **submit-contact**
2. Verify DATABASE_URL is set correctly in environment variables
3. Ensure the contacts table exists in your database

### Database connection error
1. Verify your Neon database is active (not paused)
2. Check the connection string format
3. Ensure SSL mode is enabled: `?sslmode=require`

### Function not found (404)
1. Verify `netlify/functions/submit-contact.js` exists
2. Check `netlify.toml` has correct functions directory
3. Redeploy the site

## Local Development

To test locally:

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Create `.env` file with your DATABASE_URL:
   ```
   DATABASE_URL=your_neon_connection_string
   ```

3. Run local development server:
   ```bash
   netlify dev
   ```

4. The site will be available at `http://localhost:8888`

## Database Schema

```sql
contacts (
  id: SERIAL PRIMARY KEY
  name: VARCHAR(100) NOT NULL
  email: VARCHAR(255) NOT NULL
  message: TEXT
  created_at: TIMESTAMP WITH TIME ZONE
  updated_at: TIMESTAMP WITH TIME ZONE
)
```

## Support

For issues or questions:
- Check Netlify function logs for backend errors
- Check browser console for frontend errors
- Verify environment variables are set correctly
