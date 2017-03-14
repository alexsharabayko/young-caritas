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

  moveTooltip(event) {
    let { currentTarget, clientX, clientY } = event;
    let tooltip = currentTarget.querySelector('.event-tooltip');
    let targetBounds = currentTarget.getBoundingClientRect();
    let tooltipBounds = tooltip.getBoundingClientRect();

    let left = clientX - targetBounds.left - tooltipBounds.width / 2;
    let top = clientY - targetBounds.top - tooltipBounds.height - 5;

    console.log(`translate(${left}px, ${top}px)`);
    tooltip.style.transform = `translate(${left}px, ${top}px)`;
  }

  renderEvent(day) {
    let { data } = this.state;
    let item = data.find(d => day && d.when.toDateString() === day.toDateString());

    if (item) {
      return (
        <div className="event" onMouseMove={this.moveTooltip.bind(this)}>
          <div className="image">
            <img src={item.titleImage} alt=""/>
          </div>

          <div className="event-time">{item.when.getHours()}:{item.when.getMinutes()}</div>

          <div className="event-tooltip" ref="tooltip">
            {item.title}
          </div>
        </div>
      );
    }
  }

  get tableHeader() {
    let { date } = this.state;

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
                  let tdClassName = classNames({ inactive: !day });

                  return (
                    <td className={tdClassName} key={j}>
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
