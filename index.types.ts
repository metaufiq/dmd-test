import { DefaultTheme } from "styled-components"
import Queries from '@testing-library/dom/types/queries'

import { SetState } from "@dmd/types"

export type Props = any

export type Config<Props> = {
  props?: Props,
  desc: string,
  useTheme?: boolean,
  theme?: DefaultTheme,
  beforeTest?: VoidFunction
}

export type RoundedType = 'left-only' | 'right-only'

export type Configs<Props> = Config<Props>[]

export type MockedSetState = {
  setterListener: jest.Mock<any, any>,
  setterObject: SetState<any>
}

export type QueriesObject = typeof Queries