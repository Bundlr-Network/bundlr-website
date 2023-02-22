import type { NextApiRequest, NextApiResponse } from 'next'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import allowCors from '@/utils/allowCORS';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const URL_PREFIX = process.env.ENDPOINT_URL

  const { tweet } = req.body;

  if (!tweet) {
    res.status(400).send('')
    return
  }

  try {
    const raw = await fetch(`${URL_PREFIX}/tweet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: tweet
    })

    res.status(raw.status).send('')
  } catch (error) {
    res.status(500).send(error)
  }
}


export default allowCors(handler)