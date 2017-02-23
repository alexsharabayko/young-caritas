import './header.layout.scss';
import { HeaderNav } from './header-nav';
import { HeaderSlider } from './header-slider';

export class HeaderLayout extends React.Component {
  render() {
    return (
      <header className="header">
        <HeaderNav/>
        <HeaderSlider/>
      </header>
    );
  }
}