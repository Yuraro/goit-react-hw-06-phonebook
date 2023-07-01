import styled from '@emotion/styled';

export const Title = styled.h2`
    font-size: 25px;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom:10px
`;

export const ContactsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: 35px;
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const DeleteBtn = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    border: none;
    color: #fff;
    background-color: #76b5c5;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-left: 20px;

&:hover {
    background-color: #a2e1e8;
}
&:active {
    background-color: #a2e1e8;
}
`;