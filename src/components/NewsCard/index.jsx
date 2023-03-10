import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link45deg } from 'react-bootstrap-icons';
import styles from './style.module.css';

const images = {};
function importAll(r) {
  r.keys().forEach((key) => {
    images[key] = r(key);
  });
}
importAll(require.context('./assets', false, /\.png/));

const NewsCard = ({ newsItem }) => (
  <Card className={styles.cardCont} style={{ width: '25rem' }}>
    <Card.Img variant="top" style={{ maxHeight: '30rem', overflowY: 'clip' }} src={images[newsItem.image]} />
    <Card.Body>
      <Card.Text>
        {newsItem.text}
      </Card.Text>
      <section className={styles.links}>
        {newsItem.links.map((link) => (
          <a href={link} key={link} target="_blank" rel="noreferrer">
            <Button variant="dark"><Link45deg /></Button>
          </a>
        ))}
      </section>
    </Card.Body>
  </Card>
);

export default NewsCard;

export function NewsCarousel() {
  const newsItems = [
    {
      image: './1.png',
      text: 'The Centre of Excellence in Emergency Response Support System (CoEERSS) was inaugurated by Dr. C. Sylendra Babu, IPS, Director General of Police, Tamil Nadu today in the campus of NIT-Tiruchirappalli.',
      links: ['https://twitter.com/pibchennai/status/1612462177608429570?s=20&t=0T3FW_4eh4dZ_A5qvafZ_A', 'https://pib.gov.in/PressReleasePage.aspx?PRID=1895478', 'https://link.public.app/kG6zo']
    }, {
      image: './2.png',
      text: 'At ISERDM-2023, Senthilkumar Nallusamy, Chief Cardiologist, Rana Hospital demonstrated the CPR technique and emphasised its importance in case of cardiac omplication.',
      links: ['https://www.thehindu.com/news/cities/Tiruchirapalli/senior-cardiologist-moots-cpr-training-for-all/article66365620.ece" ,"https://etamilnews.com/suddenly-attack/']
    }, {
      image: './4.png',
      text: 'A 3-day Conference kicked of at NIT-T, with a 28hr hackathon aiming to contribute to the Centre of Excellence in Emergency Response Support System',
      links: [
        'https://www.instanews.city/tamil-nadu/tiruchirappalli/thiruverumbur/3-day-international-conference-on-disaster-management-at-nit-trichy-1190183', 'https://trichyxpress.com/2023/02/02/trichy-national-institute-of-technology-emergency-help-center-inaugurated-by-dgp-shailendrababu/'
      ]
    }, {
      image: './3.png',
      text: 'At the inauguration of the Centre of Excellence in Emergency Response Support System at the NITT, Tamil Nadu Police Department talked about how CoEERSS would integrate IoT, AI, and deep learning into CCTNS 2.0 version software for better crime control and the  ERSS-112 system for a quicker response time.',
      links: ['https://www.thehindu.com/news/cities/Tiruchirapalli/cctns-20-version-to-be-deployed-shortly-says-dgp/article66458230.ece?cx_testId=11&cx_testVariant=cx_1&cx_artPos=0&cx_experienceId=EXKWL3XAQS9E#cxrecs_s', 'https://www.dtnext.in/city/2023/02/02/dgp-opens-emergency-response-support-system-at-nit-t', 'https://inewstamil.com/Article/PsCPSEtZTKNBEzX1Uy5J']
    }
  ];

  return (
    <Carousel variant="dark">
      {newsItems.map((newsItem) => (
        <Carousel.Item>
          <img className={styles.gridItem} key={newsItem.image} src={images[newsItem.image]} alt="gallery" draggable="false" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
