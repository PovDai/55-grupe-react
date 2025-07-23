

export function Main(props) {
    console.log(props)
    
    return (
        <main className="mainas">
            Main content here
            {props.children}
        </main>

    );
}