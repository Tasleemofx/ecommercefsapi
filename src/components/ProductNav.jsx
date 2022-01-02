const ProductNav = ({buttons, onClick, index=5000}) => {
    return ( <nav className="text-center">
        {buttons.map((item)=>{
            return (<button className="btn btn-outline-dark m-1"
            key={Math.floor(Math.random()*index)}
            onClick={()=>onClick(item)}>
                    {item}
                </button>)}
        )}
        </nav>
     );
}
 
export default ProductNav;