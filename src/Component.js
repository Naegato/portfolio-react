import * as lib from './componentLib';

export const Component = ({page, navigation, projects}) => {
    const C = lib[page];
    return <C navigation={(str, proj) => {navigation(str,proj)}} projects={projects}/>;
}