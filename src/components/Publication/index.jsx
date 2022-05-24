import React from 'react';
import styles from './styles.module.css';
import image from './Assets/springer-logo.svg';
import { Card } from '../Card/Card';
import author1 from './Assets/JKMandal.jpg';
import author2 from './Assets/IMukherjee.jpeg';
import author3 from './Assets/PKSa.jpg';
import author4 from './Assets/sbakshi.jpg';
import author5 from './Assets/SChatterji.png';

const Publication = () => (
  <div>
    <div>
      <h6>
        Proceedings of 7th ICACNI 2019 will be published as
      </h6>
      <h4>
        <b>Computational Intelligence and Machine Learning</b>
      </h4>
    </div>
    <br />
    <div>
      <h6>
        Editors
      </h6>
      <h5>
        {/* eslint-disable-next-line max-len */}
        <b>Jyotsna Kumar Mandal, Imon Mukherjee, Sambit Bakshi, Sanjay Chatterji, and Pankaj K. Sa</b>
      </h5>
    </div>
    <br />
    <div className={styles.correspondance}>
      <h6>
        Correspondance is being made to be published in:
      </h6>
      <div className={styles.springerLink}>
        <img src={image} alt="" />
        <a href="https://www.springer.com/series/11156">
          Advances in Intelligent Systems and Computing, Springer
          indexed in ISI Proceedings, EI-Compendex, DBLP, SCOPUS
        </a>
        <h6>
          (Status:
          {' '}
          <b>Approved by publisher</b>
          )
        </h6>
      </div>
    </div>
    <div className={styles.authors}>
      <Card align={0} src={author1} title="Jyotsna Kumar Mandal" content="Jyotsna Kumar Mandal, M. Tech. in Computer Science from University of Calcutta in 1987, awarded Ph.D. (Engineering) in Computer Science and Engineering by Jadavpur University in 2000. Presently working as Professor of Computer Science & Engineering, former Dean, Faculty of Engineering, Technology & Management, KU for two consecutive terms during 2008-2012. Director, IQAC, Kalyani University and Chairman, CIRM, and Placement Cell. Served as Professor Computer Applications, Kalyani Government Engineering College for two years, as Associate Professor Computer Science for eight years at North Bengal University, as Assistant Professor Computer Science North Bengal University for seven years, as lecturer at NERIST, Itanagar for one year. 32 years of teaching and research experience in Coding theory, Data and Network Security and authentication; Remote Sensing & GIS based Applications, Data Compression, Error Correction, Visual Cryptography and Steganography. Awarded 23 Ph. D. Degrees, one submitted and 8 are pursuing. Supervised 03 M. Phil, more than 70 M. Tech and more than 125 M.C.A Dissertations. Guest Editor of MST Journal (SCI indexed) of Springer. Published more than 400 research articles out of which 170 articles in International Journals. Published 7 books from LAP Germany, IGI Global etc. Organized 31 International Conferences and Corresponding Editors of edited volumes and conference publications of Springer, IEEE, and Elsevier etc. and edited 32 volumes as volume editor." />
      <Card align={0} src={author2} title="Imon Mukherjee" content="Imon Mukherjee received his Ph.D. from Jadavpur University, Kolkata, India in 2015 respectively. Currently, he is working as Faculty in-Charge, Academics and an Asst. Professor (Grade – I) in Computer Science & Engineering, Indian Institute of Information Technology Kalyani, India (an Institute of National Importance under MHRD, Govt. of India). Earlier, he was an Assistant Professor in the dept. of Computer Science and Engineering of Institute of Technology & Marine Engineering, now The Neotia University, West Bengal, India from August, 2006 to December, 2011. Then from January, 2012, he was associated with the Dept. of Computer Science and Engineering, St. Thomas’ College of Engineering & Technology, Kolkata, India, with same designation. His research focuses on Information Security and Data Analytics. He is associated as Reviewer, PC member, Track Session Chair of many reputed conferences and journals like IEEE Transactions on Circuits and Systems for Video Technology, etc. He is currently supervising 5 Ph.D. students at IIIT Kalyani. He has acted as PI and Co-PI of many projects funded by DST, Govt. of W.B., etc." />
      <Card align={0} src={author3} title="Pankaj Kumar Sa" content="Pankaj Kumar Sa received the Ph.D. degree in Computer Science in 2010. He is currently serving as an Associate Professor with the Department of Computer Science and Engineering, National Institute of Technology Rourkela, India. His research interest includes computer vision, biometrics, visual surveillance, and robotic perception. He has co-authored a number of research articles in various journals, conferences, and book chapters. He has co-investigated some Research and Development projects that are funded by SERB, DRDO-PXE, DeitY, and ISRO. He is the recipient of prestigious awards and honours for his excellence in academics and research. Apart from research and teaching, he conceptualizes and engineers the process of institutional automation" />
      <Card align={0} src={author4} title="Sambit Bakshi" content="Sambit Bakshi is currently with Centre for Computer Vision and Pattern Recognition of National Institute of Technology Rourkela, India. He also serves as Assistant Professor in Department of Computer Science & Engineering of the institute. He earned his PhD degree in Computer Science & Engineering. His area of interest includes surveillance and biometric authentication. He is a senior member of IEEE since 2019. He currently serves as associate editor of International Journal of Biometrics (2013 -), IEEE Access (2016 -), Innovations in Systems and Software Engineering : A NASA Journal (2016 -), Expert Systems (2017 -), and Plos One (2017 -). He has served/ is serving as guest editor for reputed journals like Multimedia Tools and Applications, IEEE Access, Innovations in Systems and Software Engineering: A NASA Journal, Computers and Electrical Engineering, IET Biometrics, and ACM/Springer MONET. He is serving as the vice-chair for IEEE Computational Intelligence Society Technical Committee for Intelligent Systems Applications for the year 2019. He received the prestigious Innovative Student Projects Award 2011 from Indian National Academy of Engineering (INAE) for his master’s thesis. He has more than 50 publications in reputed journals, reports, conferences." />
      <Card align={0} src={author5} title="Sanjay Chatterji" content="Sanjay Chatterji has received Ph.D. from IIT Kharagpur on Indian Language Machine Translation domain specifically on statistical and transfer based approaches to build Bengali-Hindi machine translation systems based on the resources that are available. He has built Morphological Analyzer, POS tagger, Parser, etc. for Bengali language. In Samsung R&D Institute India Bangalore (SRIB), he has worked in the domain of semantic analysis, specifically on Aspect Based Sentiment Analysis, inter concept higher order predicate relation extraction, representation and application in search domain, DNN based classification of intents, etc. Overall, he has experience and expertise in application of Machine Learning algorithms for NLP tasks. He has worked in SRIB for about 4 years and in multiple engineering colleges as lecturer and assistant professor for 3 years. He has published 4 journal papers (3 of which are SCI indexed) and 16 conference papers and achieved jury award for a demo in Nipun, 2015 in SRIB. Currently he is working as Assistant Professor in Indian Institute of Information Technology Kalyani, West Bengal, India." />
    </div>
  </div>
);

export default Publication;
