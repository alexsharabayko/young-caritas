import { TableEvent } from './table-event';

export class TableBody extends React.Component {
  getMonthByDate() {
    let { date } = this.props;
    let monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
    let monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    let result = [];

    while (monthStart < monthEnd) {
      let day = monthStart.getDay() ? monthStart.getDay() - 1 : 6;

      if (!result.length || monthStart.getDay() === 1) {
        let arr = (new Array(7)).fill(null);
        result.push(arr);
      }

      result[result.length - 1][day] = new Date(monthStart.getTime());

      monthStart.setDate(monthStart.getDate() + 1);
    }

    return result;
  }

  render() {
    let { data } = this.props;
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

                      <TableEvent day={day} data={data}/>
                    </td>
                  );
                })
              }
            </tr>
          );
        })
      }
      </tbody>
    );
  }
}