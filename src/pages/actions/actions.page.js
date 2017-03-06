import './actions.page.scss';
import data from './data.json';

import { TitlesList } from './titles-list';
import { ActiveAction } from './acive-action';

export class ActionsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }

  setActiveIndex(activeIndex) {
    this.setState({ ...this.state, activeIndex });
  }

  render() {
    let { activeIndex } = this.state;

    return (
      <div className="thin-wrapper actions-page">
        <div className="actions">
          <TitlesList data={data} activeIndex={activeIndex} onClick={this.setActiveIndex.bind(this)}/>
          <ActiveAction data={data} activeIndex={activeIndex}/>
        </div>
      </div>
    );
  }
}