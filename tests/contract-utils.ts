import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/Contract/Contract"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createConsecutiveTransferEvent(
  fromTokenId: BigInt,
  toTokenId: BigInt,
  from: Address,
  to: Address
): ConsecutiveTransfer {
  let consecutiveTransferEvent = changetype<ConsecutiveTransfer>(newMockEvent())

  consecutiveTransferEvent.parameters = new Array()

  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam(
      "fromTokenId",
      ethereum.Value.fromUnsignedBigInt(fromTokenId)
    )
  )
  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam(
      "toTokenId",
      ethereum.Value.fromUnsignedBigInt(toTokenId)
    )
  )
  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return consecutiveTransferEvent
}

export function createNFT_AddedPendingBidsForWithdrawalEvent(
  bid: BigInt,
  bidder: Address
): NFT_AddedPendingBidsForWithdrawal {
  let nftAddedPendingBidsForWithdrawalEvent = changetype<
    NFT_AddedPendingBidsForWithdrawal
  >(newMockEvent())

  nftAddedPendingBidsForWithdrawalEvent.parameters = new Array()

  nftAddedPendingBidsForWithdrawalEvent.parameters.push(
    new ethereum.EventParam("bid", ethereum.Value.fromUnsignedBigInt(bid))
  )
  nftAddedPendingBidsForWithdrawalEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )

  return nftAddedPendingBidsForWithdrawalEvent
}

export function createNFT_AuctionTimeUpdatedEvent(
  time: BigInt,
  tokenId: BigInt
): NFT_AuctionTimeUpdated {
  let nftAuctionTimeUpdatedEvent = changetype<NFT_AuctionTimeUpdated>(
    newMockEvent()
  )

  nftAuctionTimeUpdatedEvent.parameters = new Array()

  nftAuctionTimeUpdatedEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )
  nftAuctionTimeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return nftAuctionTimeUpdatedEvent
}

export function createNFT_BidAcceptedEvent(tokenId: BigInt): NFT_BidAccepted {
  let nftBidAcceptedEvent = changetype<NFT_BidAccepted>(newMockEvent())

  nftBidAcceptedEvent.parameters = new Array()

  nftBidAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return nftBidAcceptedEvent
}

export function createNFT_BidPlacedEvent(
  amount: BigInt,
  bidder: Address,
  tokenId: BigInt
): NFT_BidPlaced {
  let nftBidPlacedEvent = changetype<NFT_BidPlaced>(newMockEvent())

  nftBidPlacedEvent.parameters = new Array()

  nftBidPlacedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  nftBidPlacedEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )
  nftBidPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return nftBidPlacedEvent
}

export function createNFT_MintedEvent(
  minter: Address,
  price: BigInt,
  tokenId: BigInt
): NFT_Minted {
  let nftMintedEvent = changetype<NFT_Minted>(newMockEvent())

  nftMintedEvent.parameters = new Array()

  nftMintedEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  nftMintedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  nftMintedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return nftMintedEvent
}

export function createNFT_PendingBidsWithdrawalEvent(
  bid: BigInt,
  bidder: Address,
  transfer: boolean
): NFT_PendingBidsWithdrawal {
  let nftPendingBidsWithdrawalEvent = changetype<NFT_PendingBidsWithdrawal>(
    newMockEvent()
  )

  nftPendingBidsWithdrawalEvent.parameters = new Array()

  nftPendingBidsWithdrawalEvent.parameters.push(
    new ethereum.EventParam("bid", ethereum.Value.fromUnsignedBigInt(bid))
  )
  nftPendingBidsWithdrawalEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )
  nftPendingBidsWithdrawalEvent.parameters.push(
    new ethereum.EventParam("transfer", ethereum.Value.fromBoolean(transfer))
  )

  return nftPendingBidsWithdrawalEvent
}

export function createNFT_SetTokenURIEvent(
  uri: string,
  tokenId: BigInt
): NFT_SetTokenURI {
  let nftSetTokenUriEvent = changetype<NFT_SetTokenURI>(newMockEvent())

  nftSetTokenUriEvent.parameters = new Array()

  nftSetTokenUriEvent.parameters.push(
    new ethereum.EventParam("uri", ethereum.Value.fromString(uri))
  )
  nftSetTokenUriEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return nftSetTokenUriEvent
}

export function createNFT_WithdrawCompletedEvent(
  amount: BigInt,
  transfer: boolean,
  tokenId: BigInt
): NFT_WithdrawCompleted {
  let nftWithdrawCompletedEvent = changetype<NFT_WithdrawCompleted>(
    newMockEvent()
  )

  nftWithdrawCompletedEvent.parameters = new Array()

  nftWithdrawCompletedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  nftWithdrawCompletedEvent.parameters.push(
    new ethereum.EventParam("transfer", ethereum.Value.fromBoolean(transfer))
  )
  nftWithdrawCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return nftWithdrawCompletedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
