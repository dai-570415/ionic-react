import { Layout } from '../components/Layout/Layout';

const Index: React.FC = () => {
  return (
    <Layout>
      <h1>Top Page</h1>
      <img
        src={`${process.env.PUBLIC_URL}/assets/img/icon.png`} 
        style={{ 
          width: "50px",
          height: "50px"
        }}
        alt="icon" 
      />
    </Layout>
  );
};

export default Index;
