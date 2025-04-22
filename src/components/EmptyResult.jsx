import React from 'react';
import confused from '../components/confused.png';

function EmptyResult() {
  return (
    <div className="empty-result" style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h4>К сожалению, по вашему запросу ничего не найдено...</h4>
      <img 
        src={confused} 
        alt="Ничего не найдено" 
        style={{ width: '555px', marginTop: '1rem' }} 
      />
    </div>
  );
}

export { EmptyResult };