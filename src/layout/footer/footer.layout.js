import './footer.layout.scss';

const EMAIL = 'youngcaritasby@gmail.com';
const SKYPE = 'youngcaritasby';

const EMAIL_LINK = `mailto:${EMAIL}`;
const SKYPE_LINK = `skype:${SKYPE}`;

export class FooterLayout extends React.Component {
  render() {
    return (
      <footer className="yellow footer">
        <div className="thin-wrapper">
          <a href={EMAIL_LINK} className="footer-link">
            <i className="fa fa-envelope footer-icon"></i>
            {EMAIL}
          </a>
          <a href={SKYPE_LINK} className="footer-link">
            <i className="fa fa-skype footer-icon"></i>
            {SKYPE}
          </a>

          <span className="pull-right">
            <i className="fa fa-map-marker footer-icon"></i>
            Минск, площадь Свободы, 1
          </span>
        </div>
      </footer>
    );
  }
}