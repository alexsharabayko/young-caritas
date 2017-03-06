export class TitlesList extends React.Component {
  onClick(index) {
    this.props.onClick(index);
  }

  onKeyPress(index, event) {
    console.log(event);
  }

  render() {
    let { data, activeIndex } = this.props;

    return (
      <ul className="actions-title-list">
        {
          data.map((item, i) => {
            let itemClassName = classNames({
              item: true,
              active: activeIndex === i,
              'pre-active': Math.abs(activeIndex - i) === 1
            });

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