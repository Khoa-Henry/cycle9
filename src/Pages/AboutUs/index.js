import './index.css';
import Cycle9Button from '../../components/Cycle9Button/index.js';
import MUIButton from '../../components/MUIButton/index.js';

//Page component aka a parent and the buttons are child components
function AboutUs() {
    return (
        <div>
            <h1>About us page</h1>
            <Cycle9Button name= 'play'/>
            <Cycle9Button name= 'pause'/>
            <Cycle9Button name= 'skip'/>
            <MUIButton buttonName="henry" style="contained" turnoff={false}/>
            <MUIButton buttonName="Nguyen" style="outlined" turnoff={false}/>
            <MUIButton buttonName="start" style="contained" turnoff={false}/>
        </div>
    );
}

export default AboutUs;
