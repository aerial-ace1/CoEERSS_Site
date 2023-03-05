import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';

const About = () => {
  const { path, url } = useRouteMatch();
  const sidebarLinks = [
    {
      name: 'ERSS',
      to: `${url}/erss`
    },
    {
      name: 'ABOUT NITT',
      to: `${url}/about_nitt`
    },
    {
      name: 'ABOUT CDAC',
      to: `${url}/about_cdac`
    }
  ];

  const Content = [
    {
      name: 'ERSS',
      path: `${path}/erss`,
      content: (
        <>
          <h1>ERSS</h1>
          <p>
            <b>Emergency Response Support System (ERSS)</b>
            {' '}
            is a Pan-India single number
            (112) based emergency response system for citizens in emergencies.
            The Emergency Response Centre is capable of receiving emergency calls
            through voice call to 112, email, panic buttons activated calls and 112
            India mobile App. The objectives include:

          </p>
          <ol style={{ listStyleType: 'lower-alpha' }}>
            <li>
              Providing a single emergency response number across the country.
            </li>
            <li>
              Providing 24 Hours and 7 Days (24x7) efficient and effective response system which
              can receive input from various voice and data services such as voice call,
              SMS, email, Internet of Things, panic buttons in public transport etc. to
              attend to citizen in distress.
            </li>
            <li>
              Identification of location of person in
              distress connecting through voice or data.
            </li>
            <li>
              Automated response system for
              timely dispatch of field resources (police) to the location of incidence using
              the system.
            </li>
            <li>
              GPS (Global Positioning System) enabled dispatch of vehicles to
              locate nearest vehicles.
            </li>
            <li>
              Integration with existing Dial 100, Dial 108 and other
              emergency response systems.
            </li>
            <li>
              Integrate with other relevant systems like CCTNS etc.
              Also, connect to TSP’s (Telecom Service Provider) databases to update subscriber
              information and to connect to GMLC (Gateway Mobile Location Centre) for location
              update.
            </li>
            <li>
              Provide standardized and easy to use mobile apps, IoT (Internet of Things)
              enabled applications on a Pan-India basis.
            </li>
          </ol>
          <p>
            Intelligence Techniques have potential to alleviate the damage by marshalling relief
            resources more efficiently and effectively. It can accelerate the delivery of
            aid and sharpen the decisions of relief workers on the front lines.
          </p>
          <p>
            Natural disasters are out of the reach and influence of human beings.
            However, a lot can be done to minimize loss of lives.
            Intelligence Techniques is one viable option that can potentially prevent massive
            loss of lives while at the same time make rescue efforts easy and efficient.

          </p>
        </>
      )
    },
    {
      name: 'ABOUT NITT',
      path: `${path}/about_nitt`,
      content: (
        <>
          <h1>ABOUT NITT</h1>
          <p>
            The National Institute of Technology (formerly known as Regional Engineering College)
            Tiruchirappalli (NITT) was started as a joint and co-operative venture of the Government
            of India and the Government of Tamil Nadu in 1964 with a view to cater the needs of
            manpower in technology for the country. NITT is one of the 31 National Institutes of
            Technology established by the Government of India and ranks First among all the NITs
            in NIRF. The institution offers Undergraduate Courses
            in ten branches and Post Graduate Courses in twenty-one disciplines of Science,
            Engineering & Technology besides M.S. (by Research) and Ph.D. in all the departments.
          </p>
        </>
      )
    },
    {
      name: 'ABOUT CDAC',
      path: `${path}/about_cdac`,
      content: (
        <>
          <h1>ABOUT CDAC - TRIVANDRUM</h1>
          <p>

            The centre at Thiruvananthapuram has been working in application oriented research,
            design and development for various industrial and customer requirements.
            Over the years, Centre has acquired competency, expertise and extensive experience
            in the areas of Broadcast & Communications, Control & Instrumentation, Networking,
            Power Electronics, ASIC Design and Underwater Electronics.

          </p>
          <p>
            The centre accorded prime importance to making such products easily productionable,
            testable and field maintainable, thereby ensuring highly reliable operation.
            The technology development initiatives are focused in the identified core areas of
            Electronics and Information Technology, with funding from various Sponsors.
            The output of these efforts coupled with the high-value expertise and experience gained
            are conceptualized as products, either entirely new, or with quantum improvements on
            those based on existing technology. Scores of technologies developed have been
            transferred to Technology partners for large-scale production.
          </p>
        </>
      )
    }
  ].map((link) => (
    <Route key={link.path} exact path={link.path}>
      {link.content}
    </Route>
  ));
  return <PageContainer title="About" sidebarLinks={sidebarLinks} Content={Content} />;
};

export default About;
