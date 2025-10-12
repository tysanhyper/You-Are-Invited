import { Handler } from '@netlify/functions';
import { PostgresStorage } from '../../server/storage';
import { insertRsvpSchema } from '../../shared/rsvpSchema';
import { z } from 'zod';

const storage = new PostgresStorage();

export const handler: Handler = async (event: any, context: any) => {
  if (event.httpMethod === 'GET') {
    try {
      const allRsvps = await storage.getAllRsvps();
      return {
        statusCode: 200,
        body: JSON.stringify(allRsvps),
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal server error' }),
      };
    }
  } else if (event.httpMethod === 'POST') {
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
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }
};
