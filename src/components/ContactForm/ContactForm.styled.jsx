import styled from '@emotion/styled';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 270px;
    padding: 20px 10px;
    border-radius: 5px;
    margin-bottom: 35px;
`;
export const Title = styled.h2`
    font-size: 35px;
    font-weight: 600;
    text-transform: uppercase;
`;


export const Input = styled.input`
    display: block;
    width: 200px;
    margin-bottom: 10px;
    margin-top: 10px;

    border: 0;
    border: 1px solid #76b5c5;
    outline: 0;
    font-size: 1.3rem;
    color: black;
    padding-left: 10px;
    padding-right: 10px;
`;

export const AddButton = styled.button`
    padding: 5px 40px;
    font-size: 16px;
    border-radius: 4px;
    border: none;
    color: #fff;
    background-color: #76b5c5;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 10px;
&:hover {
    background-color: #a2e1e8;
}
&:active {
    background-color: #a2e1e8;
}
`;