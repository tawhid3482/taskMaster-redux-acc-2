import loading from '../../assets/image/loading.gif';
const Loading = () => {
  const styles = {
    background: `radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 30%)`,
  };

  return (
    <div className="relative flex justify-center items-center h-screen w-full">
      <div style={styles} className=" h-full w-full absolute top-0"></div>
      <img src={loading} alt="" />
    </div>
  );
};

export default Loading;
