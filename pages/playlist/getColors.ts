export const getColors = (id) => {
  const colors = [
    {
      gr: "from-rose-800",
      bg: "bg-rose-800",
    },
    {
      gr: "from-indigo-800",
      bg: "bg-indigo-800",
    },
    {
      gr: "from-sky-800",
      bg: "bg-sky-800",
    },
    {
      gr: "from-teal-800",
      bg: "bg-teal-800",
    },
    {
      gr: "from-emerald-800",
      bg: "bg-emerald-800",
    },
    {
      gr: "from-stone-800",
      bg: "bg-stone-800",
    },
    {
      gr: "from-cyan-800",
      bg: "bg-cyan-800",
    },
    {
      gr: "from-amber-800",
      bg: "bg-amber-800",
    },
  ];

  const color = colors.map((c) => c);

  return color[id - 1] || color[Math.floor(Math.random() * color.length)];
};
