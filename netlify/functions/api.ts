import { Handler } from '@netlify/functions';
import { storage } from '../../server/storage';
import { insertRsvpSchema } from '../../shared/rsvpSchema';
import { z } from 'zod';

export const handler: Handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const validatedData = insertRsvpSchema.parse(body);
    const rsvp = await storage.createRsvp(validatedData);
    return {
      statusCode: 200,
      body: JSON.stringify(rsvp),
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: error.errors }),
      };
    } else {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal server error' }),
      };
    }
  }
};
