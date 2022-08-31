"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertSnapshots = exports.mockFunctionSetState = void 0;
const react_1 = __importDefault(require("react"));
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
const styled_components_1 = require("styled-components");
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
 * @returns {ReactTestRenderer}
 */
const _renderContainer = (Component, { useTheme, props, theme }) => {
    if (!useTheme) {
        return react_test_renderer_1.default.create(react_1.default.createElement(Component, Object.assign({}, props)));
    }
    return react_test_renderer_1.default.create(react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme },
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
            const result = container.toJSON();
            expect(result).toMatchSnapshot();
        });
    });
};
exports.assertSnapshots = assertSnapshots;
