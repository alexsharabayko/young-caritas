import { Link } from 'react-router';

const NAVS = [
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
];

export class HeaderNav extends React.Component {
  render() {
    return (
      <ul className="main-nav thin-wrapper">
        {
          NAVS.map((nav, i) => {
            let linkClassName = `main-nav-link ${nav.color}`;
            let iconClassName = `main-nav-icon fa fa-${nav.icon}`;

            return (
              <li className="main-nav-item" key={i}>
                <Link className={linkClassName} activeClassName="active" to={nav.href}>
                  <i className={iconClassName}></i>
                  <span className="main-nav-title">{nav.title}</span>
                </Link>
              </li>
            );
          })
        }
      </ul>
    );
  }
}