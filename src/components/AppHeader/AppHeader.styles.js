import styled from 'styled-components'

export const Wrapper = styled.header`
    height: 70px;

    background-color:#00ACAE;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    
    color: #fff;
    font-size: 24px;
    display: flex;
    align-items: center;
    padding: 0 30px;

    span {
        font-weight: 700;
        margin-left: 8px;
    } /*todo span q tiver dentro do componente (Wrapper) vai ser estilizado com q for passado aqui dentro*/

`
//Wrapper incapsula todo mundo