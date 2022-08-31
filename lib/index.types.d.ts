/// <reference types="react" />
/// <reference types="jest" />
import { DefaultTheme } from "styled-components";
import Queries from '@testing-library/dom/types/queries';
import { SetState } from "@dmd/types";
export declare type ShallowProps<Props> = Props & {
    children: JSX.Element;
};
export declare type Config<Props> = {
    props?: Props;
    desc: string;
    useTheme?: boolean;
    theme?: DefaultTheme;
    beforeTest?: VoidFunction;
};
export declare type RoundedType = 'left-only' | 'right-only';
export declare type Configs<Props> = Config<Props>[];
export declare type MockedSetState = {
    setterListener: jest.Mock<any, any>;
    setterObject: SetState<any>;
};
export declare type MockedShallowComponent<Props> = jest.Mock<JSX.Element, [props: ShallowProps<Props>]>;
export declare type QueriesObject = typeof Queries;
