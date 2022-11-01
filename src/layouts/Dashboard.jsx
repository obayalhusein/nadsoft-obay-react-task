const layout = ({children}) => {
    return (
        <>
            <header>Dashboard Header</header>
            <main>{children}</main>
            <footer>Dashboard Footer</footer>
        </>
    );
}
 
export default layout;