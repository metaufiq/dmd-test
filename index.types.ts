import { DefaultTheme } from "styled-components"
import Queries from '@testing-library/dom/types/queries'

import { SetState } from "@dmd/types"

export type ShallowProps<Props> = Props & {
  children: JSX.Element
} 

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

export type MockedShallowComponent<Props> = jest.Mock<JSX.Element, [props: ShallowProps<Props>]>

export type QueriesObject = typeof Queries