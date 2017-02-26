import './header.layout.scss';
import { HeaderNav } from './header-nav';
import { HeaderSlider } from './header-slider';

export class HeaderLayout extends React.Component {
  render() {
    let { isSliderNav } = this.props;

    return (
      <header className="header">
        <HeaderNav/>
        <HeaderSlider isSliderNav={isSliderNav}/>
      </header>
    );
  }
}