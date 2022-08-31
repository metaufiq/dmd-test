"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertSnapshots = exports.mockFunctionSetState = exports.shallowRender = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const styled_components_1 = require("styled-components");
/**
 * shallow rendering component
 * @param componentName component name
 * @returns mocked shallow component
 */
const shallowRender = (componentName) => jest.fn((props) => react_1.default.createElement("div", { id: componentName }, props.children));
exports.shallowRender = shallowRender;
/**
 * create mock setState with function as it's params
 * @param {any} initialState previous state
 * @returns {MockedSetState} mock for setState
 */
const mockFunctionSetState = (initialState) => {
    const setterListener = jest.fn();
    // eslint-disable-next-line require-jsdoc
    const setterObject = (fn) => { setterListener(fn(initialState)); };
    return { setterListener, setterObject };
};
exports.mockFunctionSetState = mockFunctionSetState;
/**
 *
 * @param {ComponentType<Props>} Component
 * @param {Config<Props>} param1
 * @returns {RenderResult<Queries, HTMLElement, HTMLElement>}
 */
const _renderContainer = (Component, { useTheme, props, theme }) => {
    if (!useTheme) {
        return (0, react_2.render)(react_1.default.createElement(Component, Object.assign({}, props)));
    }
    return (0, react_2.render)(react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme },
        react_1.default.createElement(Component, Object.assign({}, props))));
};
/**
 *
 * @param {ComponentType<Props>} Component
 * @param {Configs<Props>} configs
 * @returns {void}
 */
const assertSnapshots = (Component, configs) => {
    configs.forEach(config => {
        const { desc, beforeTest } = config;
        if (beforeTest) {
            beforeTest();
        }
        test(desc, () => {
            jest.useFakeTimers();
            const container = _renderContainer(Component, config);
            const result = container.asFragment();
            expect(result).toMatchSnapshot();
        });
    });
};
exports.assertSnapshots = assertSnapshots;
