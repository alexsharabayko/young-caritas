export class HomeListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  generateContent(item) {
    if (item.icon) {
      return <i className={classNames('fa', `fa-${item.icon}`)}></i>;
    } else {
      return item.text;
    }
  }

  render() {
    let { data, color } = this.props;

    return (
      <div className={classNames('home-section', color)}>
        <h2 className="title">{data.title}</h2>

        <ul className="home-items thin-wrapper">
          {
            data.items.map((item, i) => {
              let content = this.generateContent(item);

              return (
                <li className="item" key={i}>
                  <div className={classNames('icon', `${item.color}-text`)}>
                    {content}
                  </div>
                  <div className="description">{item.description}</div>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}