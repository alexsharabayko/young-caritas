import './home.page.scss';

import data from './data.json';
import { HomeTextComponent } from './home-text';
import { HomeListComponent } from './home-list';
import { HomeWhoComponent } from './home-who';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-page">
        <HomeListComponent data={data.whatWeDo} color="orange"/>
        <HomeTextComponent data={data.aboutUs}/>
        <HomeListComponent data={data.whatWeDid} color="green"/>
        <HomeTextComponent data={data.ourHistory} reverse={true}/>
        <HomeWhoComponent data={data.whoWeAre}/>
      </div>
    );
  }
}