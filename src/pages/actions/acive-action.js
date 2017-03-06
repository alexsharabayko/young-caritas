export class ActiveAction extends React.Component {
  processActive(action) {
    return { ...action, description: action.description.match(/[^\r\n]+/g) };
  }

  render() {
    let { data, activeIndex } = this.props;
    let activeAction = this.processActive(data[activeIndex]);
    console.log(activeAction);

    return (
      <div className="active-action">
        <h3 className="title">{activeAction.title}</h3>
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
        <div className="goal">
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