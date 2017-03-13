const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export class LecturesCalendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  changeMonth(increase) {
    debugger;
    let state = this.state;

    let newDate = new Date(state.date.getTime());
    newDate.setMonth(this.state.date.getMonth() + (increase ? 1 : -1));

    state.date = newDate;

    this.setState(state);
  }

  getMonthByDate(date) {
    let monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
    let monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    let result = [];

    while (monthStart < monthEnd) {
      let day = monthStart.getDay() ? monthStart.getDay() - 1 : 6;

      if (!result.length || monthStart.getDay() === 1) {
        let arr = (new Array(DAYS.length)).fill(null);
        result.push(arr);
      }

      result[result.length - 1][day] = new Date(monthStart.getTime());

      monthStart.setDate(monthStart.getDate() + 1);
    }

    return result;
  }

  render() {
    let { date } = this.state;
    let month = this.getMonthByDate(date);

    return (
      <table>
        <thead>
        <tr>
          <th colSpan="2" onClick={this.changeMonth.bind(this, false)}>Left</th>
          <th colSpan="3">{MONTHS[date.getMonth()]} {date.getFullYear()}</th>
          <th colSpan="2" onClick={this.changeMonth.bind(this, true)}>Right</th>
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
        <tbody>
        {
          month.map((week, i) => {
            return (
              <tr key={i}>
                {
                  week.map((day, j) => {
                    return (
                      <td key={j}>{day && day.getDate()}</td>
                    );
                  })
                }
              </tr>
            );
          })
        }
        </tbody>
      </table>
    );
  }
}
