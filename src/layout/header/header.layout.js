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
          icon: '',
          color: ''
        },
        {
          href: '/about',
          title: 'О нас',
          icon: '',
          color: ''
        },
        {
          href: '/lectures',
          title: 'Лекции',
          icon: '',
          color: ''
        },
        {
          href: '/help',
          title: 'Помощь',
          icon: '',
          color: ''
        },
        {
          href: '/register',
          title: 'Подписка',
          icon: '',
          color: ''
        }
      ]
    };
  }

  render() {
    return (
      <header className="header">
        <div className="header-info"></div>

        {this.mainNav}
      </header>
    );
  }

  get mainNav() {
    return (
      <ul className="main-nav thin-wrapper">
        {
          this.state.navs.map((nav, i) => {
            return (
              <li className="main-nav-item" key={i}>
                <Link className="main-nav-link" activeClassName="active" to={nav.href}>
                  {nav.title}
                </Link>
              </li>
            );
          })
        }
      </ul>
    );
  }
}