# Form Setup Guide for Vercel

This guide explains how to set up the contact form and newsletter on your Vercel deployment.

## Recommended Setup: Formspree + ConvertKit

### Contact Form Setup (Formspree) - FREE TIER: 50 submissions/month

1. **Create a Formspree account**: <https://formspree.io>
2. **Create a new form**:
   - Click "New Form"
   - Add your email address where you want to receive contact form submissions
   - Copy the form endpoint (it will look like `https://formspree.io/f/abcd1234`)
3. **Update the contact form**:
   - Edit `src/pages/contact.astro`
   - Replace `YOUR_FORM_ID` in the form action with your actual Formspree form ID:

     ```html
     <form action="https://formspree.io/f/YOUR_ACTUAL_FORM_ID" method="POST">
     ```

4. **Update the redirect URL** (optional):
   - In the same file, update the `_next` hidden input with your actual domain:

     ```html
     <input type="hidden" name="_next" value="https://yourdomain.com/contact?success=true" />
     ```

### Newsletter Setup (ConvertKit) - FREE TIER: Up to 10,000 subscribers

1. **Create a ConvertKit account**: <https://convertkit.com>
2. **Create a form**:
   - Go to Grow → Landing Pages & Forms
   - Click "Create New" → "Form"
   - Choose "Inline" form type
   - Design your form (you can use their default design)
   - Publish the form and note the Form ID from the URL (e.g., `1234567`)
3. **Get your API key**:
   - Go to Settings → Advanced → API Keys
   - Copy your API Key (starts with something like `c4f8b2a1...`)
4. **Set environment variables in Vercel**:
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings → Environment Variables
   - Add these variables:

     ```
     CONVERTKIT_API_KEY=your_api_key_here
     CONVERTKIT_FORM_ID=your_form_id_here
     ```

   - Set them for Production, Preview, and Development environments

## Testing Your Setup

### 1. Test Contact Form (Formspree)

- Deploy your changes to Vercel
- Go to your contact page
- Fill out and submit the form
- You should be redirected back with a success message
- Check your email for the form submission

### 2. Test Newsletter (ConvertKit)

- Make sure your environment variables are set in Vercel
- Submit the newsletter form
- Check your ConvertKit dashboard for the new subscriber
- Check Vercel Functions logs if there are issues

## Local Development

For local testing, create a `.env` file in your project root:

```
CONVERTKIT_API_KEY=your_api_key_here
CONVERTKIT_FORM_ID=your_form_id_here
```

Run `npm run dev` and test both forms.

## Formspree Configuration Options

In your Formspree dashboard, you can configure:

- **Custom thank you page**: Instead of redirecting back to your site
- **Email notifications**: Customize how you receive submissions
- **Auto-reply**: Send automatic replies to form submitters
- **Spam protection**: Enable reCAPTCHA or other spam filters
- **File uploads**: Allow users to attach files
- **Form validation**: Set required fields and validation rules

## ConvertKit Configuration Options

In your ConvertKit dashboard, you can:

- **Create email sequences**: Set up automated welcome emails
- **Design emails**: Create beautiful newsletters
- **Segment subscribers**: Organize subscribers into different groups
- **Analytics**: Track open rates, click rates, etc.
- **Integrations**: Connect to other tools you use

## Troubleshooting

### Contact Form Issues

- **Form not submitting**: Check the Formspree form ID is correct
- **Not receiving emails**: Check your Formspree account and email settings
- **Redirect not working**: Verify the `_next` URL is correct

### Newsletter Issues

- **"Newsletter service not configured" error**: Check environment variables in Vercel
- **Subscribers not appearing**: Verify the ConvertKit Form ID and API key
- **Check Vercel Functions logs**: Go to Vercel dashboard → Functions → View logs

### General

- **Environment variables**: Make sure they're set for all environments in Vercel
- **Redeploy**: After adding environment variables, redeploy your site
- **Case sensitivity**: API keys and form IDs are case-sensitive

## Upgrade Paths

### Formspree

- **Gold Plan ($10/month)**: 1,000 submissions/month, file uploads, advanced features
- **Platinum Plan ($40/month)**: Unlimited submissions, priority support

### ConvertKit

- **Creator Plan ($9/month)**: Starts when you have 300+ subscribers
- More advanced automation and features

This setup gives you professional contact and newsletter functionality with generous free tiers!
