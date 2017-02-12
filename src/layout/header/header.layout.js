import { Link } from 'react-router';
import './header.layout.scss';

export class HeaderLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navs: [
        {
          href: '/',
          title: 'Акции',
          icon: 'feed',
          color: 'orange'
        },
        {
          href: '/about',
          title: 'О нас',
          icon: 'group',
          color: 'green'
        },
        {
          href: '/lectures',
          title: 'Лекции',
          icon: 'calendar',
          color: 'blue'
        },
        {
          href: '/help',
          title: 'Помощь',
          icon: 'heart',
          color: 'red'
        },
        {
          href: '/register',
          title: 'Подписка',
          icon: 'sign-in',
          color: 'violet'
        }
      ],

      social: [
        {
          title: 'VK',
          icon: 'vk',
          href: 'https://vk.com'
        },
        {
          title: 'Facebook',
          icon: 'facebook',
          href: 'https://www.facebook.com'
        },
        {
          title: 'Twitter',
          icon: 'twitter',
          href: 'https://twitter.com'
        },
        {
          title: 'Instagram',
          icon: 'instagram',
          href: 'https://www.instagram.com/'
        }
      ]
    };
  }

  render() {
    return (
      <header className="header">
        {this.headerInfo}
        {this.mainNav}
      </header>
    );
  }

  get headerInfo() {
    return (
      <div className="header-info">
        <div className="thin-wrapper">
          <ul className="social">
            {
              this.state.social.map((s, i) => {
                let itemClassName = `social-icon fa fa-${s.icon}`;

                return (
                  <li className="social-item" key={i}>
                    <a className="social-link" href={s.href} title={s.title} target="blank">
                      <i className={itemClassName}></i>
                    </a>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }

  get mainNav() {
    return (
      <ul className="main-nav thin-wrapper">
        {
          this.state.navs.map((nav, i) => {
            let linkClassName = `main-nav-link ${nav.color}`;
            let iconClassName = `main-nav-icon fa fa-${nav.icon}`;

            return (
              <li className="main-nav-item" key={i}>
                <Link className={linkClassName} activeClassName="active" to={nav.href}>
                  <span className="main-nav-title">{nav.title}</span>
                  <i className={iconClassName}></i>
                </Link>
              </li>
            );
          })
        }
      </ul>
    );
  }
}