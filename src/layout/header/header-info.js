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

export class HeaderInfo extends React.Component {
  render() {
    return (
      <div className="header-info">
        <div className="thin-wrapper">
          <ul className="social">
            {
              SOCIAL.map((s, i) => {
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
}