// Helpers to tranform
// optional fields received from the client

import { TransformFnParams } from 'class-transformer';
import {
  isBooleanString,
  isNumber,
  isNumberString,
  isPositive,
  isString,
} from 'class-validator';

export abstract class ForQueryParams {
  static forOptionalBoolean(n: TransformFnParams) {
    if (isBooleanString(n.value)) return JSON.parse(n.value);
    if (n.value === null) return undefined;
    return n.value;
  }

  static forOptionalString(n: TransformFnParams) {
    if (n.value === null) return undefined;
    return n.value;
  }

  static forOptionalNumber(n: TransformFnParams) {
    if (isNumberString(n.value)) return JSON.parse(n.value);
    if (n.value === null) return undefined;
    return n.value;
  }
}

/**
 * Optional Fields in DTO
 */
export abstract class ForOptionalField {
  static forString(n: TransformFnParams) {
    if (n.value === null) return undefined;
    return n.value;
  }

  static forNullableString(n: TransformFnParams) {
    if (n.value === null) return undefined;
    if (n.value === '') return null;
    if (isString(n.value)) return n.value.trim();
    return n.value;
  }

  static forBoolean(n: TransformFnParams) {
    if (n.value === null) return undefined;
    return n.value;
  }

  static forNumber(n: TransformFnParams) {
    if (n.value === null) return undefined;
    return n.value;
  }

  static forDate(n: TransformFnParams) {
    if (n.value === null) return undefined;
    return n.value;
  }

  /**
   * Use if ForeignKey is required in DB
   */
  static forForeignKey(n: TransformFnParams) {
    if (n.value === null) return undefined;
    return n.value;
  }

  /**
   * Use if ForeignKey is nullable in DB
   */
  static forNullableForeignKey(n: TransformFnParams) {
    if (isPositive(n.value)) return n.value;
    if (isNumber(n.value)) return null;
    if (n.value === null) return undefined;
    return n.value;
  }

  static forArray(n: TransformFnParams) {
    if (n.value === null) return undefined;
    return n.value;
  }
}
