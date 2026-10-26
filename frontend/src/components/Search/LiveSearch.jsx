import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { products } from '../../data/products.js';
import { matchesQuery } from '../../utils/search-helper.js';
import { formatVND } from '../../utils/formatters.js';

export default function LiveSearch({ onSelectProduct, onSearchSubmit, isMobile = false }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Debounced search (300ms) to ensure TBT < 150ms per specification
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const timer = setTimeout(() => {
      const matched = products.filter(p => 
        matchesQuery(p.name, query) ||
        matchesQuery(p.description, query) ||
        matchesQuery(p.meaning, query) ||
        (p.mainFlowers && p.mainFlowers.some(f => matchesQuery(f, query)))
      );
      setResults(matched.slice(0, 5));
      setIsOpen(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setIsOpen(false);
      if (onSearchSubmit) onSearchSubmit(query.trim());
    }
  };

  const handleSelect = (product) => {
    setIsOpen(false);
    if (onSelectProduct) onSelectProduct(product);
  };

  return (
    <div className={`live-search-wrapper ${isMobile ? 'is-mobile' : ''}`} ref={containerRef}>
      <form onSubmit={handleSubmit} className="live-search-form" role="search">
        <label htmlFor={`search-input-${isMobile ? 'm' : 'd'}`} className="sr-only">
          Tìm kiếm mẫu hoa tươi tại Đà Nẵng
        </label>
        <Search className="search-icon" size={18} aria-hidden="true" />
        <input
          id={`search-input-${isMobile ? 'm' : 'd'}`}
          type="text"
          className="search-input"
          placeholder="Tìm hoa sinh nhật, tulip, hồng pastel..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim() && setIsOpen(true)}
          autoComplete="off"
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls="live-search-results"
        />
        {query && (
          <button
            type="button"
            className="search-clear-btn"
            onClick={handleClear}
            aria-label="Xóa từ khóa tìm kiếm"
          >
            <X size={16} />
          </button>
        )}
      </form>

      {/* Dropdown Live Results */}
      {isOpen && (
        <div id="live-search-results" className="live-search-dropdown" role="region" aria-label="Gợi ý tìm kiếm">
          {results.length > 0 ? (
            <>
              <div className="search-dropdown-header">
                <span>Gợi ý mẫu hoa phù hợp ({results.length})</span>
                <span className="search-hint">Nhấn Enter để xem tất cả</span>
              </div>
              <ul className="search-results-list" role="listbox">
                {results.map((item) => (
                  <li
                    key={item.id}
                    className="search-result-item"
                    role="option"
                    onClick={() => handleSelect(item)}
                  >
                    <img
                      src={item.images.main}
                      alt={item.name}
                      className="search-item-img"
                      loading="lazy"
                      width="50"
                      height="65"
                    />
                    <div className="search-item-info">
                      <div className="search-item-name">{item.name}</div>
                      <div className="search-item-meta">
                        <span className="search-item-price">{formatVND(item.price)}</span>
                        {item.badge && <span className="badge badge-rose">{item.badge}</span>}
                      </div>
                    </div>
                    <ArrowRight size={16} className="search-item-arrow" aria-hidden="true" />
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="search-view-all-btn"
                onClick={() => {
                  setIsOpen(false);
                  if (onSearchSubmit) onSearchSubmit(query);
                }}
              >
                <span>Xem tất cả kết quả cho "<strong>{query}</strong>"</span>
                <ArrowRight size={16} />
              </button>
            </>
          ) : (
            <div className="search-empty-state">
              <Sparkles size={24} className="text-muted" style={{ marginBottom: '8px' }} />
              <p>Không tìm thấy mẫu hoa nào khớp với "<strong>{query}</strong>"</p>
              <small className="text-secondary">Thử gõ: <em>lan ho diep, hoa hong, sinh nhat</em></small>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
