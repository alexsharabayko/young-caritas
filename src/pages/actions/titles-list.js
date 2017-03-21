export class TitlesList extends React.Component {
  onClick(index) {
    this.props.onClick(index);
  }

  onKeyPress(index, event) {
    console.log(event);
  }

  render() {
    let { data, activeIndex, colors } = this.props;

    return (
      <ul className="actions-title-list">
        {
          data.map((item, i) => {
            let color = colors[i % colors.length];
            let isActive = activeIndex === i;

            let itemClassName = classNames(
              !isActive && color,
              isActive && `${color}-text`,
              {
                item: true,
                active: isActive,
              }
            );

            return (
              <li className={itemClassName}
                  key={item._id}
                  onClick={this.onClick.bind(this, i)}
                  onKeyDown={this.onKeyPress.bind(this, i)}>
                <h5 className="title">{item.title}</h5>
                <p className="date">
                  <i className="icon fa fa-calendar"></i>
                  <span className="date-text">{item.when}</span>
                </p>
              </li>
            )
          })
        }
      </ul>
    )
  }
}