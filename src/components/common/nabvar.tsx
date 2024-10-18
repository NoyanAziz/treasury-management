const Navbar = () => {
  return (
    <nav className="bg-primary p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl">Treasury Management</div>
        <ul className="flex space-x-4">
          <li>
            <a href="/dashboard" className="hover:underline">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/transactions" className="hover:underline">
              Transactions
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
