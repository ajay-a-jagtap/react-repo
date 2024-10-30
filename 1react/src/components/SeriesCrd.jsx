
export const SeriesCrd = ({curElem})=>{
    const {img_url, name,rating,description,cast,genre,watch_url} = curElem;
    return(
        <li className="card"><br />
            <div>
                <img src={img_url} 
                alt={name}
                width="100%"
                height="100%"
                />
            </div>
            <div className="card-content">
                <h2>Name : {name}</h2>
                <h3>Rating : {rating}</h3>
                <p>Summary : {description}</p>
                <p>genre : {genre}</p>
                <p>Cast : {cast}</p>
                <a href={watch_url} target="_blank">
                    <button >Watch me</button>
                </a>
            </div>
        </li>
    )
}