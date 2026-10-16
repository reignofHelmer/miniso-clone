import Image from "next/image";

interface stats_card_component_props {
  img: string;
  h6: string;
  p: string;
}

const Stats_card_component = ({ img, h6, p }: stats_card_component_props) => {
  return (
    <section className="text-center space-y-3 mb-6">
      <img src={img} alt="an image" className="mx-auto"/>
      <h6 className="font-semibold">{h6}</h6>
      <p className="text-[#f12535] font-semibold">{p}</p>
    </section>
  );
};

export const Stats = () => {
  const stats_info_array: stats_card_component_props[] = [
    {
      img: "https://miniso.com/vancheerfile/images/2024/3/20240308182650087.png",
      h6: "Global Markets",
      p: "112",
    },
    {
      img: "https://miniso.com/vancheerfile/images/2024/3/20240308182626732.png",
      h6: "Global Stores",
      p: "8500 +",
    },
    {
      img: "https://miniso.com/vancheerfile/images/2024/3/2024030818263935.png",
      h6: "Registered Members",
      p: "100 million +",
    },
    {
      img: "https://miniso.com/vancheerfile/images/2024/3/20240308182539248.png",
      h6: "In-store Customers",
      p: "1 billion",
    },
  ];

  return (
    <section className="text-[12px] py-15">
      <h2 className="text-2xl font-semibold flex items-center justify-center mb-4">
        {" "}
        <span>LIFE IS</span>{" "}
        <img
          src="https://miniso.com/en/images/nimg48_1.png"
          alt=""
          className="inline w-[17px] mx-2"
        />{" "}
        <span>FOR FUN</span>{" "}
      </h2>

      <div className="grid grid-cols-2 xl:grid-cols-4">
        {stats_info_array.map((item, i) => (
          <Stats_card_component
            key={i}
            img={item.img}
            h6={item.h6}
            p={item.p}
          />
        ))}
      </div>
    </section>
  );
};
