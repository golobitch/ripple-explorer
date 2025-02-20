export interface IssuedCurrency {
  currency: string
  issuer: string
}

export interface IssuedCurrencyAmount extends IssuedCurrency {
  value: string
}

export type Amount = IssuedCurrencyAmount | string

export interface XChainBridge {
  LockingChainDoor: string
  LockingChainIssue: 'XRP' | IssuedCurrency
  IssuingChainDoor: string
  IssuingChainIssue: 'XRP' | IssuedCurrency
}

export interface XChainAddAttestation {
  TransactionType: 'XChainAddAttestation'
  XChainAttestationBatch: {
    XChainBridge: XChainBridge
    XChainClaimAttestationBatch: Array<{
      XChainClaimAttestationBatchElement: {
        Account: string
        Amount: Amount
        AttestationRewardAccount: string
        Destination: string
        PublicKey: string
        Signature: string
        WasLockingChainSend: 0 | 1
        XChainClaimID: string
      }
    }>
    XChainCreateAccountAttestationBatch: Array<{
      XChainCreateAccountAttestationBatchElement: {
        Account: string
        Amount: Amount
        AttestationRewardAccount: string
        Destination: string
        PublicKey: string
        Signature: string
        WasLockingChainSend: 0 | 1
        XChainAccountCreateCount: string
      }
    }>
  }
}

type ExplorerAmount =
  | string
  | {
      issuer?: string
      currency: string
      amount: number
    }

export interface ClaimAttestationInstructions {
  send: ExplorerAmount
  account: string
  destination: string
  claimId: string
}

export interface AccountCreateAttestationInstructions {
  send: ExplorerAmount
  account: string
  destination: string
}

export interface XChainAddAttestationInstructions {
  lockingDoor: string
  lockingIssue: 'XRP' | IssuedCurrency
  issuingDoor: string
  issuingIssue: 'XRP' | IssuedCurrency
  claimAttestations: ClaimAttestationInstructions[]
  accountCreateAttestations: AccountCreateAttestationInstructions[]
}
