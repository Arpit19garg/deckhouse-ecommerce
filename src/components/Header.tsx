interface HeaderProps {
  title?: string;
}

function Header({ title = 'Deckhouse E-Commerce' }: HeaderProps) {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </header>
  );
}

export default Header;
