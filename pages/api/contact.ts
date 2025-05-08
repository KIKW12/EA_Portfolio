// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // For security purposes, your form submission is handled via EmailJS client-side
    // This endpoint is left for potential future enhancements or analytics
    res.status(200).json({ message: 'OK' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      message: 'Failed to process request',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}