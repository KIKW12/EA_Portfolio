// // pages/api/contact.ts
// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   try {
//     const { name, email, message } = req.body;

//     // Add your email sending logic here
//     // Example: use nodemailer, SendGrid, or any other email service

//     res.status(200).json({ message: 'Message sent successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to send message' });
//   }
// }