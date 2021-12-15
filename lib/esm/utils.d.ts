/**
 *
 * @param number {number} - the number to set boundary to
 * @param boundary {{max?: number; min?: number;}} - max and min to bound the number to
 * @returns {number} - final number after bounding it
 */
export declare const boundNumber: (number: number, boundary: {
    max?: number;
    min?: number;
}) => number;
/**
 *
 * @param nums {number[]} numbers to sort
 * @param type {'asc' | 'desc'} ascending or descending
 * @returns {number[]} sorted numbers
 */
export declare const sortNumbers: (nums: number[], type?: "asc" | "desc") => number[];
