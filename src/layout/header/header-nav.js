import { Link } from 'react-router';

const NAVS = [
  {
    href: '/',
    title: 'О нас'
  },
  {
    href: '/actions',
    title: 'Акции'
  },
  {
    href: '/lectures',
    title: 'Лекции'
  },
  {
    href: '/help',
    title: 'Помощь'
  },
  {
    href: '/register',
    title: 'Подписка'
  }
];

const SOCIAL = [
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
];

export class HeaderNav extends React.Component {
  render() {
    return (
      <div className="header-nav">
        <div className="thin-wrapper clearfix">
          <ul className="main-nav">
            {NAVS.map((item, i) => {
              return (
                <li key={i} className="main-nav-item">
                  <Link className="main-nav-link" activeClassName="active" to={item.href}>{item.title}</Link>
                </li>
              );
            })}
          </ul>

          <ul className="social-nav">
            {SOCIAL.map((item, i) => {
              let iconClassName = `social-icon fa fa-${item.icon}`;

              return (
                <li key={i} className="social-nav-item">
                  <a className="social-nav-link" href={item.href} target="_blank" title={item.title}>
                    <i className={iconClassName}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}