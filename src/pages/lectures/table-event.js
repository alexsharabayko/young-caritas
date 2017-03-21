export class TableEvent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      left: 0,
      top: 0
    };
  }

  moveTooltip(event) {
    let targetBounds = this.refs.event.getBoundingClientRect();
    let tooltipBounds = this.refs.tooltip.getBoundingClientRect();

    let left = event.clientX - targetBounds.left - tooltipBounds.width / 2;
    let top = event.clientY - targetBounds.top - tooltipBounds.height - 5;

    this.setState({ ...this.state, left, top });
  }

  render() {
    let { day, data } = this.props;
    let item = data.find(d => day && d.when.toDateString() === day.toDateString());

    let { left, top } = this.state;
    let tooltipStyle = {
      transform: `translate(${left}px, ${top}px)`
    };

    if (item) {
      return (
        <div className="event" ref="event" onMouseMove={this.moveTooltip.bind(this)}>
          <div className="image">
            <img src={item.titleImage} alt=""/>
          </div>

          <div className="event-time">{item.when.getHours()}:{item.when.getMinutes()}</div>

          <div className="event-tooltip" ref="tooltip" style={tooltipStyle}>
            {item.title}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}