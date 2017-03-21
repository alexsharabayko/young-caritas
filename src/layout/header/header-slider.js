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
  get sliderNav() {
    if (this.props.isSliderNav) {
      return (
        <ul className="slide-nav">
          {
            SLIDE_NAV.map((item, i) => {
              let itemClassName = classNames(
                'slide-nav-item',
                'an-duration-4',
                `an-delay-${i * 2 + 2}`,
                {
                  'fade-left': i % 2 === 0,
                  'fade-right': i % 2 === 1,
                }
              );
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
      );
    }
  }

  get logo() {
    return (
      <Link to="/" className="logo">
        Y<img className="logo-image" src={ornament} alt=""/>ng caritas
        <small>Belarus</small>
      </Link>
    );
  }

  get mainSlider() {
    return (
      <ul className={classNames('main-slider', { short: !this.props.isSliderNav })}>
        <li className="main-slider-item">
          <img className="main-slider-image" src={image} alt=""/>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div className="header-slider">
        {this.mainSlider}

        <div className="slider-info ib-center">
          <div className="ib-center-cell">
            {this.logo}
            {this.sliderNav}
          </div>
        </div>
      </div>
    );
  }
}