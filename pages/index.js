import fetch from "isomorphic-unfetch";
import Layout from "../component/layout";
import Prices from '../component/prices';

const Index = (props) => (
  <div>
    <Layout>
      <div>Welcome Awesome OS Web Dev!!!</div>
      <Prices bpi={props.bpi} />
    </Layout>
  </div>
);

Index.getInitialProps = async function() {
  const result = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  const data = await result.json();


  return{
    bpi: data.bpi
  }
};
export default Index;
