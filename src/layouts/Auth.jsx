const layout = ({children}) => {
    return (
        <>
            <header>Auth Header</header>
            <main>{children}</main>
            <footer>Auth Footer</footer>
        </>
    );
}
 
export default layout;