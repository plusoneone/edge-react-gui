/**
 * Created by paul on 8/16/17.
 */
// @flow

import type {AbcDenomination, AbcMetaToken} from 'airbitz-core-types'

export class GuiWallet {
  id: string
  type: string
  name: string
  primaryNativeBalance: string
  nativeBalances: { [currencyCode: string]: string }
  currencyNames: { [currencyCode: string]: string }
  currencyCode: string
  isoFiatCurrencyCode: string
  fiatCurrencyCode: string
  denominations: Array<AbcDenomination>
  allDenominations: { [currencyCode: string]: { [denomination: string]: AbcDenomination } }
  symbolImage: string
  metaTokens: Array<AbcMetaToken>
  constructor (
    id: string,
    type: string,
    name: string,
    primaryNativeBalance: string,
    nativeBalances: { [currencyCode: string]: string },
    currencyNames: { [currencyCode: string]: string },
    currencyCode: string,
    isoFiatCurrencyCode: string,
    fiatCurrencyCode: string,
    denominations: Array<AbcDenomination>,
    allDenominations: { [currencyCode: string]: { [denomination: string]: AbcDenomination } },
    symbolImage: string,
    metaTokens: Array<AbcMetaToken>,
  ) {
    this.id = id
    this.type = type
    this.name = name
    this.primaryNativeBalance = primaryNativeBalance
    this.nativeBalances = nativeBalances
    this.currencyNames = currencyNames
    this.currencyCode = currencyCode
    this.isoFiatCurrencyCode = isoFiatCurrencyCode
    this.fiatCurrencyCode = fiatCurrencyCode
    this.denominations = denominations
    this.allDenominations = allDenominations
    this.symbolImage = symbolImage
    this.metaTokens = metaTokens
  }
}

export type GuiDenomination = {
  name: string,
  symbol: string,
  multiplier: string,
  precision: number
}

export type GuiCurrencyInfo = {
  displayCurrencyCode: string,
  exchangeCurrencyCode: string,
  displayDenomination: GuiDenomination,
  exchangeDenomination: GuiDenomination
}