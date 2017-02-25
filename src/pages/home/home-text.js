import autumnImage from './images/autumn.jpg';
import flowersImage from './images/flowers.jpg';

export class HomeTextComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { data, reverse } = this.props;

    return (
      <div className="home-section">
        <div className={classNames('home-text', 'thin-wrapper', { reverse })}>
          <div className="article">
            <h2 className="title">{data.title}</h2>
            <p className="description">{data.description}</p>
          </div>

          <div className="double-image">
            <div className="big">
              <img src={autumnImage} alt=""/>
            </div>
            <div className="small">
              <img src={flowersImage} alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}