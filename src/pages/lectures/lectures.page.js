import './lectures.page.scss';
import data from './data.json';

import { LecturesCalendar } from './lectures-calendar';

export class LecturesPage extends React.Component {
  render() {
    return (
      <LecturesCalendar data={data}/>
    );
  }
}