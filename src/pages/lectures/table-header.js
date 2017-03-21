const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export class TableHeader extends React.Component {

  changeMonth() {

  }

  render() {
    let { date } = this.props;

    return (
      <thead>
      <tr>
        <th colSpan="2" className="prev">
          <i className="fa fa-arrow-left" onClick={this.changeMonth.bind(this, false)}></i>
        </th>
        <th colSpan="3">
          <span className="month">{MONTHS[date.getMonth()]}</span>&nbsp;
          <span className="year">{date.getFullYear()}</span>
        </th>
        <th colSpan="2" className="next">
          <i className="fa fa-arrow-right" onClick={this.changeMonth.bind(this, true)}></i>
        </th>
      </tr>
      <tr>
        {
          DAYS.map((day, i) => {
            return (
              <th key={i}>{day}</th>
            );
          })
        }
      </tr>
      </thead>
    );
  }
}