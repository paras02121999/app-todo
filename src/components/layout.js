import Container from '@mui/material/Container';

const Layout = (props) => {
    return (
        <>
            <Container maxWidth="lg">
                {props.children}
            </Container>
        </>
    )
}

export default Layout