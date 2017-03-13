import './lectures.page.scss';

import { LecturesCalendar } from './lectures-calendar';

export class LecturesPage extends React.Component {
  render() {
    return (
      <div>
        <LecturesCalendar/>
      </div>
    );
  }
}