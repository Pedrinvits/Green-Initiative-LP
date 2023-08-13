import * as C from './styles'
import { DollarClock } from '../../Svgs/DollarClock';
export const Clock = () => {
    return (
        <C.Container>
            <span>12</span>
                <C.Items>
                    <span>9</span>
                    <DollarClock/>
                    <span>3</span>
                </C.Items>
            <span>6</span>
        </C.Container>
    );
}