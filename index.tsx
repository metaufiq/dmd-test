import React from 'react';
import renderer, { ReactTestRenderer} from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import {SetState, Component as ComponentType} from '@dmd/types'

import { Config, Configs, MockedSetState } from "./index.types"

/**
 * create mock setState with function as it's params
 * @param {any} initialState previous state 
 * @returns {MockedSetState} mock for setState
 */
export const mockFunctionSetState = (initialState: any): MockedSetState => {
  const setterListener = jest.fn();
  // eslint-disable-next-line require-jsdoc
  const setterObject:SetState<any> = (fn) => { setterListener(fn(initialState)); }
  return {setterListener, setterObject};
}

/**
 * 
 * @param {ComponentType<Props>} Component 
 * @param {Config<Props>} param1 
 * @returns {ReactTestRenderer}
 */
const _renderContainer = <Props,>(
  Component:ComponentType<Props>,
  {useTheme, props, theme}: Config<Props>
): ReactTestRenderer=>{
  if (!useTheme) {
    return renderer.create(<Component {...props!}/>)
  }

  return renderer.create(<ThemeProvider theme={theme}>
    <Component {...props!}/>
    </ThemeProvider>)
}

/**
 * 
 * @param {ComponentType<Props>} Component 
 * @param {Configs<Props>} configs
 * @returns {void}
 */
export const assertSnapshots = <Props,>(Component:ComponentType<Props>, configs: Configs<Props>): void=>{
  configs.forEach(config => {
    const {desc, beforeTest} = config

    if (beforeTest) {
      beforeTest();
    }

    test(desc, () => {
      jest.useFakeTimers()
      const container = _renderContainer(Component, config)
      
      const result = container.toJSON();
    
      expect(result).toMatchSnapshot()
    })
  })
}