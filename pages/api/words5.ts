import type { NextApiRequest, NextApiResponse } from 'next'
import words5 from '../../data/words5'

type Data = string[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(Object.keys(words5))
}
