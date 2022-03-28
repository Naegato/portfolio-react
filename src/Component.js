import * as lib from './componentLib';

export const Component = ({page, navigation}) => {
    const C = lib[page];
    return <C navigation={(str) => {navigation(str)} }/>;
}