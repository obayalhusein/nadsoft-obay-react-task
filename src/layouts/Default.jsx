const layout = ({children}) => {
    return (
        <>
            <header>Header</header>
            <main>{children}</main>
            <footer>Footer</footer>
        </>
    );
}
 
export default layout;