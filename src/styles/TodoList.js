import styled from "styled-components";

const ListStyle = styled.div`
    display: flex;
    justify-content: center;
    && li{
        color:gray;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin:2px;
    }
    && p{
        padding: 0px 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 100%;
    
    }
    && span{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 100%;
       
    }
    
  
    span:hover{
        color: blue;
    }
`;

export default ListStyle