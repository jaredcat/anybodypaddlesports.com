import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const email = formData.get('email') as string;

    // Validate email
    if (!email) {
      return new Response(
        JSON.stringify({
          error: 'Email is required',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          error: 'Invalid email address',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    // ConvertKit API integration
    const convertKitApiKey = import.meta.env.CONVERTKIT_API_KEY;
    const convertKitFormId = import.meta.env.CONVERTKIT_FORM_ID;

    if (!convertKitApiKey || !convertKitFormId) {
      console.error('ConvertKit credentials not configured');
      return new Response(
        JSON.stringify({
          error: 'Newsletter service not configured',
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    // Subscribe to ConvertKit
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${convertKitFormId}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: convertKitApiKey,
          email: email,
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error('ConvertKit API error:', errorData);
      return new Response(
        JSON.stringify({
          error: 'Failed to subscribe to newsletter',
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    return new Response(
      JSON.stringify({
        message: 'Successfully subscribed to newsletter',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return new Response(
      JSON.stringify({
        error: 'Internal server error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
};
