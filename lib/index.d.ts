import { Component as ComponentType } from '@dmd/types';
import { Configs, MockedSetState, MockedShallowComponent } from "./index.types";
/**
 * shallow rendering component
 * @param componentName component name
 * @returns mocked shallow component
 */
export declare const shallowRender: <Props>(componentName: string) => MockedShallowComponent<Props>;
/**
 * create mock setState with function as it's params
 * @param {any} initialState previous state
 * @returns {MockedSetState} mock for setState
 */
export declare const mockFunctionSetState: (initialState: any) => MockedSetState;
/**
 *
 * @param {ComponentType<Props>} Component
 * @param {Configs<Props>} configs
 * @returns {void}
 */
export declare const assertSnapshots: <Props>(Component: ComponentType<Props>, configs: Configs<Props>) => void;
