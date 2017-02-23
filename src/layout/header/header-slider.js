import { Link } from 'react-router';

import image from './images/slide2.png';
import ornament from './images/ornament.svg';

const SLIDE_NAV = [
  {
    title: 'Sale!',
    addTitle: '50% off',
    text: 'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmo',
    color: 'orange',
    href: '/actions'
  },
  {
    title: '100% pure',
    addTitle: 'Organic fruits',
    text: 'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmo',
    color: 'yellow',
    href: '/lectures'
  },
  {
    title: 'Best',
    addTitle: 'Exotic fruits',
    text: 'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmo',
    color: 'green',
    href: '/help'
  },
  {
    title: 'Free',
    addTitle: 'Shipping',
    text: 'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmo',
    color: 'blue',
    href: '/register'
  },
];

export class HeaderSlider extends React.Component {
  render() {
    return (
      <div className="header-slider">
        <ul className="main-slider">
          <li className="main-slider-item">
            <img className="main-slider-image" src={image} alt=""/>
          </li>
        </ul>

        <div className="slider-info ib-center">
          <div className="ib-center-cell">
            <Link to="/" className="logo">
              Y<img className="logo-image" src={ornament} alt=""/>ng caritas
            </Link>

            <ul className="slide-nav">
              {
                SLIDE_NAV.map((item, i) => {
                  let itemClassName = `slide-nav-item`;
                  let circleClassName = `circle ib-center ${item.color}`;

                  return (
                    <li className={itemClassName} key={i}>
                      <Link to={item.href} className={circleClassName}>
                        <span className="ib-center-cell cell">
                          <span className="title">{item.title}</span>
                          <span className="add-title">{item.addTitle}</span>
                          <span className="text">{item.text}</span>
                        </span>
                      </Link>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}