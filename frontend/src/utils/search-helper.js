/**
 * Search & Input Optimization Utilities
 * Ensures Vietnamese search matches both with and without diacritics
 * Complies with Debounce 300ms requirement (Section 4.3 & 5.2)
 */

/**
 * Remove Vietnamese accents/diacritics and normalize string
 * e.g., "Lan hồ điệp" -> "lan ho diep"
 * @param {string} str 
 * @returns {string}
 */
export function removeVietnameseTones(str) {
  if (!str || typeof str !== 'string') return '';
  
  let normalized = str.toLowerCase();
  
  // Normalize Unicode
  normalized = normalized.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  // Handle specific Vietnamese d/đ
  normalized = normalized.replace(/đ/g, 'd').replace(/Đ/g, 'd');
  
  // Remove special symbols and trim multiple spaces
  normalized = normalized.replace(/[^a-z0-9\s]/gi, ' ').replace(/\s+/g, ' ').trim();
  
  return normalized;
}

/**
 * Check if a target string contains the search query (accent-insensitive)
 * @param {string} target 
 * @param {string} query 
 * @returns {boolean}
 */
export function matchesQuery(target, query) {
  if (!query) return true;
  if (!target) return false;
  
  const cleanTarget = removeVietnameseTones(target);
  const cleanQuery = removeVietnameseTones(query);
  
  return cleanTarget.includes(cleanQuery);
}

/**
 * Debounce helper for search inputs (300ms delay to keep TBT < 150ms)
 * @param {Function} func 
 * @param {number} wait 
 * @returns {Function}
 */
export function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
