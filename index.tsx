import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import {SetState, Component as ComponentType} from '@dmd/types'

import { Config, Configs, MockedSetState, MockedShallowComponent, QueriesObject, ShallowProps } from "./index.types"

/**
 * shallow rendering component
 * @param componentName component name
 * @returns mocked shallow component
 */
export const shallowRender =
<Props,>(componentName: string):MockedShallowComponent<Props>=>jest.fn(
(props:ShallowProps<Props>) => 
<div id={componentName}>{props.children}</div>
)

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
 * @returns {RenderResult<Queries, HTMLElement, HTMLElement>}
 */
const _renderContainer = <Props,>(
  Component:ComponentType<Props>,
  {useTheme, props, theme}: Config<Props>
): RenderResult<QueriesObject, HTMLElement, HTMLElement>=>{
  if (!useTheme) {
    return render(<Component {...props!}/>)
  }

  return render(<ThemeProvider theme={theme!}>
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
      
      const result = container.asFragment();
    
      expect(result).toMatchSnapshot()
    })
  })
}