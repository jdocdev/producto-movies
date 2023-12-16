import '/src/components/atoms/productoDetallesAcordeon.scss'
import { useState } from 'react';

const ProductoDetallesAcordeon = ({ title, content }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={handleToggle}>
                <h3>{title}</h3><i className="bi bi-caret-down-fill"></i>
            </div>
            {isExpanded && (
                <div className="accordion-content">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

export default ProductoDetallesAcordeon;