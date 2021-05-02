interface CategoryTitleProps {
  title: string;
}

export function CategoryTitle(props: CategoryTitleProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {props.title}</span>
      </span>
    </header>
  );
}