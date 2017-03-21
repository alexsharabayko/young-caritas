import { TableHeader } from './table-header';
import { TableBody } from './table-body';

export class LecturesCalendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      data: props.data.map(d => Object.assign({}, d, { when: new Date(d.when) }))
    };
  }

  changeMonth(increase) {
    let state = this.state;

    let newDate = new Date(state.date.getTime());
    newDate.setMonth(this.state.date.getMonth() + (increase ? 1 : -1));

    state.date = newDate;

    this.setState(state);
  }

  render() {
    let { date, data } = this.state;

    return (
      <div className="lectures-table">
        <table>
          <TableHeader date={date} />
          <TableBody date={date} data={data} />
        </table>
      </div>
    );
  }
}
