import React, { useState } from 'react';
import styles from '../styles/Filter.module.css';

const Filter = () => {
  const [filters, setFilters] = useState({
    customizable: false,
    idealFor: [],
    occasion: [],
    work: [],
    fabric: [],
    segment: [],
    suitableFor: [],
    rawMaterials: [],
    pattern: [],
  });
  const [openSections, setOpenSections] = useState({
    customizable: false,
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCheckboxChange = (section, value) => {
    setFilters((prev) => {
      const newValues = prev[section].includes(value)
        ? prev[section].filter((v) => v !== value)
        : [...prev[section], value];
      return { ...prev, [section]: newValues };
    });
  };

  const unselectAll = (section) => {
    setFilters((prev) => ({ ...prev, [section]: [] }));
  };

  const filterCategories = {
    customizable: { title: 'Customizable'},
    idealFor: { title: 'Ideal For', values: ['Men (65)', 'Women (63)', 'Baby & Kids (59)'] },
    occasion: { title: 'Occasion', values: ['Rainy Season (1)', 'Casual (3)', 'Wedding (1)', 'Party (10)', 'Regular (2)'] },
    work: { title: 'Work', values: ['French Knot (2)', 'Zardosi (2)', 'Fancy (1)', 'Embroidery (1)'] },
    fabric: { title: 'Fabric', values: ['Muslin (1)', 'Satin Blend (1)', 'Satin (1)', 'Tericoat (1)', 'Linen (5)', 'Raw Silk (2)', 'Cotton (13)', 'Silk (2)', 'Cotton Silk (3)'] },
    segment: { title: 'Segment', values: ['Silver (4)', 'Ethnic (2)', 'Contemporary (11)'] },
    suitableFor: { title: 'Suitable For', values: ['Formal Wear (1)', 'Western Wear (1)', 'Casual Wear (7)'] },
    rawMaterials: { title: 'Raw Materials', values: ['Wool (2)', 'Silk (2)', 'Leather (2)', 'Cotton (5)', 'Cellulosic Fibers (4)'] },
    pattern: { title: 'Pattern', values: ['Windowpane (2)', 'Pinstripes (1)', 'Solid (2)', 'Chalk Stripes (2)', 'Slim Fit (1)', 'Tartan (1)'] },
  };

  return (
    <aside className={styles.filter}>
      {Object.entries(filterCategories).map(([key, { title, values }]) => (
        <div key={key} className={styles.filterSection}>
          <div className={styles.filterTitle} onClick={() => toggleSection(key)}>
            <span>{title}</span>
            <span className={styles.arrow}></span>
          </div>
          {openSections[key] && (
            <div className={styles.filterValues}>
              {key === 'customizable' ? (
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={filters.customizable}
                    onChange={() => handleCheckboxChange(key, 'Customizable')}
                  />
                  
                </label>
              ) : (
                <>
                  <div className={styles.allOption} onClick={() => handleCheckboxChange(key, 'All')}>
                    All
                  </div>
                  <div className={styles.unselectAll} onClick={() => unselectAll(key)}>
                    Unselect All
                  </div>
                  {values.map((value) => (
                    <label key={value} className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={filters[key].includes(value)}
                        onChange={() => handleCheckboxChange(key, value)}
                      />
                      {value}
                    </label>
                  ))}
                </>
              )}
            </div>
          )}
          {key !== 'customizable' && <div className={styles.separator}></div>}
        </div>
      ))}
    </aside>
  );
};

export default Filter;