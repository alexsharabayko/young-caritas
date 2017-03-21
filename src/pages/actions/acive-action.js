let CSSTransitionGroup = React.addons.CSSTransitionGroup;

export class ActiveAction extends React.Component {
  processActive(action) {
    return { ...action, description: action.description.match(/[^\r\n]+/g) };
  }

  render() {
    let { data, activeIndex, colors } = this.props;
    let activeAction = this.processActive(data[activeIndex]);

    let textColorClass = `${colors[activeIndex % colors.length]}-text`;
    let goalClasses = classNames('goal', textColorClass);
    let titleClasses = classNames('title', textColorClass);

    return (
      <div className="active-action">
        <h3 className={titleClasses}>{activeAction.title}</h3>
        <div className="when-where">
          <span className="item">
            <i className="icon fa fa-calendar"></i>
            {activeAction.when}
          </span>
          |
          <span className="item">
            <i className="icon fa fa-map-marker"></i>
            {activeAction.address}
          </span>
        </div>
        <div className={goalClasses}>
          <i className="icon fa fa-tag"></i>
          {activeAction.goal}
        </div>
        <div className="description">
          {
            activeAction.description.map((item, key) => {
              return <p className="p" key={key}>{item}</p>;
            })
          }
        </div>
      </div>
    );
  }
}