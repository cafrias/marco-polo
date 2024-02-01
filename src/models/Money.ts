import { DEFAULT_MONEY_DIVISOR } from "../config";
import type { SupportedCurrencies } from "./SupportedCurrencies";

export interface SerializedMoney {
  readonly currency: SupportedCurrencies;
  readonly amount: number;
  readonly divisor?: number;
}

export class Money {
  public readonly currency: SupportedCurrencies;

  private readonly amount: number;

  /**
   * The number by which you have to divide the amount in order to obtain the unit
   * of valor of the currency.
   *
   * For example, instead of representing 1.52 USD in amount using 1.52 you could use
   * an integer 152 and set the divisor to 100. This way you remove the floating point
   * calculation errors.
   */
  private readonly divisor: number;

  constructor({
    currency,
    amount,
    divisor = DEFAULT_MONEY_DIVISOR,
  }: {
    currency: SupportedCurrencies;
    amount: number;
    divisor?: number;
  }) {
    this.currency = currency;
    this.amount = amount * divisor;
    this.divisor = divisor;
  }

  getAmount(): number {
    return this.amount / this.divisor;
  }
}
