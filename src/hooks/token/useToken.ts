import { Contract } from '@ethersproject/contracts'

import { useActiveWeb3React } from 'hooks'
import { TOKEN_ADDRESS } from 'constants/'
import TOKEN_ABI from 'abis/token.json'
import { useContract } from 'hooks/useContract'

export function useTokenContract(): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(
    chainId ? TOKEN_ADDRESS[chainId] : undefined,
    TOKEN_ABI,
    true
  )
}
