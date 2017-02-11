import { HeaderLayout } from '../header';
import { FooterLayout } from '../footer';

export class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <HeaderLayout/>
        {this.props.children}
        <FooterLayout/>
      </div>
    );
  }
}