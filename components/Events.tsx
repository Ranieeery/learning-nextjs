import Link from "next/link";

interface EventsProps {
  date: Date;
  title: string;
  description: string;
  author: string;
}

const Events = ({ date, title, description, author }: EventsProps) => {
  const day = date.getDate().toString();
  const month = date
    .toLocaleString("pt-BR", { month: "short" })
    .substring(0, 3); //Sem o substring fica com um "." no final, foi a forma que encontrei para resolver

  return (
    <div className="bg-[#262D34] text-[#97989D] flex absolute">
      <div className="bg-[#2C353D] flex flex-col justify-center items-center px-10 py-4 border border-solid border-[#262D34] rounded-md">
        <p className="text-[#F7F7F7]">{month.toLocaleUpperCase()}</p>
        <p className="text-[#6C54F6]">{day}</p>
      </div>

      <div className="px-6"> 
        <p className="text-white">{title.toUpperCase()}</p>
        <p>{description}</p>

        <p>
          by{" "}
          <Link href={`/${author}`} className="text-[#6C54F6]">
            {author}
          </Link>
        </p>
      </div>
    </div>
  );
};

// Para testes apenas
Events.defaultProps = {
  date: new Date(),
  title: "Live JavaScript",
  description: "Live programando em JavaScript",
  author: "sonhos",
};

export default Events;
