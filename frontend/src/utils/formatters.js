/**
 * Mer Florist Utility Formatters
 */

/**
 * Format currency into standard Vietnamese Dong string (e.g., 380.000đ)
 * @param {number} amount 
 * @returns {string}
 */
export function formatVND(amount) {
  if (typeof amount !== 'number' || isNaN(amount)) return '0đ';
  return new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
}

/**
 * Calculate percentage discount
 * @param {number} original 
 * @param {number} current 
 * @returns {number|null}
 */
export function calculateDiscount(original, current) {
  if (!original || original <= current) return null;
  return Math.round(((original - current) / original) * 100);
}

/**
 * Truncate string with ellipsis
 * @param {string} str 
 * @param {number} maxLen 
 * @returns {string}
 */
export function truncate(str, maxLen = 60) {
  if (!str) return '';
  return str.length > maxLen ? str.substring(0, maxLen).trim() + '...' : str;
}
