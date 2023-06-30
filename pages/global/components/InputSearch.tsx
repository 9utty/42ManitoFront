import { Input } from "antd";
import { useRouter } from "next/router";
import Search from "../../search/Search";

const SearchInput = () => {
  const router = useRouter();

  const handleSearch = (value: string) => {
    router.push({
      pathname: "/search/Search",
      query: { query: value },
    });
  };

  return (
    <Input.Search
      enterButton
      onSearch={handleSearch}
      style={{ verticalAlign: "middle" }}
    />
  );
};

export default SearchInput;
