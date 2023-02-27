import type { NextApiRequest, NextApiResponse } from 'next'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import allowCors from '@/utils/allowCORS'

type Data = {
  canClaim: boolean | null
  error: string | null
}

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const URL_PREFIX = process.env.ENDPOINT_URL

  const { wallet } = req.query

  if (!wallet) {
    res.status(400).json({
      canClaim: null,
      error: 'Missing wallet address'
    })
    return
  }

  try {
    const raw = await fetch(`${URL_PREFIX}/check/${wallet}`)

    const response = await raw.json()

    res.send({
      canClaim: response,
      error: null
    })
  } catch (error) {
    res.status(500).send({
      canClaim: null,
      error:
        'Could not estabilish a connection with the faucet, please try again later.'
    })
  }
}

export default allowCors(handler)
