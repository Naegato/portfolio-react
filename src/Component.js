import * as lib from './componentLib';

export const Component = (props) => {
    const C = lib[props.page];
    // return <C navigation={(str, id) => {props.navigation(str,id)}}/>;
    return <C {...props}/>;
}