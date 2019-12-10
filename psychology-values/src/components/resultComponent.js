import React from 'react';
import CardComponent from './cardComponent';

  export default function ResultComponent({list}) {
  
    return (
      <div>
          {
            list.map((value, index) => {
              return <CardComponent key={index} title={value.title} info={value.info} />
            })
          }
      </div>
    );
  }