import './NavBar.css';

function ItemNav({ url, className, iconName, itemName }) {
  return (
    <li key={itemName} className="nav-item">
      <a href={url}>
        <span className={className + " icon"}>{iconName}</span>
        <p>{itemName}</p>
      </a>
    </li>
  );
}

export default function NavBar() {
  return (
    <nav >
      <ul>
        <ItemNav
          url={"#"}
          className={'material-symbols-outlined'}
          iconName={'home'}
          itemName={"Home"}
        />
        <ItemNav
          url={"#"}
          className={'material-symbols-outlined'}
          iconName={'category'}
          itemName={"Catalogue"}
        />
        <ItemNav
          url={"#"}
          className={'material-symbols-outlined'}
          iconName={'library_books'}
          itemName={"Mangas"}
        />
        <ItemNav
          url={"#"}
          className={'material-symbols-outlined'}
          iconName={'play_arrow'}
          itemName={"Animes"}
        />
        <ItemNav
          url={"#"}
          className={'material-symbols-outlined'}
          iconName={'person'}
          itemName={"Profil"}
        />
      </ul>
    </nav>
  );
}


