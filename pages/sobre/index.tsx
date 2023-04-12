import Link from "next/link";

const Sobre = () => {
  return (
    <div>
      <h1>Sobre</h1>

      <ul>
        <li><Link href={"/sobre/raniery"}>Raniery</Link></li>
        <li><Link href={"/sobre/lua"}>Lua</Link></li>
      </ul>
    </div>
  );
};

export default Sobre;
