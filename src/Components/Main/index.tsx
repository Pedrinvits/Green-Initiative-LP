import * as C from './styles'
import { Dollar } from '../../Svgs/Dollar';
import { Arrow } from '../../Svgs/Arrow';
import { RighArrow } from '../../Svgs/RightArrow';
import { World } from '../World/index';
import { Clock } from '../Clock';
import { Link } from 'react-router-dom';
export const Main = () => {
    return (
        <C.Container>
            <C.Start>
              <h1>Start to take</h1>
              <h2>a change.</h2>
              <p>Instant, global, and cheap fees.</p>
              <p>What more could you asked for?</p>
              <Link to = {'/SignUp'}><button>Get started</button></Link>
            </C.Start>
            <C.Only>
                <C.Cash>
                    <C.Dolars><Dollar/><Arrow/><Dollar/></C.Dolars>
                    <C.Info>
                        <h1>0.5% only</h1>
                    </C.Info>
                </C.Cash>
                <p>Cheap fees <b>transfer</b>, no fixed cents.</p>
            </C.Only>
            <C.Available>
                <C.Text>
                    <h1>Globally Available!</h1>
                    <p>We are expanding to over 110+ countries</p>
                    <a href="#">See supported countries <RighArrow/></a>
                </C.Text>
                <World/>
            </C.Available>
            <C.Money>
                <Clock/>
                <C.InfoTime>
                    <h1>Time is <span>money.</span></h1>
                    <p>Real-time transfer and payouts WORLDWIDE!</p>
                    <Link to = {'/SignUp'}><button>Get started</button></Link>
                </C.InfoTime>
            </C.Money>

        </C.Container>
    );
}