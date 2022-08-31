/// <reference types="jest" />
import { DefaultTheme } from "styled-components";
import { SetState } from "@dmd/types";
export declare type Config<Props> = {
    props?: Props;
    desc: string;
    useTheme?: boolean;
    theme?: DefaultTheme;
    beforeTest?: VoidFunction;
};
export declare type Configs<Props> = Config<Props>[];
export declare type MockedSetState = {
    setterListener: jest.Mock<any, any>;
    setterObject: SetState<any>;
};
