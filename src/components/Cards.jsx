const profiles = [
  {
    name: "Lelah Nichols",
    location: "Troy, MI",
    image: "https://randomuser.me/api/portraits/women/1.jpg", // Realistic avatar
    tags: ["clothes", "stem"],
    category: "New users",
  },
  {
    name: "Jesus Weiss",
    location: "Fort Worth, TX",
    image: "https://randomuser.me/api/portraits/men/2.jpg", // Realistic avatar
    tags: ["headset", "speed", "winter"],
    category: "Reputation",
  },
  {
    name: "Annie Rice",
    location: "Austin, TX",
    image: "https://randomuser.me/api/portraits/women/3.jpg", // Realistic avatar
    tags: ["road", "mountain", "trip", "earth"],
    category: "Moderators",
  },
  {
    name: "Robert Brower",
    location: "Cincinnati, OH",
    image: "https://randomuser.me/api/portraits/men/4.jpg", // Realistic avatar
    tags: ["Maintenance", "gears", "frames"],
    category: "Voters",
  },
  {
    name: "Amy Campbell",
    location: "Warrior, AL",
    image: "https://randomuser.me/api/portraits/women/5.jpg", // Realistic avatar
    tags: ["music", "disks"],
    category: "Editors",
  },
  {
    name: "Anthony S. Morin",
    location: "Lyndhurst, NJ",
    image: "https://randomuser.me/api/portraits/men/6.jpg", // Realistic avatar
    tags: ["vintage", "electric"],
    category: "Reputation",
  },
];

function CardsGrid({ searchQuery, category }) {
  // Filter profiles based on searchQuery and category
  const filteredProfiles = profiles.filter((profile) => {
    const matchesSearch =
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesCategory = !category || profile.category === category; // Match by category
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-wrap lg:p-6 md:p-6 p-0 gap-3 justify-center cursor-default">
      {filteredProfiles.map((profile, index) => (
        <div
          key={index}
          className="flex lg:flex-row  w-full lg:h-40 md:h-60 sm:w-1/2 md:w-[48%] lg:w-1/4 xl:w-1/4 p-4 gap-2 rounded-xl hover:border bg-white hover:border-slate-300 hover:shadow-md hover:bg-white transition "
        >
          {/* Image Section */}
          <div className="flex items-start justify-center w-1/3 h-full">
            <img
              src={profile.image}
              alt={profile.name}
              className="h-14 w-14 rounded-full object-cover"
            />
          </div>
          {/* Content Section */}
          <div className="flex flex-col flex-grow w-3/4 h-full gap-4">
            <div className="flex flex-col w-full">
              <h1 className="text-lg font-black text-slate-800 font-serif">
                {profile.name}
              </h1>
              <p className="text-sm font-sans font-normal text-gray-500">{profile.location}</p>
            </div>
            <div className="flex flex-wrap gap-2 w-full">
              {profile.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 text-xs font-normal font-serif capitalize text-center text-indigo-500 border border-slate-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardsGrid;
