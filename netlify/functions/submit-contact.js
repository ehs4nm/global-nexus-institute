const { neon } = require('@neondatabase/serverless');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    // Parse the request body
    const { name, email, message } = JSON.parse(event.body);

    // Basic validation
    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name and email are required' }),
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email format' }),
      };
    }

    // Name length validation
    if (name.length < 2 || name.length > 100) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name must be between 2 and 100 characters' }),
      };
    }

    // Message length validation (if provided)
    if (message && message.length > 1000) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Message must be less than 1000 characters' }),
      };
    }

    // Connect to Neon database
    const sql = neon(process.env.DATABASE_URL);

    // Insert contact submission into database
    await sql`
      INSERT INTO contacts (name, email, message, created_at)
      VALUES (${name}, ${email}, ${message || null}, NOW())
    `;

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        success: true,
        message: 'Contact form submitted successfully' 
      }),
    };

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to submit contact form. Please try again later.' 
      }),
    };
  }
};
