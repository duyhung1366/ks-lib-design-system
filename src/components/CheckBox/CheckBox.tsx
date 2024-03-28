import classNames from "classnames";
import { CheckBoxProps } from "./CheckBox.types";
import styled from "styled-components";

const _CheckBox = styled.input`
    -webkit-appearance: none; 
    appearance: none;   
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;

    &::before {
        display: block;
        content: url('data:image/svg+xml;charset=utf-8,<svg width="100%" height="100%" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M23.587 2.98868C23.8514 3.28479 24 3.68634 24 4.10503C24 4.52373 23.8514 4.92528 23.587 5.22139L9.47932 21.0114C9.21476 21.3074 8.856 21.4737 8.48191 21.4737C8.10783 21.4737 7.74906 21.3074 7.4845 21.0114L0.430689 13.1164C0.295947 12.9707 0.188472 12.7965 0.114535 12.6039C0.0405987 12.4112 0.00168103 12.204 5.32662e-05 11.9944C-0.00157449 11.7847 0.0341199 11.5768 0.105054 11.3827C0.175989 11.1887 0.280742 11.0124 0.413203 10.8641C0.545663 10.7159 0.703177 10.5986 0.876555 10.5192C1.04993 10.4398 1.2357 10.3999 1.42302 10.4017C1.61034 10.4035 1.79546 10.4471 1.96758 10.5298C2.1397 10.6126 2.29537 10.7329 2.42551 10.8837L8.48191 17.6624L21.5921 2.98868C21.8567 2.69266 22.2155 2.52637 22.5895 2.52637C22.9636 2.52637 23.3224 2.69266 23.587 2.98868Z" fill="white" /></svg>');
        width: 100%;
        aspect-ratio: 1;
        transition: 120ms transform ease-in-out;
        transform-origin: bottom left;
        transform: scale(0);
    }
    &:checked::before{
        transform: scale(1);
    }

    &:checked {
        background: rgba(88, 86, 214, 1);
    }

    &.size-small { 
        width: 16px;
        height: 16px;
    }
    &.size-medium { 
        width: 24px;
        height: 24px;
    }
    &.size-large { 
        width: 32px;
        height: 32px;
    }
`

const CheckBox = (props: CheckBoxProps) => {
    const { className = "", sizes = "medium", colorIconChecked = "white", disabled = false, checked = false, defaultChecked = false, onChange = () => { }, ...inputProps } = props;
    console.log(defaultChecked);
    
    return <>
        <_CheckBox type="checkbox" className={classNames("custom-input", className, `size-${ sizes }`)} id="custom-checkBox1" onChange={(e) => {

        }} {...inputProps} defaultChecked={defaultChecked} checked={checked} ></_CheckBox>
    </>
}

export default CheckBox;