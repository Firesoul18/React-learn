//if we use export instead of export default -> we have to use import {Logo} instead of import Logo
export function Logo(props){

    const style = {
        height:300,
    };

    const url = props.url;
    const l = <img src={url} style={style}></img>
    return l;
};