import React from "react";

const SchemesPage = () => {
  const schemes = [
    {
      title: "ପିଏମ କିଷାନ୍ (PM-KISAN)",
      desc: "ପ୍ରତି ଚାଷୀଙ୍କୁ ପ୍ରତି ବର୍ଷ ₹6000 ସହାୟତା ଦିଆଯାଏ।",
    },
    {
      title: "ଫସଲ ବୀମା ଯୋଜନା",
      desc: "ଫସଲ ନଷ୍ଟ ହେଲେ ସରକାରୀ ବୀମା ଦ୍ୱାରା ସହାୟତା।",
    },
    {
      title: "କିଷାନ କ୍ରେଡିଟ୍ କାର୍ଡ୍ (KCC)",
      desc: "ଚାଷୀମାନଙ୍କ ପାଇଁ ରିଣ୍ ଓ ସୁବିଧା।",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        🏛 ସରକାରୀ ଯୋଜନା
      </h2>
      <div className="space-y-4">
        {schemes.map((s, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold text-green-800">{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchemesPage;
