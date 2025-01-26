function Footer() {
  return (
    <footer className=" border border-zinc-700 rounded-md select-none">
      <div className=" flex flex-col gap-2 items-center py-2">
        <div className=" flex gap-2 items-center">
          <img
            className=" size-6"
            src="https://img.icons8.com/m_sharp/200/FA5252/arch-linux.png"
          />
          <span className=" text-xl font-semibold">Fap-stack</span>
        </div>
        <p className="text-sm  ">© 2025 Fap-stack. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
