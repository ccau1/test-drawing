/**
 *
 * @param number {number} - the number to set boundary to
 * @param boundary {{max?: number; min?: number;}} - max and min to bound the number to
 * @returns {number} - final number after bounding it
 */
export const boundNumber = (
  number: number,
  boundary: { max?: number; min?: number }
) => {
  return Math.max(
    Math.min(number, boundary.max || number),
    boundary.min || number
  );
};

/**
 *
 * @param nums {number[]} numbers to sort
 * @param type {'asc' | 'desc'} ascending or descending
 * @returns {number[]} sorted numbers
 */
export const sortNumbers = (nums: number[], type: "asc" | "desc" = "asc") => {
  return nums.sort((a, b) => (type === "asc" ? a - b : b - a));
};
