"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortNumbers = exports.boundNumber = void 0;
/**
 *
 * @param number {number} - the number to set boundary to
 * @param boundary {{max?: number; min?: number;}} - max and min to bound the number to
 * @returns {number} - final number after bounding it
 */
var boundNumber = function (number, boundary) {
    return Math.max(Math.min(number, boundary.max || number), boundary.min || number);
};
exports.boundNumber = boundNumber;
/**
 *
 * @param nums {number[]} numbers to sort
 * @param type {'asc' | 'desc'} ascending or descending
 * @returns {number[]} sorted numbers
 */
var sortNumbers = function (nums, type) {
    if (type === void 0) { type = "asc"; }
    return nums.sort(function (a, b) { return (type === "asc" ? a - b : b - a); });
};
exports.sortNumbers = sortNumbers;
