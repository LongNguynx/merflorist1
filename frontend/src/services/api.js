/**
 * API Service for Mer Florist
 * Communicates with Node.js Express Backend
 * Falls back to local datasets if backend is temporarily unreachable
 */

import { products, shopInfo } from '../data/products.js';
import { megaMenuGroups, quickOccasions, filterOptions } from '../data/categories.js';
import { customerReviews } from '../data/reviews.js';
import { bouquetBuilderSteps } from '../data/bouquet-builder-data.js';
import { matchesQuery } from '../utils/search-helper.js';

const API_BASE = '/api';

export async function fetchHealth() {
  try {
    const res = await fetch(`${API_BASE}/health`);
    if (res.ok) return await res.json();
  } catch (e) {
    console.warn('API health check fallback:', e.message);
  }
  return { status: 'fallback', databaseConnected: false };
}

export async function fetchShopInfo() {
  try {
    const res = await fetch(`${API_BASE}/shop-info`);
    if (res.ok) {
      const data = await res.json();
      return data.data;
    }
  } catch (e) {
    console.warn('Using local shopInfo fallback');
  }
  return shopInfo;
}

export async function fetchCategories() {
  try {
    const res = await fetch(`${API_BASE}/categories`);
    if (res.ok) {
      const data = await res.json();
      return data.data;
    }
  } catch (e) {
    console.warn('Using local categories fallback');
  }
  return { megaMenuGroups, quickOccasions, filterOptions };
}

export async function fetchProducts(filters = {}) {
  try {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, val]) => {
      if (val !== undefined && val !== null && val !== '') {
        params.append(key, val);
      }
    });

    const res = await fetch(`${API_BASE}/products?${params.toString()}`);
    if (res.ok) {
      const json = await res.json();
      return json;
    }
  } catch (e) {
    console.warn('Using local products filtering fallback');
  }

  // Fallback filtering
  let result = [...products];
  if (filters.category && filters.category !== 'all') {
    result = result.filter(p => p.category === filters.category);
  }
  if (filters.occasion && filters.occasion !== 'all') {
    result = result.filter(p => p.occasion === filters.occasion);
  }
  if (filters.flower_type && filters.flower_type !== 'all') {
    result = result.filter(p => p.flowerType === filters.flower_type);
  }
  if (filters.tone && filters.tone !== 'all') {
    result = result.filter(p => p.tone === filters.tone);
  }
  if (filters.min_price) {
    result = result.filter(p => p.price >= parseInt(filters.min_price, 10));
  }
  if (filters.max_price) {
    result = result.filter(p => p.price <= parseInt(filters.max_price, 10));
  }
  if (filters.q) {
    result = result.filter(p => matchesQuery(p.name, filters.q) || matchesQuery(p.description, filters.q));
  }
  if (filters.sort === 'price-asc') {
    result.sort((a, b) => a.price - b.price);
  } else if (filters.sort === 'price-desc') {
    result.sort((a, b) => b.price - a.price);
  }

  return { success: true, total: result.length, data: result };
}

export async function fetchProductById(idOrSlug) {
  try {
    const res = await fetch(`${API_BASE}/products/${idOrSlug}`);
    if (res.ok) {
      const json = await res.json();
      return json;
    }
  } catch (e) {
    console.warn('Using local product detail fallback');
  }

  const product = products.find(p => p.id === idOrSlug || p.slug === idOrSlug);
  const related = products.filter(p => p.id !== idOrSlug).slice(0, 4);
  return { success: !!product, data: product, related };
}

export async function fetchReviews() {
  try {
    const res = await fetch(`${API_BASE}/reviews`);
    if (res.ok) {
      const json = await res.json();
      return json.data;
    }
  } catch (e) {
    console.warn('Using local reviews fallback');
  }
  return customerReviews;
}

export async function fetchBouquetBuilderOptions() {
  try {
    const res = await fetch(`${API_BASE}/bouquet-builder/options`);
    if (res.ok) {
      const json = await res.json();
      return json.steps;
    }
  } catch (e) {
    console.warn('Using local bouquetBuilderSteps fallback');
  }
  return bouquetBuilderSteps;
}

export async function createOrder(orderPayload) {
  try {
    const res = await fetch(`${API_BASE}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderPayload)
    });
    return await res.json();
  } catch (e) {
    // Fallback simulation
    return {
      success: true,
      order: {
        orderCode: `MER-${Date.now().toString().slice(-6)}`,
        ...orderPayload,
        status: 'pending',
        createdAt: new Date().toISOString()
      }
    };
  }
}
