import girl1 from './images/girl1.png';
import girl2 from './images/girl2.png';
import guy1 from './images/guy1.png';
import guy2 from './images/guy2.png';

const IMAGES = { girl1, girl2, guy1, guy2 };

export class HomeWhoComponent extends React.Component {
  render() {
    let { data } = this.props;

    return (
      <div className="home-section home-who">
        <ul className="who-list thin-wrapper">
          {
            data.map((person, i) => {
              return (
                <li className="item" key={i}>
                  <i className="fa fa-quote-right quote"></i>

                  <div className="ava">
                    <img src={IMAGES[person.photo]} alt=""/>
                  </div>
                  <p className="description">{person.description}</p>
                  <div className="position">{person.position}</div>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}