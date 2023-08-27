import React from 'react';
import './main.css';
import image1 from '../../Assets/img1.jpg';
import image2 from '../../Assets/img2.jpg';
import image3 from '../../Assets/img3.jpg';
import image4 from '../../Assets/img4.jpg';
import image5 from '../../Assets/img5.jpg';
import image6 from '../../Assets/img6.jpg';
import image7 from '../../Assets/img7.jpg';
import image8 from '../../Assets/img8.jpg';
import image9 from '../../Assets/img9.jpg';

const Data = [
  {
    id: 1,
    imgSrc: image1,
    destination: 'Bora Bora',
    location: 'French Polynesia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:
      'The epitome of romance, Bora Bora is one of the best travel destinations in the world. It is known for its luxurious stays and adventurous activites.',
  },
  {
    id: 2,
    imgSrc: image2,
    destination: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description:
      'Huayna Picchu is the mountain in Peru, rising over Machu Picchu, the so-called lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.',
  },
  {
    id: 3,
    imgSrc: image3,
    destination: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:
      'The Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia. It contains the world’s largest collection of coral reefs. The Great Barrier Reef is the only place in the world that you can swim with dwarf minke whales.',
  },
  {
    id: 4,
    imgSrc: image4,
    destination: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description:
      'Cappadocia is a beautiful region in central Turkey famous for its fairytale scenery, cave dwellings, remarkable rock formations, and, of course, the hundreds of hot air balloons that soar in the sky during sunrise each morning.',
  },
  {
    id: 5,
    imgSrc: image5,
    destination: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description:
      'The Cinque Terre is made up of five villages on Italy’s Ligurian coast. Not only is the entire region a national park, but it is also a UNESCO World Heritage Site.The natural beauty of this rugged coastline is unmatched and draws visitors from all over the world.',
  },
  {
    id: 6,
    imgSrc: image6,
    destination: 'Chichen Itza',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$750',
    description:
      'It’s the largest archaeological site of the pre-Columbian Maya civilization located within Mexico’s beautiful Yucatan Peninsula. Granted World Heritage Site status in 1988 by UNESCO and more recently voted one of the New Seven Wonders of the World.',
  },
  {
    id: 7,
    imgSrc: image7,
    destination: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$550',
    description:
      'Angkor Wat, the heart and soul of Cambodia, translates to “City of Temples” in the Khmer language. Now protected by Unesco’s World Heritage listing, they easily rank as Cambodia’s premier tourist attraction.',
  },
  {
    id: 8,
    imgSrc: image8,
    destination: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$660',
    description:
      'Taj Mahal is inarguably the most beautiful monument in India and a crowning jewel of Mughal architecture.The architecture of Taj Mahal is the most envious blend of best of infrastructure from the world over.',
  },
  {
    id: 9,
    imgSrc: image9,
    destination: 'Eiffel Tower',
    location: 'France',
    grade: 'CULTURAL RELAX',
    fees: '$820',
    description:
      'Easily one of Paris’ most memorable landmarks, The Eiffel Tower needs no introduction. This magnificent steel tower is amazing to see from the ground but the views from the top are particularly breathtaking!',
  },
];

export default function Main() {
  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 className='title'>Most visited destinations</h3>
      </div>

      <div className='secContent grid'>
        {
          Data.map(
            ({ id, imgSrc, destination, location, grade, fees, description }) => (
              <div key={id} className='singleDestination'>
                <div className='imageDiv'>
                  <img src={imgSrc} alt={destination} />
                </div>
              </div>
            )
          )
        }
      </div>
    </section>
  );
}
