export interface Props {
    ClusterId : number
}

const HomeShelf = async (props : Props) => {
    console.log(props.ClusterId)
    const storeAccountName = "vertice"
    const collection = await fetch(`https://${storeAccountName}.vtexcommercestable.com.br/api/catalog_system/pub/products/search?fq=productClusterId:305`)
    const data = collection.json();
    return (<>
            <h1> 
                {data}
            </h1>
    </>)
}

export default HomeShelf