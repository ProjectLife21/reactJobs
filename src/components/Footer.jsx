const Footer = () => {
  return (
    <footer className="bg-blue-700">
      <div className=" max-w-[1200px] m-auto pt-5 pb-5 text-lg text-center text-white">
        <p>
          Copyright {new Date().getFullYear().toString()} by{" "}
          <span className="text-indigo-200 font-bold">APKA</span> . All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
