import { createContext, useEffect } from 'react';
import './App.scss';
import { ApplicationContextType } from './resources/types';
import { GameBoard } from './Components/game/gameBoard';
import { useHooks } from './hooks/useHooks';
import { Debugging } from './Components/debugging';
import { pushDebugMessage } from './resources/textHelper';
import { GAME_STATE } from './resources/messageConstants';
import { useAppSelector } from './redux/hooks';

export const ApplicationContext = createContext<ApplicationContextType | null>(null)

function App() {


  const context = useHooks();
  const state = useAppSelector(state => state);

  useEffect(() => {

    pushDebugMessage(context, GAME_STATE, [
      `redux :`,
      {
        codeBlock: JSON.stringify(state, null, 2), language: "tsx"
      },
    ])

  }, [state])

  return (
    <ApplicationContext.Provider value={{ ...context }}>
      <div className="App" >
        <GameBoard></GameBoard>
        <Debugging></Debugging>
      </div>
    </ApplicationContext.Provider>
  );
}

export default App;
