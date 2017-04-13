import React from 'react';
import parkSlope from '../../public/assets/img/ParkSlope.JPG';
import '../style/more_info.css';

const MoreInfo = () => {
  return (
    <div className="more-info">
      <section>
        <h3>
          {'Why should Barkly be your local Park Slope dog walker?'}
        </h3>
        <p>
          {'Green juice banh mi literally helvetica next level. Crucifix hexagon knausgaard, kickstarter tousled salvia succulents. Marfa synth vice microdosing pickled. Keytar occupy stumptown hot chicken. Copper mug church-key af green juice, gastropub shabby chic lumbersexual banh mi.'}
        </p>
        <h4>Our standout features:</h4>
        <ul>
          <li>Gastropub selfies fanny pack, salvia bushwick authentic letterpress.</li>
          <li>Single-origin coffee chia yuccie, kale chips gastropub roof party.</li>
          <li>Pabst godard vegan iPhone man bun.</li>
          <li>Truffaut four dollar toast cronut.</li>
        </ul>
      </section>
      <img src={parkSlope}></img>
    </div>
  )
}

export default MoreInfo;
