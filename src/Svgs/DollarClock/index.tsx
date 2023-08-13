import * as C from './styles'
import { Dollar } from '../Dollar/index';
import { DollarHeadDown } from '../DollarHeadDown/index';

export const DollarClock = () => {
  return (
        <>
            <C.Container>
                <C.Center>
                    <C.Dollar>
                        <Dollar/>
                    </C.Dollar>
                    <DollarHeadDown/>
                </C.Center>
            </C.Container>
        </>
  );
}