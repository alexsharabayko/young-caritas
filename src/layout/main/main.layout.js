import { HeaderLayout } from '../header';
import { FooterLayout } from '../footer';

export class MainLayout extends React.Component {
  render() {
    let { location } = this.props;

    return (
      <div>
        <HeaderLayout isSliderNav={location.pathname === '/'}/>
        {this.props.children}
        <FooterLayout/>
      </div>
    );
  }
}