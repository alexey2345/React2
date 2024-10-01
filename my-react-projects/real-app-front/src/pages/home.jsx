

import PageHeader from "../components/common/pageHeader";
import Logo from "../components/logo";
import CardPage from "../components/cards/cardPage";

function Home(props) {


  return (
    <div className="container">
      <PageHeader title={<Logo />} description="Why you should use real app" />
      <CardPage searchValue={props.searchValue} />

    </div>
  );
}

export default Home;
