import { Component as ComponentType } from '@dmd/types';
import { Configs, MockedSetState } from "./index.types";
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
