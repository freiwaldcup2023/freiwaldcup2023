import * as React from 'react';
import { useEffect, useState } from 'react';
import { Carousel, Figure } from 'react-bootstrap';
import { Sponsor } from '../interfaces/types';

function AccordionComponent () {

    const sponsors: Sponsor[] = [
      { source: 'sponsors/Aumayr.png', name: 'Ford Aumayr' },
      { source: 'sponsors/Hitthaller.png', name: 'Hitthaller' },
      { source: 'sponsors/HochTiefbau.png', name: 'Hoch Tiefbau' },
      { source: 'sponsors/Kroiss.png', name: 'Auto Kroiss' },
      { source: 'sponsors/LinzAG.png', name: 'Linz AG' },
      { source: 'sponsors/Liwest.png', name: 'Liwest' },
      { source: 'sponsors/Raiffeisen.png', name: 'Raiffeisen' },
      { source: 'sponsors/Treul.png', name: 'Treul' },
      { source: 'sponsors/Zaussinger.png', name: 'Zaussinger' }
    ];

  return (
    <Carousel 
      controls={false}
      indicators={false}
      touch={false}
      >
        {sponsors.map((sponsor, index) => {
            return (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100 text-center mx-auto p-3"
                        src={sponsor.source}
                        alt={sponsor.name}
                        style={{ maxWidth: '800px' }}  />
                </Carousel.Item>
            );
        })}
    </Carousel>
  );
}

export default AccordionComponent;