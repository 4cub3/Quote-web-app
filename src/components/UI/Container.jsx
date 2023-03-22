import styled from "styled-components";
const Container = ({children})=>{
    return(
        <ContainerCenter>
            {children}
        </ContainerCenter>
    )
}
export default Container;

const ContainerCenter = styled.div.attrs(({className})=>({
    className,
}))`
    max-width:120rem;
    margin-left:auto;
    margin-right:auto;
`;