import { DefaultTheme } from "styled-components"

import { SetState } from "@dmd/types"

export type Config<Props> = {
  props?: Props,
  desc: string,
  useTheme?: boolean,
  theme?: DefaultTheme,
  beforeTest?: VoidFunction
}

export type Configs<Props> = Config<Props>[]

export type MockedSetState = {
  setterListener: jest.Mock<any, any>,
  setterObject: SetState<any>
}