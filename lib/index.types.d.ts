/// <reference types="jest" />
import { DefaultTheme } from "styled-components";
import Queries from '@testing-library/dom/types/queries';
import { SetState } from "@dmd/types";
export declare type Props = any;
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
export declare type QueriesObject = typeof Queries;
