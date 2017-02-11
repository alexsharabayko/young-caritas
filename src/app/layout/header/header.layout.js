import { Link } from 'react-router';

export class HeaderLayout extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Actions</Link>
        <Link to="/about">About</Link>
      </nav>
    );
  }
}