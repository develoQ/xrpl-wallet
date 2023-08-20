import { WalletClient } from '@xrpl-wallet/core'
import { LocalAdaptor } from '@xrpl-wallet/adaptors'

const adaptor = new LocalAdaptor({ seed: 'sEd7eh36RfjZMxfN6zJ72wT9bCF3FCV' })
const walletClient = new WalletClient(adaptor, { server: 'testnet' })

const main = async () => {
  await walletClient.signIn()
  console.log(await walletClient.getAddress())
  console.log(await walletClient.getNetwork())

  const tx = await walletClient.autofill({
    TransactionType: 'AccountSet',
  })
  const result = await walletClient.sign(tx)
  console.log(result)
  const submitResult = await walletClient.submit(result!.tx_blob)
  console.log(submitResult)
}

main()