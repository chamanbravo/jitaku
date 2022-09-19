import './Categories.css';

type bookmarksList = {
    title: string,
    url: string
}

type CategoriesProps = {
    title: string,
    lists: bookmarksList[]
}

function Categories({title, lists}: CategoriesProps) {
    return (
        <div>
            <h3 className="categories-items_h1">{title}</h3>
            <ul className="categories-items_ul">
                {lists.map((item, i) => {
                    const { title, url } = item
                    return (
                        <li key={i} className="categories-items_li">
                            <a href={url} className="categories-items_a">{title}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Categories;