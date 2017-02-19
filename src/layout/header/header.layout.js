import './header.layout.scss';

import { HeaderInfo } from './header-info';
import { HeaderNav } from './header-nav';

export class HeaderLayout extends React.Component {
  render() {
    return (
      <header className="header">
        <HeaderInfo/>
        <HeaderNav/>
      </header>
    );
  }
}