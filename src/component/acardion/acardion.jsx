import React, { useState } from 'react'
import './acardion.css'
export const Acardion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const items = [
        "Farobiy IT Academy bu nima?",
        "Farobiy IT Academy a'zoligimga nimalar kiradi?",
        "Farobiy IT Academy dan nimani o'rganishim mumkin?",
        "Sinovim tugagandan keyin nima bo'ladi?",
        "Farobiy IT Academy da dars bera olamanmi?"
    ];
return(
    <div>
        <section className='container'>
        <div className="accordion">
            {items.map((item, index) => (
                <div key={index} className="accordion-item">
                    <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                        <span>{item}</span>
                        <span className="icon">{activeIndex === index ? '-' : '+'}</span>
                    </div>
                    {activeIndex === index && (
                        <div className="accordion-content">
                            <p>  "Farobiy IT Academy da dars bera olamanmi?"</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
       
        </section>
    </div>
)
}

