import { FunctionComponent } from "react";
import { Header, HiddenSpace } from "./HeaderBar.style";
import { Link } from "react-router-dom";
import FilterSearch from "../FilterSearch/FilterSearch";

interface HeaderBarProps {
  /**
   * The title of the header.
   * @default 'Rick And Morty' - If no title is provided, it defaults to 'Rick And Morty'.
   */
  title?: "Rick And Morty";
}

const HeaderBar: FunctionComponent<HeaderBarProps> = ({
  title = "Rick And Morty",
}) => {
  return (
    <Header>
      <h1 className="title">
        <Link to="/">{title}</Link>
      </h1>
      <FilterSearch placeholder="Search name" label="Name" />
      <HiddenSpace titlePage={title} />
    </Header>
  );
};

export default HeaderBar;
