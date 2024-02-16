import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  ConsecutiveTransfer as ConsecutiveTransferEvent,
  NFT_AddedPendingBidsForWithdrawal as NFT_AddedPendingBidsForWithdrawalEvent,
  NFT_AuctionTimeUpdated as NFT_AuctionTimeUpdatedEvent,
  NFT_BidAccepted as NFT_BidAcceptedEvent,
  NFT_BidPlaced as NFT_BidPlacedEvent,
  NFT_Minted as NFT_MintedEvent,
  NFT_PendingBidsWithdrawal as NFT_PendingBidsWithdrawalEvent,
  NFT_SetTokenURI as NFT_SetTokenURIEvent,
  NFT_WithdrawCompleted as NFT_WithdrawCompletedEvent,
  Transfer as TransferEvent
} from "../generated/Contract/Contract"
import {
  Approval,
  ApprovalForAll,
  ConsecutiveTransfer,
  NFT_AddedPendingBidsForWithdrawal,
  NFT_AuctionTimeUpdated,
  NFT_BidAccepted,
  NFT_BidPlaced,
  NFT_Minted,
  NFT_PendingBidsWithdrawal,
  NFT_SetTokenURI,
  NFT_WithdrawCompleted,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleConsecutiveTransfer(
  event: ConsecutiveTransferEvent
): void {
  let entity = new ConsecutiveTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fromTokenId = event.params.fromTokenId
  entity.toTokenId = event.params.toTokenId
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFT_AddedPendingBidsForWithdrawal(
  event: NFT_AddedPendingBidsForWithdrawalEvent
): void {
  let entity = new NFT_AddedPendingBidsForWithdrawal(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.bid = event.params.bid
  entity.bidder = event.params.bidder

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFT_AuctionTimeUpdated(
  event: NFT_AuctionTimeUpdatedEvent
): void {
  let entity = new NFT_AuctionTimeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.time = event.params.time
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFT_BidAccepted(event: NFT_BidAcceptedEvent): void {
  let entity = new NFT_BidAccepted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFT_BidPlaced(event: NFT_BidPlacedEvent): void {
  let entity = new NFT_BidPlaced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount
  entity.bidder = event.params.bidder
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFT_Minted(event: NFT_MintedEvent): void {
  let entity = new NFT_Minted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.minter = event.params.minter
  entity.price = event.params.price
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFT_PendingBidsWithdrawal(
  event: NFT_PendingBidsWithdrawalEvent
): void {
  let entity = new NFT_PendingBidsWithdrawal(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.bid = event.params.bid
  entity.bidder = event.params.bidder
  entity.transfer = event.params.transfer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFT_SetTokenURI(event: NFT_SetTokenURIEvent): void {
  let entity = new NFT_SetTokenURI(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.uri = event.params.uri
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFT_WithdrawCompleted(
  event: NFT_WithdrawCompletedEvent
): void {
  let entity = new NFT_WithdrawCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount
  entity.transfer = event.params.transfer
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
