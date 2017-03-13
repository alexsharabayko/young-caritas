const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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

  getMonthByDate() {
    let { date } = this.state;
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

  renderEvent(day) {
    let { data } = this.state;
    let item = data.find(d => day && d.when.toDateString() === day.toDateString());

    if (item) {
      return (
        <div className="image">
          <img src={item.titleImage} alt=""/>
        </div>
      );
    }
  }

  get tableHeader() {
    let { date } = this.state;

    return (
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
    );
  }

  get tableBody() {
    let month = this.getMonthByDate();

    return (
      <tbody>
      {
        month.map((week, i) => {
          return (
            <tr key={i}>
              {
                week.map((day, j) => {
                  return (
                    <td key={j}>
                      {day && day.getDate()}{day ? '.' : ''}

                      {this.renderEvent(day)}
                    </td>
                  );
                })
              }
            </tr>
          );
        })
      }
      </tbody>
    )
  }

  render() {
    return (
      <div className="lectures-table">
        <table>
          {this.tableHeader}
          {this.tableBody}
        </table>
      </div>
    );
  }
}
